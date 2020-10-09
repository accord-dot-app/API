import { Socket } from 'socket.io';
import Channels from '../../data/channels';
import { Channel } from '../../data/models/channel';
import Users from '../../data/users';
import Deps from '../../utils/deps';
import { WebSocket } from '../websocket';
import WSEvent from './ws-event';

export default class implements WSEvent {
  on = 'VOICE_CHANNEL_UPDATE';

  constructor(
    private channels = Deps.get<Channels>(Channels),
    private users = Deps.get<Users>(Users)) {}

  async invoke(ws: WebSocket, client: Socket, { channel, guild, user }) {
    const index = guild.members.findIndex(m => m.user._id === user._id);
    const member = guild.members[index];
    if (!member) return;

    (user.voice.connected)
      ? channel.memberIds.push(member)
      : channel.memberIds.splice(index, 1);

    await Channel.findByIdAndUpdate(channel._id, {
      members: channel.memberIds
    });
    
    ws.io.sockets.emit('VOICE_CHANNEL_UPDATE', { channel, user });
  }
}