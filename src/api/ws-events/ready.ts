import { Socket } from 'socket.io';
import { GuildMember } from '../../data/models/guild-member';
import { StatusType, User } from '../../data/models/user';
import Users from '../../data/users';
import Deps from '../../utils/deps';
import { WebSocket } from '../websocket';
import WSEvent from './ws-event';

export default class implements WSEvent {
  on = 'READY';

  async invoke(ws: WebSocket, client: Socket, { user, guildIds, channelIds }) {
    ws.sessions.set(client.id, user._id);

    const ids = guildIds.concat(channelIds);
    client.join(ids);

    await User.findOneAndUpdate(user._id, { status: StatusType.Online });

    ws.io
      .to(ids)
      .emit('PRESENCE_UPDATE', { user });
  }
}