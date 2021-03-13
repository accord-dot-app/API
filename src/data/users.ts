import DBWrapper from './db-wrapper';
import jwt from 'jsonwebtoken';
import { User, UserDocument } from './models/user';
import { generateSnowflake } from './snowflake-entity';
import { readdirSync } from 'fs';
import { resolve } from 'path';
import { Guild } from './models/guild';
import { UserTypes } from './types/entity-types';

export default class Users extends DBWrapper<string, UserDocument> {
  private avatarNames = [];
  private systemUser: UserDocument;

  constructor() {
    super();

    this.avatarNames = readdirSync(resolve('assets/avatars'))
      .filter(n => n.startsWith('avatar'));
  }

  protected async getOrCreate(id: string) {
    return (await User.findById(id))
      ?.populate('friends')
      .execPopulate();
  }

  public async getKnown(userId: string) {
    return await User.find({
      $or: [
        { _id: this.systemUser._id },
        { friends: userId },
        { friendRequests: { userId, type: 'INCOMING' } },
        { friendRequests: { userId, type: 'OUTGOING' } }
      ]
    });
  }

  public async getGuilds(userId: string) {
    return (await User
      .findById(userId, 'guilds')
      .populate('guilds')
      .populate({ path: 'guilds', model: Guild })
      .exec()).guilds;
  }

  public async getGuild(userId: string, guildId: string) {
    return (await User
      .findOne({ _id: userId, guilds: guildId as any }, 'guilds')
      .populate('guilds')
      .populate({ path: 'guilds', model: Guild })
      .exec()).guilds;
  }

  public async getSystemUser() {
    return this.systemUser = await User.findOne({ username: 'DClone' })
      ?? await User.create({
        _id: generateSnowflake(),
        avatarURL: `${process.env.API_URL ?? 'http://localhost:3000'}/avatars/avatar_grey.png`,
        badges: [],
        bot: true,
        createdAt: new Date(),
        status: 'ONLINE',
        username: 'DClone',
        friends: [],
        friendRequests: [],
        guilds: [],
        voice: null,
      });
  }

  public createToken(userId: string) {
    return jwt.sign({ _id: userId }, 'secret' , { expiresIn : '7d' })
  }

  public createUser(username: string, password: any) {
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
