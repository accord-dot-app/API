import { Socket } from 'socket.io';
import { GeneralPermission, Role } from '../../data/models/role';
import { can } from '../modules/ws-guard';
import { WebSocket } from '../websocket';
import WSEvent from './ws-event';

export default class implements WSEvent {
  on = 'GUILD_ROLE_DELETE';

  async invoke(ws: WebSocket, client: Socket, { roleId, guildId }) {
    const userId = ws.sessions.get(client.id);
    const canManage = can(userId, guildId, GeneralPermission.MANAGE_ROLES);
    if (!canManage) return;

    await Role.findByIdAndDelete(roleId);

    ws.io.sockets
      .to(guildId)
      .emit('GUILD_ROLE_DELETE', { roleId });
  }
}
