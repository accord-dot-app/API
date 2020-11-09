import { Channel, ChannelType } from '../data/models/channel';
import { StatusType, User, UserDocument } from '../data/models/user';
import { generateSnowflake } from '../data/snowflake-entity';
import io from 'socket.io-client';
import Log from '../utils/log';

export class Bot {
  private socket = io('http://localhost:3000');

  private _self: UserDocument;
  get self() { return this._self; }

  constructor() {
    this.socket.on('connect', () => Log.info('Connected to ws client', 'bot'));
    this.socket.connect();
  }

  async init() {
    this._self = await this.get();

    const channels = await Channel.find({ type: ChannelType.DM, recipientIds: this.self._id });

    this.socket.emit('READY', {
      user: this.self,
      guildIds: [],
      channelIds: channels.map(d => d._id)
    });

    Log.info('Initialized bot', 'bot');
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
}
