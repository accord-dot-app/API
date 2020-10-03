import { Socket } from 'socket.io';
import { GuildMember } from '../../data/models/guild-member';
import { StatusType } from '../../data/models/user';
import Users from '../../data/users';
import Deps from '../../utils/deps';
import { WebSocket } from '../websocket';
import WSEvent from './ws-event';

export default class implements WSEvent {
  on = 'READY';

  constructor(private users = Deps.get<Users>(Users)) {}

  async invoke(ws: WebSocket, client: Socket, { guild, user }) {
    ws.sessions.set(client.id, user._id);

    user = await this.users.get(user._id);
    user.status = StatusType.Online;
    await user.save();

    ws.io.sockets.emit('PRESENCE_UPDATE', { user });
  }
}