import { SystemBot } from '../system/bot';
import Deps from '../utils/deps';
import DBWrapper from './db-wrapper';
import jwt from 'jsonwebtoken';
import { User, UserDocument, UserVoiceState } from './models/user';
import { generateSnowflake } from './snowflake-entity';
import { readdirSync } from 'fs';
import { resolve } from 'path';

export default class Users extends DBWrapper<string, UserDocument> {
  avatarNames = [];

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
        ,
        { friends: userId },
        { friendRequests: { userId, type: 'INCOMING' } },
        { friendRequests: { userId, type: 'OUTGOING' } }
      ]
    });
  }

  public async getSystemUser() {
    return await User.findOne({ username: 'DClone' })
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
      voice: new UserVoiceState()
    }, password);
  }

  private getRandomAvatar() {
    const randomIndex = Math.floor(Math.random() * this.avatarNames.length);
    return this.avatarNames[randomIndex];
  }
}
