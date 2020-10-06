import { Socket } from 'socket.io';
import { GuildMember } from '../../data/models/guild-member';
import { StatusType } from '../../data/models/user';
import Users from '../../data/users';
import Deps from '../../utils/deps';
import { WebSocket } from '../websocket';
import WSEvent from './ws-event';

export default class implements WSEvent {
  on = 'TYPING_START';

  constructor(private users = Deps.get<Users>(Users)) {}

  async invoke(ws: WebSocket, client: Socket, { channel, user }) {
    client.join(channel._id); // FIXME
    ws.io.to(channel._id).emit('TYPING_START', { user });
  }
}