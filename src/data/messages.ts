import DBWrapper from './db-wrapper';
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

  public getChannelMessages(channelId: string) {
    return Message.find({ channelId });
  }
}