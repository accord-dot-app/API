import DBWrapper from './db-wrapper';
import { Lean, PermissionTypes } from './types/entity-types';
import { GuildMemberDocument } from './models/guild-member';
import { defaultPermissions, hasPermission, Role, RoleDocument } from './models/role';

export default class Roles extends DBWrapper<string, RoleDocument> {
  protected async getOrCreate(id: string) {
    return await Role.findById(id).exec();
  }

  public async hasPermission(member: Lean.GuildMember, permission: PermissionTypes.Permission) {
    const totalPerms = (await Role
      .find({ _id: { $in: member.roleIds } }))
      .reduce((acc, value) => value.permissions | acc, 0);
      
    return hasPermission(totalPerms, permission);
  }

  public createEveryone(guildId: string, roleId: string) {
    return Role.create({
      _id: roleId,
      color: '#A2B6AD',
      createdAt: new Date(),
      guildId,
      mentionable: false,
      hoisted: false,
      name: '@everyone',
      position: 0,
      permissions: defaultPermissions
    });
  }
}
