import { Socket } from 'socket.io';
import Users from '../../data/users';
import Deps from '../../utils/deps';
import { WebSocket } from '../websocket';
import WSEvent from './ws-event';

export default class implements WSEvent {
  on = 'VOICE_CHANNEL_UPDATE';

  constructor(private users = Deps.get<Users>(Users)) {}

  async invoke(ws: WebSocket, client: Socket, { channel, guild, user }) {        
    user = await this.users.get(user._id);
    user.voice.channelId = channel._id;
    user.voice.guildId = guild._id;
    await user.save();

    ws.io.sockets.emit('VOICE_CHANNEL_UPDATE', { channel, guild, user });
  }
}