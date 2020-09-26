import { Guild, GuildDocument } from './models/guild';
import DBWrapper from './db-wrapper';
import SnowflakeEntity from './snowflake-entity';

export default class Guilds extends DBWrapper<SnowflakeEntity, GuildDocument> {
    protected async getOrCreate({ id }: SnowflakeEntity) {
        return (await Guild.findById(id))
            ?.populate('owner')
            .populate('members')
            .populate('channels')
            .execPopulate();
    }

    async getUserGuilds(userId: string) {
        const userGuilds = (await Guild.find())
            .filter(g => g.members.includes(userId as any));
        
        const guilds = [];
        for (const guild of userGuilds)
            guilds.push(await guild
                .populate('owner')
                .populate('members')
                .populate('channels')
                .execPopulate());
        return guilds;
    }
}

import './models/channel';
import './models/guild-member';