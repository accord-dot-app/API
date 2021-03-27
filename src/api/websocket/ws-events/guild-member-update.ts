import { Socket } from 'socket.io';
import { WebSocket } from '../websocket';
import { WSEvent, Args, Params, WSEventParams } from './ws-event';

export default class implements WSEvent<'GUILD_MEMBER_UPDATE'> {
  on = 'GUILD_MEMBER_UPDATE' as const;

  // TODO: validate can manage etc.
  public async invoke(ws: WebSocket, _: Socket, { userId, guildId, partialMember }: Params.GuildMemberUpdate) {
    ws.io
      .to(guildId)
      .emit('GUILD_MEMBER_UPDATE', { userId, partialMember } as Args.GuildMemberUpdate);
  }
}
