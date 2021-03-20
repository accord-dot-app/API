import { Socket } from 'socket.io';
import { PermissionTypes } from '../../../data/types/entity-types';
import { Role } from '../../../data/models/role';
import Deps from '../../../utils/deps';
import { WSGuard } from '../../modules/ws-guard';
import { WebSocket } from '../websocket';
import { WSEvent, Args, Params, WSEventParams } from './ws-event';

export default class implements WSEvent<'GUILD_ROLE_UPDATE'> {
  on = 'GUILD_ROLE_UPDATE' as const;

  constructor(
    private guard = Deps.get<WSGuard>(WSGuard)
  ) {}

  // TODO: validate all role values
  async invoke(ws: WebSocket, client: Socket, { roleId, partialRole, guildId }: Params.GuildRoleUpdate) {
    await this.guard.can(client, guildId, PermissionTypes.General.MANAGE_ROLES);

    await Role.updateOne(
      { _id: roleId },
      partialRole, 
      { runValidators: true },
    );

    ws.io
      .to(guildId)
      .emit('GUILD_ROLE_UPDATE', { partialRole } as Args.GuildRoleUpdate);
  }
}