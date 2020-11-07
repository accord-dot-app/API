import { Socket } from 'socket.io';
import { Message, MessageEmbed } from '../../data/models/message';
import { generateSnowflake } from '../../data/snowflake-entity';
import { WebSocket } from '../websocket';
import WSEvent from './ws-event';
import got from 'got';

const metascraper = require('metascraper')([
  require('metascraper-description')(),
  require('metascraper-image')(),
  require('metascraper-title')(),
  require('metascraper-url')()
]);

export default class implements WSEvent {
  on = 'MESSAGE_CREATE';

  async invoke(ws: WebSocket, client: Socket, partialMessage: any) {
    let message = await Message.create({
      _id: generateSnowflake(),
      author: partialMessage.author,
      channel: partialMessage.channel,
      content: partialMessage.content,
      embed: await getEmbed(partialMessage),
      guild: partialMessage.guild,
      createdAt: new Date(),
      updatedAt: null
    });
    message = await message
      .populate('author')
      .execPopulate();

    ws.io.sockets
      .to(partialMessage.channel._id)
      .emit('MESSAGE_CREATE', message);
  }
}

async function getEmbed(message: any): Promise<MessageEmbed> {
  try {
    const containsURL = /([https://].*)/.test(message.content);
    if (!containsURL)
      return null;

    const targetURL = /([https://].*)/
      .exec(message.content)[0]
      .split(' ')[0];  

    const { body: html, url } = await got(targetURL);
    return await metascraper({ html, url });
  } catch {
    return null;
  }
}