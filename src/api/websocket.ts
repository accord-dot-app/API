import { Server } from 'http';
import { Message } from '../data/models/message';
import { generateSnowflake } from '../data/snowflake-entity';
import socket from 'socket.io';
import Log from '../utils/log';

export class WebSocket {
  init(server: Server) {
    const io = socket.listen(server);

    io.on('connection', (clientSocket) => {
      console.log('Made socket connection', clientSocket.id);
    
      clientSocket.on('MESSAGE_CREATE', async (partialMessage) => {
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

        console.log(partialMessage);        

        io.sockets.emit('MESSAGE_CREATE', partialMessage);
      });

      clientSocket.on('VIEW_GUILD', (guild) => {
        guild.
      });
    });

    Log.info('Started WebSocket', 'ws');
  }
}