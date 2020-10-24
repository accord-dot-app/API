import { Socket } from 'socket.io';
import { WebSocket } from '../websocket';
import WSEvent from './ws-event';

export default class implements WSEvent {
  on = 'GUILD_UPDATE';

  async invoke(ws: WebSocket, client: Socket, { guild }) {
    ws.io
      .to(guild._id)
      .emit('GUILD_UPDATE', { guild });
  }
}