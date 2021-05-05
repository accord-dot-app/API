import DBWrapper from './db-wrapper';
import { Lean, PermissionTypes } from './types/entity-types';
import { hasPermission, Role, RoleDocument } from './models/role';
import { generateSnowflake } from './snowflake-entity';
import { Guild } from './models/guild';

export default class Roles extends DBWrapper<string, RoleDocument> {
  public async get(id: string | undefined) {
    const role = await Role.findById(id);
    if (!role)
      throw new TypeError('Role Not Found');
    return role;
  }

  public async isHigher(guild: Lean.Guild, member: Lean.GuildMember, roleIds: string[]) {
    const highestRole: Lean.Role = guild.roles
      .sort((a, b) => (a.position > b.position) ? 1 : -1)[0];

    return member.userId === guild?.ownerId
      && member.roleIds.includes(highestRole?._id)
      && !roleIds.includes(highestRole._id);
  }

  public async hasPermission(guild: Lean.Guild, member: Lean.GuildMember, permission: PermissionTypes.PermissionString) {
    const totalPerms = guild.roles
      .filter(r => member.roleIds.includes(r._id))
      .reduce((acc, value) => value.permissions | acc, 0);
    
    const permNumber = (typeof permission === 'string')
      ? PermissionTypes.All[PermissionTypes.All[permission as string]]
      : permission;    
    return hasPermission(totalPerms, permNumber as any);
  }

  public create(name: string, guildId: string) {
    return Role.create({
      _id: generateSnowflake(),
      guildId,
      mentionable: false,
      hoisted: false,
      name,
      position: 1,
      permissions: PermissionTypes.defaultPermissions
    });
  }
}
