import { Guild, GuildDocument } from './models/guild';
import DBWrapper from './db-wrapper';

export default class Guilds extends DBWrapper<string, GuildDocument> {
    protected async getOrCreate(id: string) {
        return (await Guild.findById(id))
            ?.populate('owner')
            .populate('members')
            .populate('channels')
            .execPopulate();
    }

    async getUserGuilds(userId: string) {
        const userGuilds = (await Guild
            .find()
            .populate('members')
            .exec())
            .filter(g => g.members.some(m => m.user === userId as any));
        
        const guilds = [];
        for (const guild of userGuilds) {
            const g = await guild
                .populate('owner')
                .populate('channels')
                .execPopulate();
            const members = [];
            for (const member of guild.members) {
                const m = member.populate('user');
                members.push(m);
            }
            guilds.push(g);
        }
        return guilds;
    }
}

import './models/channel';
import './models/guild-member';