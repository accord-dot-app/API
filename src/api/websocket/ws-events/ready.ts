import { Socket } from 'socket.io';
import { User } from '../../../data/models/user';
import Users from '../../../data/users';
import { SystemBot } from '../../../system/bot';
import Deps from '../../../utils/deps';
import { WSGuard } from '../../modules/ws-guard';
import { WebSocket } from '../websocket';
import WSEvent, { Args, Params } from './ws-event';
 
export default class implements WSEvent {
  on = 'READY';

  constructor(
    private guard = Deps.get<WSGuard>(WSGuard),
    private systemBot = Deps.get<SystemBot>(SystemBot),
    private users = Deps.get<Users>(Users),
  ) {}

  async invoke(ws: WebSocket, client: Socket, { key, guildIds, channelIds }: Params.Ready) {   
    const { id: userId } = this.guard.decodeKey(key);
    if (!userId)
      throw new TypeError('Invalid User ID');
 
    ws.sessions.set(client.id, userId);

    const alreadyLoggedIn = ws.sessions.has(client.id);
    if (!alreadyLoggedIn)
      await User.updateOne({ _id: userId }, { status: 'ONLINE' });

    const user = await this.users.get(userId);
    if (!user)
      throw new TypeError('User not found');

    await this.joinRooms(client, { user, guildIds, channelIds });

    for (const id in client.adapter.rooms) {
      ws.io
        .to(id)
        .emit('PRESENCE_UPDATE', {
          userId,
          status: user.status
        } as Args.PresenceUpdate);
    }
  }

  private async joinRooms(client: Socket, { user, guildIds, channelIds }) {
    const alreadyJoinedRooms = Object.keys(client.rooms).length > 1;
    if (alreadyJoinedRooms) return;

    const ids = []
      .concat(
        this.systemBot.self?.id,
        guildIds,
        channelIds,
        user.id,
        
        user.friendRequests.map(r => r.userId),
        user.friends.map(u => u._id)
      );

    client.join(ids);
  }
}
