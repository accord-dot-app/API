import { Socket } from 'socket.io';
import Channels from '../../data/channels';
import { StatusType, User } from '../../data/models/user';
import Deps from '../../utils/deps';
import { WebSocket } from '../websocket';
import WSEvent from './ws-event';

export default class implements WSEvent {
  on = 'READY';

  async invoke(ws: WebSocket, client: Socket, { user, guildIds, channelIds }) {
    if (ws.sessions.has(client.id)) return;

    ws.sessions.set(client.id, user._id);
    await this.joinRooms(client, { user, guildIds, channelIds });
    
    if (user.status === 'ONLINE') return;

    await User.findOneAndUpdate(user._id, { status: StatusType.Online });
    ws.io.sockets.emit('PRESENCE_UPDATE', { user });
  }

  async joinRooms(client: Socket, { user, guildIds, channelIds }) {
    const alreadyJoinedRooms = Object.keys(client.rooms).length > 1;
    if (alreadyJoinedRooms) return;

    const ids = []
      .concat(
        guildIds,
        channelIds,
        user._id,
        
        user.friendRequests.map(r => r.userId),
        user.friends.map(u => u._id)
      );

    client.join(ids);
  }
}