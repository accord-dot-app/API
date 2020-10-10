import { Socket } from 'socket.io';
import { Role } from '../../data/models/role';
import { WebSocket } from '../websocket';
import WSEvent from './ws-event';

export default class implements WSEvent {
  on = 'GUILD_ROLE_UPDATE';

  async invoke(ws: WebSocket, client: Socket, { role }) {
    try {
      await Role.findByIdAndUpdate(role._id, role);
    } catch {}

    ws.io.sockets
      .to(role.guildId)
      .emit('GUILD_ROLE_UPDATE');
  }
}