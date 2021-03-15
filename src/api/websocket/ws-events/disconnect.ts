import { Socket } from 'socket.io';
import Channels from '../../../data/channels';
import { Channel } from '../../../data/models/channel';
import { UserDocument } from '../../../data/models/user';
import Users from '../../../data/users';
import Deps from '../../../utils/deps';
import { WebSocket } from '../websocket';
import WSEvent from './ws-event';

export default class implements WSEvent {
  on = 'disconnect';

  constructor(
    private channels = Deps.get<Channels>(Channels),
    private users = Deps.get<Users>(Users),
  ) {}

  public async invoke(ws: WebSocket, client: Socket) {    
    const userId = ws.sessions.get(client.id);
    const user = await this.users.get(userId);
    if (!user) return;

    if (user.voice.channelId)
      await this.disconnectFromVC(user, userId);

    ws.sessions.delete(client.id);
    client.leaveAll();

    await this.setOfflineStatus(ws, user);

    for (const id in client.adapter.rooms) {
      ws.io
        .to(id)
        .emit('PRESENCE_UPDATE', {
          userId,
          status: user.status
        });      
    }
  }

  public async disconnectFromVC(user: UserDocument, userId: string) {
    const channel = await this.channels.get(user.voice.channelId);  
    const index = channel.memberIds.indexOf(userId);

    await channel.updateOne({
      members: channel.memberIds.splice(index, 1)
    });
  }

  public async setOfflineStatus(ws: WebSocket, user: UserDocument) {
    const isConnectedElsewhere = ws.connectedUserIds.includes(user._id);
    if (isConnectedElsewhere) return;

    user.status = 'OFFLINE';
    await user.save();
  }
}


