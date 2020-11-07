import { Socket } from 'socket.io';
import { Message, MessageDocument } from '../../data/models/message';
import { WebSocket } from '../websocket';
import WSEvent from './ws-event';

export default class implements WSEvent {
  on = 'MESSAGE_DELETE';

  async invoke(ws: WebSocket, client: Socket, message: MessageDocument) {
    await Message.deleteOne(message);

    ws.io
      .to(message.channel._id)
      .emit('MESSAGE_DELETE', ({ messageId: message._id }));
  }
}
