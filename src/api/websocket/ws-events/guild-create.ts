import { Socket } from 'socket.io';
import { Guild } from '../../../data/models/guild';
import Deps from '../../../utils/deps';
import { WSGuard } from '../../modules/ws-guard';
import { WebSocket } from '../websocket';
import { WSEvent, Params } from './ws-event';

export default class implements WSEvent<'GUILD_CREATE'> {
  on = 'GUILD_CREATE' as const;

  constructor(
    private guard = Deps.get<WSGuard>(WSGuard),
  ) {}

  async invoke(ws: WebSocket, client: Socket, { partialGuild }: Params.GuildCreate) {
    await User.cre

    await Guild.create({ _id: guildId });

    ws.io
      .to(guildId)
      .emit('GUILD_DELETE');
  }
}
