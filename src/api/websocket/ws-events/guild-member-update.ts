import { Socket } from 'socket.io';
import { WebSocket } from '../websocket';
import WSEvent, { Args, Params } from './ws-event';

export default class implements WSEvent {
  on = 'GUILD_MEMBER_UPDATE';

  // TODO: validate can manage etc.
  async invoke(ws: WebSocket, _: Socket, { userId, guildId, partialMember }: Params.GuildMemberUpdate) {
    ws.io.sockets
      .to(guildId)
      .emit('GUILD_MEMBER_UPDATE', { userId, partialMember } as Args.GuildMemberUpdate);
  }
}
