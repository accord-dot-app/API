import { Socket } from 'socket.io';
import { PermissionTypes } from '../../../data/types/entity-types';
import { Role } from '../../../data/models/role';
import Deps from '../../../utils/deps';
import { WSGuard } from '../../modules/ws-guard';
import { WebSocket } from '../websocket';
import WSEvent, { Args, Params, WSEventParams } from './ws-event';

export default class implements WSEvent {
  on: keyof WSEventParams = 'GUILD_ROLE_DELETE';

  constructor(
    private guard = Deps.get<WSGuard>(WSGuard)
  ) {}

  async invoke(ws: WebSocket, client: Socket, { roleId, guildId }: Params.GuildRoleDelete) {
    const canManage = this.guard.can(client, guildId, PermissionTypes.General.MANAGE_ROLES);
    if (!canManage) return;

    await Role.deleteOne({ _id: roleId });

    ws.io
      .to(guildId)
      .emit('GUILD_ROLE_DELETE', { roleId } as Args.GuildRoleDelete);
  }
}
