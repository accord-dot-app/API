import DBWrapper from './db-wrapper';
import { GuildMemberDocument } from './models/guild-member';
import { defaultPermissions, GeneralPermission, hasPermission, Role, RoleDocument, TextChannelPermission, VoiceChannelPermission } from './models/role';

export default class Roles extends DBWrapper<string, RoleDocument> {
  protected async getOrCreate(id: string) {
    return await Role.findById(id).exec();
  }

  public async hasPermission(
    member: GuildMemberDocument,
    permission: GeneralPermission | TextChannelPermission | VoiceChannelPermission) {
    const query = member.roleIds.map(_id => ({ _id }));

    let totalPerms = 0;
    totalPerms = (await Role.find(query))
      .map(c => c.permissions)
      .reduce(p => totalPerms | p);
      
    return hasPermission(totalPerms, permission);

    /* inherit permissions from lower roles

    moderator perms -> ['KICK_MEMBERS']
    @everyone perms -> ['READ_MESSAGES']

    */
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
