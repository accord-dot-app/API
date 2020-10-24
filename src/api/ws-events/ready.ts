import { Socket } from 'socket.io';
import { StatusType, User } from '../../data/models/user';
import { WebSocket } from '../websocket';
import WSEvent from './ws-event';

export default class implements WSEvent {
  on = 'READY';

  async invoke(ws: WebSocket, client: Socket, { user, guildIds, channelIds }) {
    ws.sessions.set(client.id, user._id);

    const ids = guildIds.concat(channelIds);
    ids.push(user._id);
    ids.push(...user.friendRequests.map(r => r.userId));
    ids.push(...user.friends.map(u => u._id));

    client.join(ids);

    await User.findOneAndUpdate(user._id, { status: StatusType.Online });

    for (const id of ids)
      ws.io
        .to(id)
        .emit('PRESENCE_UPDATE', { user });
  }
}