import Deps from '../utils/deps';
import DBWrapper from './db-wrapper';
import Guilds from './guilds';
import { ChannelPings, PingDocument } from './models/ping';
import { Lean } from './types/entity-types';
import Users from './users';

export default class Pings extends DBWrapper<string, PingDocument> {
  constructor(
    private guilds = Deps.get<Guilds>(Guilds),
    private users = Deps.get<Users>(Users),
  ) {
    super();
  }

  public async get(id: string | undefined) {
    const channelPings = await ChannelPings.findById(id);
    if (!channelPings)
      throw new TypeError('Channel Not Found');
    return channelPings;
  }

  protected create(id: string) {
    return new ChannelPings({ _id: id }).save();
  }

  public async getChannelPings(channelId: string) {
    return await ChannelPings.find({ _id: channelId });
  }

  public async handle(message: Lean.Message): Promise<boolean> {
    const user = await this.users.getSelf(message.authorId, false);
    const guild = await this.guilds.getFromChannel(message.channelId);

    return user.ignored.channelIds.includes(message.channelId)
      || user.ignored.guildIds.includes(guild?.id)
      || user.ignored.userIds.includes(message.authorId);
  }
}
