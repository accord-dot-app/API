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
  on = 'MESSAGE_UPDATE';

  async invoke(ws: WebSocket, client: Socket, { message, withEmbed }) {
    await Message.findByIdAndUpdate(message._id, {
      content: message.content,
      embed: withEmbed ? await getEmbed(message) : null,
      createdAt: message.createdAt,
      updatedAt: new Date()
    });

    ws.io
      .to(message.channel._id)
      .emit('MESSAGE_UPDATE', message);
  }
}

async function getEmbed(message): Promise<MessageEmbed> {
  try {
    const containsURL = /([https://].*)/.test(message.content);
    if (!containsURL)
      return null;

    const targetURL = /([https://].*)/.exec(message.content)[0];  

    const { body: html, url } = await got(targetURL);
    return await metascraper({ html, url });
  } catch {
    return null;
  }
}