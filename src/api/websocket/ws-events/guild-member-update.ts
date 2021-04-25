import { Socket } from 'socket.io';
import GuildMembers from '../../../data/guild-members';
import Roles from '../../../data/roles';
import { PermissionTypes } from '../../../data/types/entity-types';
import Users from '../../../data/users';
import Deps from '../../../utils/deps';
import { WSGuard } from '../../modules/ws-guard';
import { WebSocket } from '../websocket';
import { WSEvent, Args, Params } from './ws-event';

export default class implements WSEvent<'GUILD_MEMBER_UPDATE'> {
  on = 'GUILD_MEMBER_UPDATE' as const;

  constructor(
    private guard = Deps.get<WSGuard>(WSGuard),
    private guildMembers = Deps.get<GuildMembers>(GuildMembers),
    private roles = Deps.get<Roles>(Roles),
  ) {}

  // TODO: validate can manage etc.
  public async invoke(ws: WebSocket, client: Socket, { memberId, partialMember }: Params.GuildMemberUpdate) {
    const selfMember = await this.guildMembers.get(memberId);
    const member = await this.guildMembers.get(memberId);
    this.guard.can(client, member.guildId, PermissionTypes.General.MANAGE_ROLES);

    // if role is equal or higher than client
    const isHigher = await this.roles.isHigher(selfMember.roleIds, member.roleIds);
    if (!isHigher)
      throw new TypeError('Member has higher roles than you');
    
    await member.updateOne(partialMember);
    
    ws.io
      .to(member.guildId)
      .emit('GUILD_MEMBER_UPDATE', { memberId, partialMember } as Args.GuildMemberUpdate);
  }
}
