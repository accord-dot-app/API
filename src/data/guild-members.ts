import DBWrapper from './db-wrapper';
import { GuildMember, GuildMemberDocument } from './models/guild-member';
import { Role } from './models/role';
import { Lean } from './types/entity-types';

export default class GuildMembers extends DBWrapper<string, GuildMemberDocument> {
  public async get(code: string | undefined) {
    const invite = await GuildMember.findById(code);
    if (!invite)
      throw new TypeError('Invite Not Found');
    return invite;
  }

  public async create(guildId: string, userId: string, ...roles: Lean.Role[]) {
    return GuildMember.create({
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