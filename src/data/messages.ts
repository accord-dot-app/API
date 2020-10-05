import DBWrapper from './db-wrapper';
import { Message, MessageDocument } from './models/message';

export default class Messages extends DBWrapper<string, MessageDocument> {
  protected async getOrCreate(id: string) {
    return this.populate(await Message.findById(id));
  }

  protected create(id: string) {
    return new Message({ _id: id }).save();
  }

  populate(doc: MessageDocument) {
    return doc
      ?.populate('author')
      .populate('channel')
      .populate('guild')
      .execPopulate();
  }
}