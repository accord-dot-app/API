import { Guild, GuildDocument } from './models/guild';
import DBWrapper from './db-wrapper';
import SnowflakeEntity from './snowflake-entity';

export default class Guilds extends DBWrapper<SnowflakeEntity, GuildDocument> {
    protected async getOrCreate({ id }: SnowflakeEntity) {
        return (await Guild.findById(id) ?? await this.create({ id }))
            .execPopulate();
    }

    protected create({ id }: SnowflakeEntity) {
        return new Guild({ _id: id }).save();
    }

    async getUserGuilds(userId: string) {
        const promises = (await Guild.find())
            .filter(g => g.members.includes(userId as any))
            .map(g => g.execPopulate());
        
        const guilds = [];
        for (const promise of promises)
            guilds.push(await promise);
        return guilds;
    }
}