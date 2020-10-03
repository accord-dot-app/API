import { Socket } from 'socket.io';
import { Message } from '../../data/models/message';
import { generateSnowflake } from '../../data/snowflake-entity';
import { WebSocket } from '../websocket';
import WSEvent from './ws-event';

export default class implements WSEvent {
  on = 'MESSAGE_CREATE';

  async invoke(ws: WebSocket, client: Socket, partialMessage: any) {
    let message = await Message.create({
      _id: generateSnowflake(),
      author: partialMessage.author,
      channel: partialMessage.channel,
      content: partialMessage.content,
      guild: partialMessage.guild,
      createdAt: new Date(),
      updatedAt: null
    });
    message = await message
      .populate('author')
      .execPopulate();    

    ws.io.sockets.emit('MESSAGE_CREATE', partialMessage);
  }
}