import DBWrapper from './db-wrapper';
import SnowflakeEntity from './snowflake-entity';
import { Message, MessageDocument } from './models/message';

export default class Messages extends DBWrapper<SnowflakeEntity, MessageDocument> {
  protected async getOrCreate({ id }: SnowflakeEntity) {
    return (await Message.findById(id))
        ?.populate('author')
        .populate('channel')
        .execPopulate();
  }

  protected create({ id }: SnowflakeEntity) {
    return new Message({ _id: id }).save();
  }
}