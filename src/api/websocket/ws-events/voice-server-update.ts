import { Socket } from 'socket.io';
import Channels from '../../../data/channels';
import Guilds from '../../../data/guilds';
import { Channel } from '../../../data/models/channel';
import Users from '../../../data/users';
import Deps from '../../../utils/deps';
import { WSGuard } from '../../modules/ws-guard';
import { WebSocket } from '../websocket';
import { WSEvent, Params, WSEventParams } from './ws-event';

export default class implements WSEvent<'VOICE_SERVER_UPDATE'> {
  on = 'VOICE_SERVER_UPDATE' as const;

  constructor(
    private guard = Deps.get<WSGuard>(WSGuard),
  ) {}

  async invoke(ws: WebSocket, client: Socket, { guildId }: Params.VoiceServerUpdate) {
    const userId = ws.sessions.userId(client);

    // const guild = await this.guilds.getUserGuild(userId, guildId);
    // if (!guild) return;
    
    // ws.io.emit('VOICE_CHANNEL_UPDATE', { channel, user });
  }
}
