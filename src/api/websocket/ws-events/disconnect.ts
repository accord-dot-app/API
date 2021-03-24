import { Socket } from 'socket.io';
import Channels from '../../../data/channels';
import { Channel } from '../../../data/models/channel';
import { UserDocument } from '../../../data/models/user';
import { Lean } from '../../../data/types/entity-types';
import Users from '../../../data/users';
import Deps from '../../../utils/deps';
import { WebSocket } from '../websocket';
import voiceStateUpdate from './voice-state-update';
import { WSEvent, Args } from './ws-event';

export default class implements WSEvent<'disconnect'> {
  on = 'disconnect' as const;

  constructor(
    private users = Deps.get<Users>(Users),
    private voiceState = Deps.get<voiceStateUpdate>(voiceStateUpdate),
  ) {}

  public async invoke(ws: WebSocket, client: Socket) {    
    const userId = ws.sessions.get(client.id);
    const user = await this.users.get(userId);
    if (!user) return;

    if (user.voice.channelId)
      await this.disconnectFromVC(user, ws, client);
    await this.setOfflineStatus(ws, user);

    for (const id in client.rooms) {
      ws.io
        .to(id)
        .emit('PRESENCE_UPDATE', {
          userId,
          status: user.status
        } as Args.PresenceUpdate);      
    }

    ws.sessions.delete(client.id);
    client.rooms.clear();
  }

  public async disconnectFromVC(user: Lean.User, ws: WebSocket, client: Socket) {
    const channelId = user.voice.channelId;
    if (!channelId) return;

    await Channel.updateOne(
      { _id: channelId },
      { $pull: { members: user._id } },
      { runValidators: true },
    );

    await this.voiceState.invoke(ws, client, {
      voice: {
        selfMuted: false,
        channelId,
      },
    });
  }

  public async setOfflineStatus(ws: WebSocket, user: UserDocument) {
    const userConnected = ws.connectedUserIds.includes(user._id);
    if (userConnected) return;

    user.status = 'OFFLINE';
    await user.save();
  }
}


