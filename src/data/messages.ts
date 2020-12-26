import DBWrapper from './db-wrapper';
import { Message, MessageDocument } from './models/message';

export default class Messages extends DBWrapper<string, MessageDocument> {
  protected async getOrCreate(id: string) {
    return await Message
      .findById(id)
      ?.populate('author')
      .populate('channel')
      .populate('guild')
      .exec();
  }

  protected create(id: string) {
    return new Message({ _id: id }).save();
  }

  populate(doc: MessageDocument) {
    return doc
      .execPopulate();
  }
}