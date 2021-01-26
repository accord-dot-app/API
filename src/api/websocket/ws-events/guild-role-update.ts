import { Socket } from 'socket.io';
import { GeneralPermission, Role } from '../../../data/models/role';
import Deps from '../../../utils/deps';
import { WSGuard } from '../../modules/ws-guard';
import { WebSocket } from '../websocket';
import WSEvent from './ws-event';

export default class implements WSEvent {
  on = 'GUILD_ROLE_UPDATE';

  constructor(
    private guard = Deps.get<WSGuard>(WSGuard)
  ) {}

  async invoke(ws: WebSocket, client: Socket, { role }) {
    const userId = ws.sessions.get(client.id);
    const canManage = await this.guard.can(userId, role.guildId, GeneralPermission.MANAGE_ROLES);
    if (!canManage) return;

    ws.io.sockets
      .to(role.guildId)
      .emit('GUILD_ROLE_UPDATE', { role: await Role.findByIdAndUpdate(role._id, role) });
  }
}