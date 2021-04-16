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

  public async add(user: SelfUserDocument, message: Lean.Message) {
    const shouldStore = await this.handle(message);
    if (!shouldStore) return;

    user.lastReadMessages[message.channelId] = message._id;
    await user.save();
  }

  public async handle(message: Lean.Message): Promise<boolean> {
    const user = await this.users.getSelf(message.authorId, false);
    const guild = await this.guilds.getFromChannel(message.channelId);

    return user.ignored.channelIds.includes(message.channelId)
      || user.ignored.guildIds.includes(guild?.id)
      || user.ignored.userIds.includes(message.authorId);
  }

  public markAsRead(user: SelfUserDocument, message: Lean.Message) {
    user.lastReadMessages[message.channelId] = message._id;
    return user.save();
  }
}
