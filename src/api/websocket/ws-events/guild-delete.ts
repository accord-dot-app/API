import { Socket } from 'socket.io';
import { Guild } from '../../../data/models/guild';
import Deps from '../../../utils/deps';
import { WSGuard } from '../../modules/ws-guard';
import { WebSocket } from '../websocket';
import { WSEvent, Params, WSEventParams } from './ws-event';

export default class implements WSEvent<'GUILD_DELETE'> {
  on = 'GUILD_DELETE' as const;

  constructor(
    private guard = Deps.get<WSGuard>(WSGuard),
  ) {}

  async invoke(ws: WebSocket, client: Socket, { guildId }: Params.GuildDelete) {
    await this.guard.validateIsOwner(client, guildId);
    await Guild.deleteOne({ _id: guildId });

    ws.io
      .to(guildId)
      .emit('GUILD_DELETE');
  }
}
