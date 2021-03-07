import { Socket } from 'socket.io';
import { WebSocket } from '../websocket';
import WSEvent, { Args, Params } from './ws-event';

export default class implements WSEvent {
  on = 'GUILD_UPDATE';

  // TODO: validate all guild values
  async invoke(ws: WebSocket, client: Socket, { guild }: Params.GuildUpdate) {
    ws.io
      .to(guild._id)
      .emit('GUILD_UPDATE', { guild } as Args.GuildUpdate);
  }
}