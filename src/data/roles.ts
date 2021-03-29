import DBWrapper from './db-wrapper';
import { Lean, PermissionTypes } from './types/entity-types';
import { defaultPermissions, hasPermission, Role, RoleDocument } from './models/role';
import { generateSnowflake } from './snowflake-entity';

export default class Roles extends DBWrapper<string, RoleDocument> {
  public async get(id: string | undefined) {
    const role = await Role.findById(id);
    if (!role)
      throw new TypeError('Role Not Found');
    return role;
  }

  public async hasPermission(member: Lean.GuildMember, permission: PermissionTypes.Permission) {
    const totalPerms = (await Role
      .find({ _id: { $in: member.roleIds } }))
      .reduce((acc, value) => value.permissions | acc, 0);    
      
    return hasPermission(totalPerms, permission);
  }

  public create(name: string, guildId: string) {
    return Role.create({
      _id: generateSnowflake(),
      guildId,
      mentionable: false,
      hoisted: false,
      name,
      position: 1,
      permissions: defaultPermissions
    });
  }
}
