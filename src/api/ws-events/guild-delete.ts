import { Socket } from 'socket.io';
import { WebSocket } from '../websocket';
import WSEvent from './ws-event';

export default class implements WSEvent {
  on = 'GUILD_DELETE';

  async invoke(ws: WebSocket, client: Socket, { guildId }) {
    ws.io.sockets
      .to(guildId)
      .emit('GUILD_DELETE');
  }
}