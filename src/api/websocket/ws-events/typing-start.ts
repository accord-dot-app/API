import { Socket } from 'socket.io';
import Users from '../../../data/users';
import Deps from '../../../utils/deps';
import { WebSocket } from '../websocket';
import WSEvent, { Args, Params } from './ws-event';

export default class implements WSEvent {
  on = 'TYPING_START';

  constructor(
    private users = Deps.get<Users>(Users)
  ) {}

  async invoke(ws: WebSocket, client: Socket, { channelId, userId }: Params.TypingStart) {
    client.broadcast
      .to(channelId)
      .emit('TYPING_START', { userId } as Args.TypingStart);
  }
}