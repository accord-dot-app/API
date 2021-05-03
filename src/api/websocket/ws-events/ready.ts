import { Socket } from 'socket.io';
import { User } from '../../../data/models/user';
import { Lean } from '../../../data/types/entity-types';
import Users from '../../../data/users';
import Deps from '../../../utils/deps';
import { WSGuard } from '../../modules/ws-guard';
import { WSRooms } from '../modules/ws-rooms';
import { WebSocket } from '../websocket';
import { WSEvent, Args, Params } from './ws-event';
 
export default class implements WSEvent<'READY'> {
  on = 'READY' as const;
  cooldown = 5;  

  constructor(
    private guard = Deps.get<WSGuard>(WSGuard),
    private rooms = Deps.get<WSRooms>(WSRooms),
    private users = Deps.get<Users>(Users),
  ) {}

  public async invoke(ws: WebSocket, client: Socket, { key }: Params.Ready) {   
    const { id: userId } = await this.guard.decodeKey(key);
    if (!userId)
      throw new TypeError('Invalid User ID');
 
    ws.sessions.set(client.id, userId);

    const user = await this.users.getSelf(userId);
    await this.rooms.join(client, user); 
   
    if (user.status === 'OFFLINE') {
      // not being sent to guild member ?
      console.log(Array.from(client.rooms));
      
      ws.io
        .to(Array.from(client.rooms))
        .emit('PRESENCE_UPDATE', {
          userId,
          status: user.status
        } as Args.PresenceUpdate);
    }
      await User.updateOne({ _id: userId }, { status: 'ONLINE' });

    ws.io
      .to(client.id)
      .emit('READY');
  }
}
