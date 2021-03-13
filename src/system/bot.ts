import { Channel } from '../data/models/channel';
import { UserDocument } from '../data/models/user';
import { generateSnowflake } from '../data/snowflake-entity';
import io from 'socket.io-client';
import Log from '../utils/log';
import { Invite } from '../data/models/invite';
import { generateInviteCode } from '../utils/utils';
import Deps from '../utils/deps';
import Messages from '../data/messages';
import Users from '../data/users';
import { Args, Params } from '../api/websocket/ws-events/ws-event';

export class SystemBot {
  public readonly socket = io(`http://localhost:${process.env.PORT}`);

  private _self: UserDocument;
  get self() { return this._self; }

  constructor(
    private messages = Deps.get<Messages>(Messages),
    private users = Deps.get<Users>(Users),
  ) {
    this.socket.on('connect', () => Log.info('Connected to ws client', 'bot'));
    this.socket.connect();
  }

  public async init() {
    this._self = await this.users.getSystemUser();

    await this.readyUp();

    this.hookWSEvents();
  }

  private async readyUp() {
    const dmChannels = await Channel.find({
      type: 'DM',
      recipientIds: this.self._id
    });

    this.socket.emit('READY', {
      channelIds: (await this.self
        .execPopulate() as any).guilds
        .flatMap(g => g.channels as string[]),
        // .concat(dmChannels.flatMap(c => c.id)),
      guildIds: this.self.guilds as string[],
      key: this.users.createToken(this.self.id),
    } as Params.Ready);

    Log.info('Initialized bot', 'bot');
  }

  public sendMessage(channelId: string, guildId: string, content: string) {
    this.socket.emit('MESSAGE_CREATE', {
      partialMessage: {
        authorId: this.self._id,
        channelId: channelId,
        content,
        guildId: guildId,
      }
    } as Params.MessageCreate);
  }

  private hookWSEvents() {
    this.socket.on('MESSAGE_CREATE', async ({ message }: Args.MessageCreate) => {
      const author = await this.users.get(message.authorId);

      message = await this.messages.get(message._id);
      if (!message.guildId && author.bot) return;

      if (message.content.toLowerCase() === 'hi') {
        this.sendMessage(message.channelId, message.guildId, `Hi, @${author.username}!`)
      }
    });
  }

  async dm(recipient: UserDocument, content: string) {
    this.socket.emit('MESSAGE_CREATE', {
      author: this.self,
      channel: await this.getDMChannel(recipient),
      content
    });
  }

  async getDMChannel(user: UserDocument) {
    return await Channel.findOne({ recipientIds: [user._id, this.self._id] })
      ?? await Channel.create({
        _id: generateSnowflake(),
        createdAt: new Date(),
        type: 'DM',
        recipientIds: [user._id, this.self._id]
      });
  }

  public async addToGuild(guildId: string) {
    const invite = await Invite.create({
      _id: generateInviteCode(),
      createdAt: new Date(),
      expiresAt: null,
      guildId,
      inviterId: this.self._id,
      maxUses: 1,
      uses: 0
    });

    this.socket.emit('GUILD_MEMBER_ADD', {
      inviteCode: invite.id,
      user: this.self
    });

    const systemChannel = await Channel.findOne({ guildId, type: 'TEXT' });
    this.socket.emit('MESSAGE_CREATE', {
      author: this.self,
      channel: systemChannel,
      content: `Hi, I'm **2PG**! 🤖`
    });
  }
}
