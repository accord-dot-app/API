import { Socket } from 'socket.io';
import { PermissionTypes } from '../../../data/types/entity-types';
import { Role } from '../../../data/models/role';
import Deps from '../../../utils/deps';
import { WSGuard } from '../../modules/ws-guard';
import { WebSocket } from '../websocket';
import { WSEvent, Args, Params } from './ws-event';
import { GuildMember } from '../../../data/models/guild-member';

export default class implements WSEvent<'GUILD_ROLE_DELETE'> {
  on = 'GUILD_ROLE_DELETE' as const;

  constructor(
    private guard = Deps.get<WSGuard>(WSGuard)
  ) {}

  public async invoke(ws: WebSocket, client: Socket, { roleId, guildId }: Params.GuildRoleDelete) {
    await this.guard.validateCan(client, guildId, PermissionTypes.General.MANAGE_ROLES);

    await Role.deleteOne({ _id: roleId });
    await GuildMember.updateMany(
      { guildId },
      { $pull: { roleIds: roleId } },
      { runValidators: true },
    );

    ws.io
      .to(guildId)
      .emit('GUILD_ROLE_DELETE', { guildId, roleId } as Args.GuildRoleDelete);
  }
}
