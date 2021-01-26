import { Socket } from 'socket.io';
import { WebSocket } from '../websocket';
import WSEvent from './ws-event';

export default class implements WSEvent {
  on = 'GUILD_MEMBER_UPDATE';

  async invoke(ws: WebSocket, _: Socket, { member }) {
    ws.io.sockets
      .to(member.guild._id)
      .emit('GUILD_MEMBER_UPDATE', { member });
  }
}
