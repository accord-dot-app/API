import { Server } from 'http';
import { Message } from '../data/models/message';
import { generateSnowflake } from '../data/snowflake-entity';
import socket from 'socket.io';

export class WebSocket {
  init(server: Server) {
    const io = socket(server);

    io.on('connection', (clientSocket) => {
      console.log('Made socket connection', clientSocket.id);
    
      clientSocket.on('MESSAGE_CREATE', async (partialMessage) => {
         const message = await Message.create({
          _id: generateSnowflake(),
          author: partialMessage.author,
          channel: partialMessage.channel,
          content: partialMessage.content,
          createdAt: new Date(),
          updatedAt: null
        });
        io.sockets.emit('MESSAGE_CREATE', message);
      });
    
      clientSocket.on('TYPING_START', (data) => {
        clientSocket.broadcast.emit('typing', data);
      });
    });
  }
}