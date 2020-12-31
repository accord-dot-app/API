import { GuildMember } from '../../data/models/guild-member';
import { Command, CommandContext } from './command';

export default class implements Command {
  name = 'add-role';
  usage = 'add-role [role-id] [member-id]'
  summary = 'Add a role to a member.';

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

    member.roleIds.push(role.id);
    await member.save();

    ctx.bot.sendMessage(ctx.channel, ctx.guild, `> Gave <@${member.user}> \`${role.name}\`.`);
    ctx.bot.socket.emit('GUILD_MEMBER_UPDATE', { member });
  }
}
