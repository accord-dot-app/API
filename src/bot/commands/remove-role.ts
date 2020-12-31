import { GuildMember } from '../../data/models/guild-member';
import { Command, CommandContext } from './command';

export default class implements Command {
  name = 'role-role';
  usage = 'role-role [role-id] [member-id]'
  summary = 'Remove a role from a member.';

  async execute(ctx: CommandContext, roleId: string, memberId: string) {
    ctx.guild = await ctx.guild
      .populate('roles')
      .execPopulate();
    const role = ctx.guild.roles.find(r => r.id === roleId);
    if (!role)
      throw new TypeError('Role not found');
    const member = await GuildMember.findById({ 
      _id: memberId,
      guild: ctx.guild
    });
    if (!member)
      throw new TypeError('Member not found');

    const index = member.roleIds.indexOf(roleId);
    member.roleIds.splice(index, 1);
    await member.save();

    ctx.bot.sendMessage(ctx.channel, ctx.guild, `> Removed \`${role.name}\` from <@${member.user}>.`);
    ctx.bot.socket.emit('GUILD_MEMBER_UPDATE', { member });
  }
}
