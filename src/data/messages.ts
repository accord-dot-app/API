import DBWrapper from './db-wrapper';
import SnowflakeEntity from './snowflake-entity';
import { Message, MessageDocument } from './models/message';

export default class Messages extends DBWrapper<SnowflakeEntity, MessageDocument> {
  protected async getOrCreate({ id }: SnowflakeEntity) {
    return this.populate(await Message.findById(id));
  }

  protected create({ id }: SnowflakeEntity) {
    return new Message({ _id: id }).save();
  }

  populate(doc: MessageDocument) {
    return doc
      ?.populate('author')
      .populate('channel')
      .execPopulate();
  }
}