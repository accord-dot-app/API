import { Socket } from 'socket.io';
import { WebSocket } from '../websocket';
import WSEvent, { Args, Params } from './ws-event';

export default class implements WSEvent {
  on = 'GUILD_UPDATE';

  // TODO: validate all guild values
  async invoke(ws: WebSocket, client: Socket, { guildId, partialGuild }: Params.GuildUpdate) {
    // TODO: replace with ws implemntation
    ws.io
      .to(guildId)
      .emit('GUILD_UPDATE', { guildId, partialGuild } as Args.GuildUpdate);
  }
}