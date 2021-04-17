import Deps from '../utils/deps';
import Channels from './channels';
import DBWrapper from './db-wrapper';
import Guilds from './guilds';
import { SelfUserDocument } from './models/user';
import { Lean } from './types/entity-types';
import Users from './users';

export default class Pings {
  constructor(
    private channels = Deps.get<Channels>(Channels),
    private guilds = Deps.get<Guilds>(Guilds),
    private users = Deps.get<Users>(Users),
  ) {}

  public markAsRead(user: SelfUserDocument, message: Lean.Message) {
    user.lastReadMessages[message.channelId] = message._id;
    return user.save();
  }
}
