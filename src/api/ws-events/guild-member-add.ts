import { Socket } from 'socket.io';
import Guilds from '../../data/guilds';
import Invites from '../../data/invites';
import { Guild } from '../../data/models/guild';
import { GuildMember } from '../../data/models/guild-member';
import Users from '../../data/users';
import Deps from '../../utils/deps';
import { WebSocket } from '../websocket';
import WSEvent from './ws-event';

export default class implements WSEvent {
  on = 'GUILD_MEMBER_ADD';

  constructor(
    private guilds = Deps.get<Guilds>(Guilds),
    private invites = Deps.get<Invites>(Invites),
    private users = Deps.get<Users>(Users)) {}

  async invoke(ws: WebSocket, client: Socket, { inviteCode, user }) {
    const invite = await this.invites.get(inviteCode);
    if (!invite) return;
    
    invite.uses++;

    (invite.maxUses && invite.uses >= invite.maxUses)
      ? await invite.deleteOne()
      : await invite.save();

      
    const guild = await this.guilds.get(invite.guild._id);
    const member = await GuildMember.create({
      user,
      guild,
      roles: []
    });
    await member.populate('user').execPopulate();

    ws.io.sockets.emit('GUILD_MEMBER_ADD', { guild, member });
  }
}