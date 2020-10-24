import { Socket } from 'socket.io';
import Channels from '../../data/channels';
import { StatusType, User } from '../../data/models/user';
import Deps from '../../utils/deps';
import { WebSocket } from '../websocket';
import WSEvent from './ws-event';

export default class implements WSEvent {
  on = 'READY';

  constructor(private channels = Deps.get<Channels>(Channels)) {}

  async invoke(ws: WebSocket, client: Socket, { user, guildIds, channelIds }) {
    ws.sessions.set(client.id, user._id);

    const userDMChannels = await this.channels.getDMChannels(user._id);

    const ids = []
      .concat(
        guildIds,
        channelIds,
        user._id,
        
        user.friendRequests.map(r => r.userId),
        user.friends.map(u => u._id),
        user.friends.map(u => u._id),

        userDMChannels.map(c => c._id)
      );

    client.join(ids);

    await User.findOneAndUpdate(user._id, { status: StatusType.Online });

    for (const id of ids)
      ws.io
        .to(id)
        .emit('PRESENCE_UPDATE', { user });
  }
}