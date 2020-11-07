import { Socket } from 'socket.io';
import Guilds from '../../data/guilds';
import Invites from '../../data/invites';
import { Guild } from '../../data/models/guild';
import { GuildMember } from '../../data/models/guild-member';
import Deps from '../../utils/deps';
import { WebSocket } from '../websocket';
import WSEvent from './ws-event';

export default class implements WSEvent {
  on = 'GUILD_MEMBER_ADD';

  constructor(
    private guilds = Deps.get<Guilds>(Guilds),
    private invites = Deps.get<Invites>(Invites)) {}

  async invoke(ws: WebSocket, client: Socket, { inviteCode, user }) {
    const invite = await this.invites.get(inviteCode);
    if (!invite) return;

    const guild = await this.guilds.get(invite.guild._id);
    const memberExists = guild.members.some(m => m.user === user._id);
    if (memberExists) return;
    
    invite.uses++;

    (invite.maxUses && invite.uses >= invite.maxUses)
      ? await invite.deleteOne()
      : await invite.save();

    const member = await GuildMember.create({
      user,
      guildId: guild._id,
      roleIds: [guild.roles[0]._id]
    });
    guild.members.push(member);
    await guild.save();

    await member
      .populate('user')
      .execPopulate();

    client.join(guild._id);

    ws.io.sockets
      .to(guild._id)
      .emit('GUILD_MEMBER_ADD', { guild, member });
  }
}