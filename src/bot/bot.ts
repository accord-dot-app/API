import { Channel, ChannelDocument, ChannelType } from '../data/models/channel';
import { StatusType, User, UserDocument } from '../data/models/user';
import { generateSnowflake } from '../data/snowflake-entity';
import io from 'socket.io-client';
import Log from '../utils/log';
import { Guild, GuildDocument } from '../data/models/guild';
import { Invite } from '../data/models/invite';
import { generateInviteCode } from '../utils/utils';
import { MessageDocument } from '../data/models/message';
import { GuildMember } from '../data/models/guild-member';
import Deps from '../utils/deps';
import Messages from '../data/messages';
import { CommandHandler } from './handlers/command-handler';

export class Bot {
  public readonly socket = io(`http://localhost:${process.env.PORT}`);
  public readonly commandHandler = new CommandHandler(this);

  private _self: UserDocument;
  get self() { return this._self; }

  constructor(private messages = Deps.get<Messages>(Messages)) {
    this.socket.on('connect', () => Log.info('Connected to ws client', 'bot'));
    this.socket.connect();
  }

  public async init() {
    this._self = await this.get();

    await this.commandHandler.init();
    await this.readyUp();

    this.hookWSEvents();
  }

  private async readyUp() {
    const channels = await Channel.find({
      type: ChannelType.DM,
      recipientIds: this.self._id
    });
    const channelIds: string[] = channels.map(d => d.id);
    const guildIds: string[] = [];

    const botMembers = await GuildMember.find({ user: this.self.id });
    for (const member of botMembers) {
      const guild = await Guild.findById(member.guildId);
      guildIds.push(guild.id);

      for (const channel of guild.channels)
        channelIds.push(channel as any);
    }

    this.socket.emit('READY', { user: this.self, guildIds, channelIds });

    Log.info('Initialized bot', 'bot');
  }

  public sendMessage(channel: ChannelDocument, guild: GuildDocument, content: string) {
    this.socket.emit('MESSAGE_CREATE', {
      author: this.self, channel, content, guild,
    });
  }

  private hookWSEvents() {
    this.socket.on('MESSAGE_CREATE', async (message: MessageDocument) => {
      message = await this.messages.get(message._id);
      if (!message.guild && message.author.bot) return;

      const prefix = '.';
      if (message.content.startsWith(prefix))
        await this.commandHandler.handle(prefix, message);
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
        type: ChannelType.DM,
        recipientIds: [user._id, this.self._id]
      });
  }

  async get() {
    return await User.findOne({ username: '2PG' })
      ?? await User.create({
        _id: generateSnowflake(),
        avatarURL: `${process.env.API_URL ?? 'http://localhost:3000'}/avatars/bot.png`,
        badges: [],
        bot: true,
        createdAt: new Date(),
        status: StatusType.Online,
        username: '2PG',
        friends: [],
        friendRequests: [],
        voice: null,
      });
  }

  async addToGuild(guildId: string) {
    const invite = await Invite.create({
      _id: generateInviteCode(),
      createdAt: new Date(),
      expiresAt: null,
      guild: await Guild.findById(guildId),
      inviter: this.self,
      maxUses: 1,
      uses: 0
    });

    this.socket.emit('GUILD_MEMBER_ADD', {
      inviteCode: invite.id,
      user: this.self
    });

    const systemChannel = await Channel.findOne({ guildId, type: ChannelType.Text });
    this.socket.emit('MESSAGE_CREATE', {
      author: this.self,
      channel: systemChannel,
      content: `Hi, I'm **2PG**! 🤖`
    });
  }
}
