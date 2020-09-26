import DBWrapper from './db-wrapper';
import SnowflakeEntity from './snowflake-entity';
import { Channel, ChannelDocument } from './models/channel';

export default class Channels extends DBWrapper<SnowflakeEntity, ChannelDocument> {
    protected async getOrCreate({ id }: SnowflakeEntity) {
        return (await Channel.findById(id));
    }
}