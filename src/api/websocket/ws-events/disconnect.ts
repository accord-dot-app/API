import { Socket } from 'socket.io';
import Channels from '../../../data/channels';
import { Channel } from '../../../data/models/channel';
import { UserDocument } from '../../../data/models/user';
import { Lean } from '../../../data/types/entity-types';
import Users from '../../../data/users';
import Deps from '../../../utils/deps';
import { WebSocket } from '../websocket';
import { WSEvent, Args } from './ws-event';

export default class implements WSEvent<'disconnect'> {
  on = 'disconnect' as const;

  constructor(
    private users = Deps.get<Users>(Users),
  ) {}

  public async invoke(ws: WebSocket, client: Socket) {   
    const userId = ws.sessions.get(client.id);
    const user = await this.users.get(userId);
    
    ws.sessions.delete(client.id);
    setInterval(() => this.setOfflineStatus(ws, client, user), 5 * 1000); 

    client.rooms.clear();
  }

  public async setOfflineStatus(ws: WebSocket, client: Socket, user: UserDocument) {
    const userConnected = ws.connectedUserIds.includes(user._id);    
    if (userConnected) return;

    user.status = 'OFFLINE';
    await user.save();

    ws.io
      .to(Array.from(client.rooms))
      .emit('PRESENCE_UPDATE', {
        userId: user.id,
        status: user.status
    } as Args.PresenceUpdate); 
  }
}
