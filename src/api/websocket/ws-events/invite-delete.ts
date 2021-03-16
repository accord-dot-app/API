import { Socket } from 'socket.io';
import { WebSocket } from '../websocket';
import WSEvent, { Args, Params, WSEventParams } from './ws-event';

export default class implements WSEvent {
  on: keyof WSEventParams = 'INVITE_DELETE';

  async invoke(ws: WebSocket, client: Socket, { inviteCode }: Params.InviteDelete) {
    // check has perms
    // get invite

    ws.io
      .to()
      .emit('INVITE_DELETE', { inviteCode } as Args.InviteDelete);
  }
}