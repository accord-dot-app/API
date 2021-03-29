import DBWrapper from './db-wrapper';
import { Channel } from './models/channel';
import { Message, MessageDocument } from './models/message';

export default class Messages extends DBWrapper<string, MessageDocument> {
  public async get(id: string | undefined) {
    const message = await Message.findById(id);
    if (!message)
      throw new TypeError('Message Not Found');
    return message;
  }

  protected create(id: string) {
    return new Message({ _id: id }).save();
  }

  public async getChannelMessages(channelId: string) {
    return await Message.find({ channelId });
  }

  public async getDMChannelMessages(channelId: string, memberId: string) {
    const isMember = await Channel.exists({ _id: channelId, memberIds: memberId });
    if (isMember)
      throw new TypeError('You cannot access this channel');
    return await Message.find({ channelId });
  }
}