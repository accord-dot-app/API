import { Socket } from 'socket.io';
import Channels from '../../data/channels';
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
    const member = guild.members.find(m => m.user._id === user._id);
    if (!member) return;

    const memberInChannel = channel.members.some(m => m._id === member._id);
    if (memberInChannel) return;

    user = await this.users.get(user._id);
    user.voice.channelId = channel._id;
    user.voice.guildId = guild._id;
    await user.save();

    channel = await this.channels.get(channel._id);
    await channel.save();
    
    ws.io.sockets.emit('VOICE_CHANNEL_UPDATE', { channel, user });
  }
}