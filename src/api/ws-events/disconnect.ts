import { Socket } from 'socket.io';
import { StatusType } from '../../data/models/user';
import Users from '../../data/users';
import Deps from '../../utils/deps';
import { WebSocket } from '../websocket';
import WSEvent from './ws-event';

export default class implements WSEvent {
  on = 'disconnect';

  constructor(private users = Deps.get<Users>(Users)) {}

  async invoke(ws: WebSocket, client: Socket) {
    const userId = ws.sessions.get(client.id);
    const userIsStillOnline = Array.from(ws.sessions.values())
      .filter(id => id === userId).length > 1;
    if (userIsStillOnline) return;

    ws.sessions.delete(client.id);
    
    const user = await this.users.get(userId);
    if (!user) return;

    user.status = StatusType.Offline;
    await user.save();

    ws.io.sockets.emit('PRESENCE_UPDATE', { user });
  }
}