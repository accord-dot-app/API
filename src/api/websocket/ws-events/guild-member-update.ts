import { Socket } from 'socket.io';
import { WebSocket } from '../websocket';
import WSEvent, { Args, Params } from './ws-event';

export default class implements WSEvent {
  on = 'GUILD_MEMBER_UPDATE';

  // TODO: validate can manage etc.
  async invoke(ws: WebSocket, _: Socket, { member }: Params.GuildMemberUpdate) {
    ws.io.sockets
      .to(member.guild._id)
      .emit('GUILD_MEMBER_UPDATE', { member } as Args.GuildMemberUpdate);
  }
}
