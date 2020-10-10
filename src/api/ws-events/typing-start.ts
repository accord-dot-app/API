import { Socket } from 'socket.io';
import Users from '../../data/users';
import Deps from '../../utils/deps';
import { WebSocket } from '../websocket';
import WSEvent from './ws-event';

export default class implements WSEvent {
  on = 'TYPING_START';

  constructor(private users = Deps.get<Users>(Users)) {}

  async invoke(ws: WebSocket, client: Socket, { channel, user }) {
    client.broadcast
      .to(channel._id)
      .emit('TYPING_START', { user });
  }
}