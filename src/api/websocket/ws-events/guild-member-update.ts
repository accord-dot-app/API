import { Socket } from 'socket.io';
import { WebSocket } from '../websocket';
import WSEvent, { Args, Params, WSEventParams } from './ws-event';

export default class implements WSEvent {
  on: keyof WSEventParams = 'GUILD_MEMBER_UPDATE';

  // TODO: validate can manage etc.
  async invoke(ws: WebSocket, _: Socket, { userId, guildId, partialMember }: Params.GuildMemberUpdate) {
    ws.io
      .to(guildId)
      .emit('GUILD_MEMBER_UPDATE', { userId, partialMember } as Args.GuildMemberUpdate);
  }
}
