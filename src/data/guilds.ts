import { Guild, GuildDocument } from './models/guild';
import DBWrapper from './db-wrapper';

export default class Guilds extends DBWrapper<string, GuildDocument> {
  protected getOrCreate(id: string) {
    return Guild.findById(id)
      ?.populate('members')
      .populate('roles')
      .populate('channels')
      .exec();
  }

  public async getUserGuilds(userId: string) {
    const userGuilds = (await Guild
      .find()
      .populate('members')
      .populate('roles')
      .exec())
      .filter(g => g.members.some(m => m.userId === userId));
    
    const guilds = [];
    for (const userGuild of userGuilds) {
      const guild = await userGuild
        ?.populate('channels')
        .execPopulate();
      guilds.push(guild);
    }
    return guilds;
  }

  public async getUserGuild(userId: string, guildId: string) {
    const guild = await Guild.findById(guildId);
    const inGuild = guild.members.some(m => m.userId === userId);
    return (inGuild) ? guild : null;
  }
}