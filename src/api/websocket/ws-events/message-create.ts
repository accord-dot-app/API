import { Socket } from 'socket.io';
import { Message } from '../../../data/models/message';
import { generateSnowflake } from '../../../data/snowflake-entity';
import { WebSocket } from '../websocket';
import { WSEvent, Args, Params } from './ws-event';
import Deps from '../../../utils/deps';
import { WSGuard } from '../../modules/ws-guard';
import Messages from '../../../data/messages';

export default class implements WSEvent<'MESSAGE_CREATE'> {
  on = 'MESSAGE_CREATE' as const;

  constructor(
    private messages = Deps.get<Messages>(Messages),
    private guard = Deps.get<WSGuard>(WSGuard),
  ) {}

  public async invoke(ws: WebSocket, client: Socket, { channelId, partialMessage }: Params.MessageCreate) {
    await this.guard.canAccessChannel(client, channelId, true);
      
    const userId = ws.sessions.userId(client);
    const message = await this.messages.create(userId, channelId, partialMessage);

    ws.io
      .to(channelId)
      .emit('MESSAGE_CREATE', { message } as Args.MessageCreate);
  }
}
