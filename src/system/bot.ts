import { Channel } from '../data/models/channel';
import { UserDocument } from '../data/models/user';
import { generateSnowflake } from '../data/snowflake-entity';
import Log from '../utils/log';
import { Invite } from '../data/models/invite';
import Deps from '../utils/deps';
import Users from '../data/users';
import { Args } from '../api/websocket/ws-events/ws-event';
import { WSService } from './ws-service';
import { Lean } from '../data/types/entity-types';
import Channels from '../data/channels';
import Invites from '../data/invites';

export class SystemBot {
  private _self: UserDocument;
  get self() { return this._self; }

  constructor(
    private channels = Deps.get<Channels>(Channels),
    private invites = Deps.get<Invites>(Invites),
    private users = Deps.get<Users>(Users),
    private ws = Deps.get<WSService>(WSService),
  ) {}

  public async init() {
    if (this.self) return;
    this._self = await this.users.updateSystemUser();

    await this.readyUp();

    this.hookWSEvents();
  }

  private async readyUp() {
    const key = this.users.createToken(this.self.id);
    this.ws.emit('READY', { key });

    Log.info('Initialized bot', 'bot');
  }

  private hookWSEvents() {
    this.ws.on('MESSAGE_CREATE', async ({ message }: Args.MessageCreate) => {
      const author = await this.users.get(message.authorId);
      const channel = await this.channels.get(message.channelId);
      if (!author || channel.type !== 'TEXT' || author.bot) return;

      if (message.content.toLowerCase() === 'hi') {
        await this.message(channel, `Hi, @${author.username}!`)
      }
    });
  }

  async message(channel: Lean.Channel, content: string) {
    this.ws.emit('MESSAGE_CREATE', {
      channelId: channel._id,
      partialMessage: {
        content,
      }
    });
  }

  async getDMChannel(user: UserDocument) {
    return await Channel.findOne({ memberIds: [user._id, this.self._id] })
      ?? await Channel.create({
        _id: generateSnowflake(),
        type: 'DM',
        memberIds: [user._id, this.self._id],
      });
  }

  public async addToGuild(guildId: string) {
    const invite = await this.invites.create({
      guildId,
      options: { maxUses: 1 },
    }, this.self._id);

    this.ws.emit('GUILD_MEMBER_ADD', { inviteCode: invite.id });

    const systemChannel = await this.channels.getSystem(guildId);
    if (systemChannel)
      await this.message(systemChannel, `Hi, I'm **2PG**! 🤖`);
  }
}
