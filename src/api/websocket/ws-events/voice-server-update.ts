import { Socket } from 'socket.io';
import Channels from '../../../data/channels';
import Guilds from '../../../data/guilds';
import { Channel } from '../../../data/models/channel';
import Users from '../../../data/users';
import Deps from '../../../utils/deps';
import { WSGuard } from '../../modules/ws-guard';
import { WebSocket } from '../websocket';
import WSEvent, { Params } from './ws-event';

export default class implements WSEvent {
  on = 'VOICE_SERVER_UPDATE';

  constructor(
    private guard = Deps.get<WSGuard>(WSGuard),
    private guilds = Deps.get<Guilds>(Guilds)
  ) {}

  async invoke(ws: WebSocket, client: Socket, { userId, guildId }: Params.VoiceServerUpdate) {
    this.guard.validateIsUser(client, userId);

    // const guild = await this.guilds.getUserGuild(userId, guildId);
    // if (!guild) return;
    
    // ws.io.sockets.emit('VOICE_CHANNEL_UPDATE', { channel, user });
  }
}
