import { Socket } from 'socket.io';
import { Message, MessageDocument, MessageEmbed } from '../../../data/models/message';
import { WebSocket } from '../websocket';
import WSEvent, { Args, Params } from './ws-event';
import got from 'got';

const metascraper = require('metascraper')([
  require('metascraper-description')(),
  require('metascraper-image')(),
  require('metascraper-title')(),
  require('metascraper-url')()
]);

export default class implements WSEvent {
  on = 'MESSAGE_UPDATE';

  async invoke(ws: WebSocket, client: Socket, { messageId, withEmbed }: Params.MessageUpdate) {
    const message = await Message.findById(messageId);
    await message.update({
      content: message.content,
      embed: withEmbed ? await getEmbed(message) : null,
      createdAt: message.createdAt,
      updatedAt: new Date()
    });

    ws.io
      .to(message.channelId)
      .emit('MESSAGE_UPDATE', { message } as Args.MessageUpdate);
  }
}

async function getEmbed(message: MessageDocument): Promise<MessageEmbed> {
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
