import Deps from '../utils/deps';
import Channels from './channels';
import DBWrapper from './db-wrapper';
import Guilds from './guilds';
import { ChannelPings, PingDocument } from './models/ping';
import { generateSnowflake } from './snowflake-entity';
import { Lean, PingTypes } from './types/entity-types';
import Users from './users';

export default class Pings extends DBWrapper<string, PingDocument> {
  constructor(
    private channels = Deps.get<Channels>(Channels),
    private guilds = Deps.get<Guilds>(Guilds),
    private users = Deps.get<Users>(Users),
  ) {
    super();
  }

  public async get(id: string | undefined) {
    await this.channels.get(id);
    return await ChannelPings.findById(id)
      ?? await this.create(id);
  }

  protected create(id: string | undefined) {
    return new ChannelPings({ _id: id }).save();
  }

  public async getChannelPings(channelId: string) {
    return await ChannelPings.find({ _id: channelId });
  }

  public async store(userId: string, message: Lean.Message) {
    const shouldStore = await this.handle(message);
    if (!shouldStore) return;

    const channelPings = await this.get(message.channelId);
    const ping: PingTypes.Message = { userId, lastRead: message._id };
    await channelPings.updateOne({
      $push: { pings: ping },
    }, { context: 'query' });
  }

  public async handle(message: Lean.Message): Promise<boolean> {
    const user = await this.users.getSelf(message.authorId, false);
    const guild = await this.guilds.getFromChannel(message.channelId);

    return user.ignored.channelIds.includes(message.channelId)
      || user.ignored.guildIds.includes(guild?.id)
      || user.ignored.userIds.includes(message.authorId);
  }
}
