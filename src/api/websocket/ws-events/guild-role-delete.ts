import { Socket } from 'socket.io';
import { GeneralPermission, Role } from '../../../data/models/role';
import Deps from '../../../utils/deps';
import { WSGuard } from '../../modules/ws-guard';
import { WebSocket } from '../websocket';
import WSEvent, { Args, Params } from './ws-event';

export default class implements WSEvent {
  on = 'GUILD_ROLE_DELETE';

  constructor(
    private guard = Deps.get<WSGuard>(WSGuard)
  ) {}

  async invoke(ws: WebSocket, client: Socket, { roleId, guildId }: Params.GuildRoleDelete) {
    const userId = ws.sessions.get(client.id);
    const canManage = this.guard.can(userId, guildId, GeneralPermission.MANAGE_ROLES);
    if (!canManage) return;

    await Role.deleteOne({ _id: roleId });

    ws.io.sockets
      .to(guildId)
      .emit('GUILD_ROLE_DELETE', { roleId } as Args.GuildRoleDelete);
  }
}
