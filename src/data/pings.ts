import DBWrapper from './db-wrapper';
import { Channel } from './models/channel';
import { ChannelPings, PingDocument } from './models/ping';

export default class Pings extends DBWrapper<string, PingDocument> {
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
}
