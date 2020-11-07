import { Socket } from 'socket.io';
import { User } from '../../data/models/user';
import { WebSocket } from '../websocket';
import WSEvent from './ws-event';

export default class implements WSEvent {
  on = 'USER_UPDATE';

  async invoke(ws: WebSocket, client: Socket, { userId, partialUser }) {
    client.emit('USER_UPDATE', {
      user: await User.findByIdAndUpdate(userId, { $set: partialUser })
    });
  }
}