import { Socket } from 'socket.io';
import { Channel } from '../../data/models/channel';
import { StatusType } from '../../data/models/user';
import Users from '../../data/users';
import Deps from '../../utils/deps';
import { WebSocket } from '../websocket';
import WSEvent from './ws-event';

export default class implements WSEvent {
  on = 'disconnect';

  constructor(private users = Deps.get<Users>(Users)) {}

  async invoke(ws: WebSocket, client: Socket) {    
    const userId = ws.sessions.get(client.id);

    const userIsStillOnline = Array
      .from(ws.sessions.values())
      .filter(id => id === userId).length > 1;    
    if (userIsStillOnline) return;

    const user = await this.users.get(userId);
    if (!user) return;

    if (user.voice.connected) {
      const channel = await Channel.findById(user.voice.channelId);

      const index = channel.members.findIndex(m => (m.user as any) === userId);
      await channel.updateOne({
        members: channel.members.splice(index, 1)
      });
    }

    user.status = StatusType.Offline;
    await user.save();

    ws.sessions.delete(client.id);
    client.leaveAll();

    ws.io.sockets.emit('PRESENCE_UPDATE', { user });
  }
}