import { Socket } from 'socket.io';
import GuildMembers from '../../../data/guild-members';
import Guilds from '../../../data/guilds';
import { GuildMember } from '../../../data/models/guild-member';
import Roles from '../../../data/roles';
import { PermissionTypes } from '../../../data/types/entity-types';
import Users from '../../../data/users';
import Deps from '../../../utils/deps';
import { array } from '../../../utils/utils';
import { WSGuard } from '../../modules/ws-guard';
import { WebSocket } from '../websocket';
import { WSEvent, Args, Params } from './ws-event';

export default class implements WSEvent<'GUILD_MEMBER_UPDATE'> {
  on = 'GUILD_MEMBER_UPDATE' as const;

  constructor(
    private guard = Deps.get<WSGuard>(WSGuard),
    private guilds = Deps.get<Guilds>(Guilds),
    private guildMembers = Deps.get<GuildMembers>(GuildMembers),
    private roles = Deps.get<Roles>(Roles),
  ) {}

  public async invoke(ws: WebSocket, client: Socket, { memberId, partialMember }: Params.GuildMemberUpdate) {
    const member = await this.guildMembers.get(memberId);

    const selfUserId = ws.sessions.userId(client);
    const selfMember = await this.guildMembers.getInGuild(member.guildId, selfUserId);

    await this.guard.validateCan(client, member.guildId, PermissionTypes.General.MANAGE_ROLES);

    const guild = await this.guilds.get(member.guildId);
    const selfIsHigher = await this.roles.isHigher(guild, member, member.roleIds);
    
    const isSelf = selfMember._id === memberId;    
    if (!isSelf && !selfIsHigher)
      throw new TypeError('Member has higher roles');
    
    const everyoneRoleId = member.roleIds.sort(array.ascending)[0];
    await GuildMember.updateOne(
      { _id: memberId },
      {
        ...partialMember,
        roleIds: [everyoneRoleId].concat(partialMember.roleIds ?? []),
      },
      { runValidators: true },
    );
    
    ws.io
      .to(member.guildId)
      .emit('GUILD_MEMBER_UPDATE', {
        guildId: member.guildId,
        memberId,
        partialMember,
      } as Args.GuildMemberUpdate);
  }
}
