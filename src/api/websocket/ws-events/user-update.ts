import { Socket } from 'socket.io';
import { User } from '../../../data/models/user';
import { WebSocket } from '../websocket';
import { WSEvent, Args, Params, WSEventParams } from './ws-event';

export default class implements WSEvent<'USER_UPDATE'> {
  on = 'USER_UPDATE' as const;

  // TODO: validate if client is user
  async invoke(ws: WebSocket, client: Socket, { userId, partialUser }: Params.UserUpdate) {
    await User.findByIdAndUpdate(userId, { $set: partialUser })
    client.emit('USER_UPDATE', { partialUser } as Args.UserUpdate);
  }
}