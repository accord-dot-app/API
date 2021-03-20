import { Socket } from 'socket.io';
import { Message, MessageDocument } from '../../../data/models/message';
import { WebSocket } from '../websocket';
import { WSEvent, Params, WSEventParams } from './ws-event';

export default class implements WSEvent<'MESSAGE_DELETE'> {
  on = 'MESSAGE_DELETE' as const;

  async invoke(ws: WebSocket, client: Socket, { messageId, channelId }: Params.MessageDelete) {
    await Message.deleteOne({ _id: messageId });

    ws.io
      .to(channelId)
      .emit('MESSAGE_DELETE', ({ messageId: messageId }));
  }
}
