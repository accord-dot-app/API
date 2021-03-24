import { Socket } from 'socket.io';
import { WebSocket } from '../websocket';
import { WSEvent, Args, Params, WSEventParams } from './ws-event';

export default class implements WSEvent<'TYPING_START'> {
  on = 'TYPING_START' as const;

  async invoke(ws: WebSocket, client: Socket, { channelId }: Params.TypingStart) {
    client.broadcast
      .to(channelId)
      .emit('TYPING_START', {
        userId: ws.sessions.userId(client),
      } as Args.TypingStart);
  }
}
