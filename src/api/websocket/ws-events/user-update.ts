import { Socket } from 'socket.io';
import { User } from '../../../data/models/user';
import { WebSocket } from '../websocket';
import WSEvent, { Args, Params } from './ws-event';

export default class implements WSEvent {
  on = 'USER_UPDATE';

  async invoke(ws: WebSocket, client: Socket, { userId, partialUser }: Params.UserUpdate) {
    client.emit('USER_UPDATE', {
      user: await User.findByIdAndUpdate(userId, { $set: partialUser })
    } as Args.UserUpdate);
  }
}