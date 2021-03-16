import DBWrapper from './db-wrapper';
import jwt from 'jsonwebtoken';
import { User, UserDocument } from './models/user';
import { generateSnowflake } from './snowflake-entity';
import { readdirSync } from 'fs';
import { resolve } from 'path';
import { Lean, UserTypes } from './types/entity-types';
import { Channel } from './models/channel';

export default class Users extends DBWrapper<string, UserDocument> {
  private avatarNames: string[] = [];
  private systemUser: UserDocument;

  constructor() {
    super();

    this.avatarNames = readdirSync(resolve('assets/avatars'))
      .filter(n => n.startsWith('avatar'));
  }

  public async get(id: string | undefined) {
    const user = (await User
      .findById(id))
      ?.populate('friends')
      .execPopulate();
    if (!user)
      throw new TypeError('User Not Found');
    return user;
  }

  public async getKnown(userId: string) {
    return await User.find({
      $or: [
        { _id: userId },
        { _id: this.systemUser._id },
        { friends: userId as any },
        { friendRequests: { userId, type: 'INCOMING' } },
        { friendRequests: { userId, type: 'OUTGOING' } }
      ]
    });
  }

  public async getGuilds(userId: string) {
    return (await User
      .findById(userId)
      ?.populate({
        path: 'guilds',
        populate: { path: 'channels' }
      })
      .populate({
        path: 'guilds',
        populate: { path: 'members' }
      })
      .populate({
        path: 'guilds',
        populate: { path: 'roles' }
      })
      .exec())?.guilds as Lean.Guild[] | undefined;
  }

  public async getDMChannels(userId: string) {
    return await Channel.find({ memberIds: userId });
  }

  public async getGuild(userId: string, guildId: string) {
    return (await User
      .findOne({
        _id: userId,
        guilds: guildId as any
      }, 'guilds')
      ?.populate({
        path: 'guilds',
        populate: { path: 'channels' }
      })
      .populate({
        path: 'guilds',
        populate: { path: 'members' }
      })
      .populate({
        path: 'guilds',
        populate: { path: 'roles' }
      })
      .exec())?.guilds;
  }

  public async getSystemUser() {
    return this.systemUser = await User.findOne({ username: 'DClone' })
      ?? await User.create({
        _id: generateSnowflake(),
        avatarURL: `${process.env.API_URL ?? 'http://localhost:3000'}/avatars/bot.png`,
        badges: [],
        bot: true,
        createdAt: new Date(),
        status: 'ONLINE',
        username: '2PG',
        friends: [],
        friendRequests: [],
        guilds: [],
        voice: new UserTypes.VoiceState,
      });
  }

  public createToken(userId: string) {
    return jwt.sign({ _id: userId }, 'secret' , { expiresIn : '7d' })
  }

  public createUser(username: string, password: any): Promise<UserDocument> {
    const randomAvatar = this.getRandomAvatar();
    return (User as any).register({
      _id: generateSnowflake(),
      username,
      avatarURL: `${process.env.API_URL ?? 'http://localhost:3000'}/avatars/${randomAvatar}`,
      badges: [],
      bot: false,
      createdAt: new Date(),
      friends: [],
      status: 'ONLINE',
      voice: new UserTypes.VoiceState()
    }, password);
  }

  private getRandomAvatar() {
    const randomIndex = Math.floor(Math.random() * this.avatarNames.length);
    return this.avatarNames[randomIndex];
  }
}
