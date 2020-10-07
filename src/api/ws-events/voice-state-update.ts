import { Socket } from 'socket.io';
import { StatusType, User } from '../../data/models/user';
import Users from '../../data/users';
import Deps from '../../utils/deps';
import { WebSocket } from '../websocket';
import WSEvent from './ws-event';

export default class implements WSEvent {
  on = 'VOICE_STATE_UPDATE';

  constructor(private users = Deps.get<Users>(Users)) {}

  async invoke(ws: WebSocket, client: Socket, { user }) {
    await User.findOneAndUpdate(user._id, {
      voice: user.voice
    });

    ws.io
      .to(user.voice.guildId)
      .emit('VOICE_STATE_UPDATE', { user });
  }
}