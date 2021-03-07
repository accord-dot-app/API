import { Socket } from 'socket.io';
import { WebSocket } from '../websocket';
import WSEvent, { Params } from './ws-event';

export default class implements WSEvent {
  on = 'GUILD_DELETE';

  async invoke(ws: WebSocket, client: Socket, { guildId }: Params.GuildDelete) {
    // TODO: delete guild and channels
    // WS should *mostly* replace HTTP with DClone

    ws.io
      .to(guildId)
      .emit('GUILD_DELETE');
  }
}
