import { Socket } from 'socket.io';
import { User } from '../../../data/models/user';
import { Lean } from '../../../data/types/entity-types';
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

  async invoke(ws: WebSocket, client: Socket, { key }: Params.Ready) {   
    const { id: userId } = this.guard.decodeKey(key);
    if (!userId)
      throw new TypeError('Invalid User ID');
 
    ws.sessions.set(client.id, userId);

    const alreadyLoggedIn = ws.sessions.has(client.id);
    if (!alreadyLoggedIn)
      await User.updateOne({ _id: userId }, { status: 'ONLINE' });

    const user = await this.users.get(userId);
    await this.joinRooms(client, user);

    for (const id in client.adapter.rooms) {
      ws.io
        .to(id)
        .emit('PRESENCE_UPDATE', {
          userId,
          status: user.status
        } as Args.PresenceUpdate);
    }
  }

  private async joinRooms(client: Socket, user: Lean.User) {
    const alreadyJoinedRooms = Object.keys(client.rooms ?? []).length > 1;
    if (alreadyJoinedRooms) return;

    console.log(await this.getRoomIds(user));
    client.join(await this.getRoomIds(user));
  }

  private async getRoomIds(user: Lean.User) {
    const roomIds: string[] = [
      user._id,
      this.systemBot.self?._id,
      ...user.friendRequests.map(r => r.userId),
      ...user.friends.map(u => u._id)
    ];

    const guilds = await this.users.getGuilds(user._id);
    if (guilds) {
      const ids = guilds
        ?.flatMap(g => g.channels.map(c => c._id));
      roomIds.push(...ids);
    }
    const dms = await this.users.getDMChannels(user._id);
    if (dms) {
      const ids = dms.map(c => c._id);
      roomIds.push(...ids);
    }
    return roomIds;
  }
}
