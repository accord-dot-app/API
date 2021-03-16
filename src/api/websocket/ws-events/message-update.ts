import { Socket } from 'socket.io';
import { Message, MessageDocument } from '../../../data/models/message';
import { WebSocket } from '../websocket';
import WSEvent, { Args, Params, WSEventParams } from './ws-event';
import got from 'got';
import { MessageTypes } from '../../../data/types/entity-types';
import Deps from '../../../utils/deps';
import { WSGuard } from '../../modules/ws-guard';
import Messages from '../../../data/messages';

const metascraper = require('metascraper')([
  require('metascraper-description')(),
  require('metascraper-image')(),
  require('metascraper-title')(),
  require('metascraper-url')()
]);

export default class implements WSEvent {
  on: keyof WSEventParams = 'MESSAGE_UPDATE';

  constructor(
    private guard = Deps.get<WSGuard>(WSGuard),
    private messages = Deps.get<Messages>(Messages),
  ) {}

  async invoke(ws: WebSocket, client: Socket, { messageId, partialMessage, withEmbed }: Params.MessageUpdate) {
    const message = await this.messages.get(messageId);
    this.guard.validateIsUser(client, message.authorId);
    
    await message.update({
      content: partialMessage.content,
      embed: (withEmbed) ? await this.getEmbed(message) : undefined,
      updatedAt: new Date()
    });

    ws.io
      .to(message.channelId)
      .emit('MESSAGE_UPDATE', { messageId, partialMessage } as Args.MessageUpdate);
  }

  public async getEmbed(message: MessageDocument): Promise<MessageTypes.Embed | undefined> {
    try {
      const targetURL = /([https://].*)/.exec(message.content)?.[0];  
      if (!targetURL) return;
  
      const { body: html, url } = await got(targetURL);
      return await metascraper({ html, url });
    } catch {}
  }
}
