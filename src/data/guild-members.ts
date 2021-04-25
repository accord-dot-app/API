import DBWrapper from './db-wrapper';
import { GuildMember, GuildMemberDocument } from './models/guild-member';
import { Role } from './models/role';
import { generateSnowflake } from './snowflake-entity';
import { Lean } from './types/entity-types';

export default class GuildMembers extends DBWrapper<string, GuildMemberDocument> {
  public async get(id: string | undefined) {
    const member = await GuildMember.findById(id);
    if (!member)
      throw new TypeError('Guild Member Not Found');
    return member;
  }

  public async getInGuild(guildId: string, userId: string) {
    const member = await GuildMember.findOne({ guildId, userId });
    if (!member)
      throw new TypeError('Guild Member Not Found');
    return member;
  }

  public async create(guildId: string, userId: string, ...roles: Lean.Role[]) {
    return GuildMember.create({
      _id: generateSnowflake(),
      guildId,
      userId,
      roleIds: (roles.length > 0)
        ? roles.map(r => r._id) 
        : [await this.getEveryoneRoleId(guildId) as string], 
    });
  }

  private async getEveryoneRoleId(guildId: string) {
    const role = await Role.findOne({ guildId, name: '@everyone' });        
    return role?._id;
  }
}