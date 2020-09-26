import { Guild, GuildDocument } from './models/guild';
import DBWrapper from './db-wrapper';
import SnowflakeEntity from './snowflake-entity';

export default class Guilds extends DBWrapper<SnowflakeEntity, GuildDocument> {
    protected async getOrCreate({ id }: SnowflakeEntity) {
        return await Guild.findById(id)
          ?? this.create({ id });
    }

    protected create({ id }: SnowflakeEntity) {
        return new Guild({ _id: id }).save();
    }
}