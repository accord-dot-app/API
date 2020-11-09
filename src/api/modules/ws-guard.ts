import { Guild, GuildDocument } from '../../data/models/guild';
import { GuildMember, GuildMemberDocument } from '../../data/models/guild-member';
import { Permission } from '../../data/models/role';

export async function can(userId: string, guildId: string, permission: Permission) {
  const member = await GuildMember.findOne({ guildId, user: userId as any });
  if (!member) return;

  const guild = await Guild.findById(guildId);
  const highestRole = await getHighestRole(member, guild);

  return highestRole?.permissions & permission
    || guild.owner as any === userId;
}

async function getHighestRole(member: GuildMemberDocument, guild: GuildDocument) {
  const roleId = member.roleIds[member.roleIds.length - 1];
  return guild.roles.find(id => id as any === roleId);
}