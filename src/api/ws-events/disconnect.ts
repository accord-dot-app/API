import { Socket } from 'socket.io';
import { Channel } from '../../data/models/channel';
import { StatusType, UserDocument } from '../../data/models/user';
import Users from '../../data/users';
import Deps from '../../utils/deps';
import { WebSocket } from '../websocket';
import WSEvent from './ws-event';

export default class implements WSEvent {
  on = 'disconnect';

  constructor(private users = Deps.get<Users>(Users)) {}

  async invoke(ws: WebSocket, client: Socket) {    
    const userId = ws.sessions.get(client.id);

    const user = await this.users.get(userId);
    if (!user) return;

    if (user.voice.connected)
      await this.disconnectFromVC(user, userId);

    ws.sessions.delete(userId);
    client.leaveAll();

    await this.setOfflineStatus(ws, user);

    ws.io.emit('PRESENCE_UPDATE', { user });
  }

  async disconnectFromVC(user: UserDocument, userId: string) {
    const channel = await Channel.findById(user.voice.channelId);
  
    const index = channel.memberIds.indexOf(userId);
    await channel.updateOne({
      members: channel.memberIds.splice(index, 1)
    });
  }

  async setOfflineStatus(ws: WebSocket, user: UserDocument) {
    const userIsConnectedElsewhere = ws.connectedUserIds.includes(user._id);
    if (userIsConnectedElsewhere) return;

    user.status = StatusType.Offline;
    await user.save();
  }
}


