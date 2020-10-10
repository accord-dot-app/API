import { Socket } from 'socket.io';
import { WebSocket } from '../websocket';
import WSEvent from './ws-event';

export default class implements WSEvent {
  on = 'GUILD_ROLE_CREATE';

  async invoke(ws: WebSocket, client: Socket, { role }) {
    ws.io.sockets
      .to(role.guildId)
      .emit('GUILD_ROLE_CREATE', { role });
  }
}