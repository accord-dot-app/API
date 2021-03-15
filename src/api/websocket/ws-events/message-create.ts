import { Socket } from 'socket.io';
import { Message } from '../../../data/models/message';
import { generateSnowflake } from '../../../data/snowflake-entity';
import { WebSocket } from '../websocket';
import WSEvent, { Args, Params } from './ws-event';
import got from 'got';
import Deps from '../../../utils/deps';
import { WSGuard } from '../../modules/ws-guard';
import { MessageTypes } from '../../../data/types/entity-types';
import { Partial } from '../../../data/types/ws-types';

const metascraper = require('metascraper')([
  require('metascraper-description')(),
  require('metascraper-image')(),
  require('metascraper-title')(),
  require('metascraper-url')()
]);

export default class implements WSEvent {
  on = 'MESSAGE_CREATE';

  constructor(
    private guard = Deps.get<WSGuard>(WSGuard)
  ) {}

  async invoke(ws: WebSocket, client: Socket, { partialMessage }: Params.MessageCreate) {
    this.guard.validateIsUser(client, partialMessage.authorId); // TODO: added this everywhere
    await this.guard.canAccessChannel(client, partialMessage.channelId);

    const maxLength = 3000;
    if (partialMessage.content.length > maxLength)
      throw new TypeError('Content Too Long');

    const message = await Message.create({
      _id: generateSnowflake(),
      authorId: partialMessage.authorId,
      channelId: partialMessage.channelId,
      content: partialMessage.content,
      embed: await this.getEmbed(partialMessage),
      guildId: partialMessage.guildId,
      createdAt: new Date(),
    });

    ws.io
      .to(partialMessage.channelId)
      .emit('MESSAGE_CREATE', { message } as Args.MessageCreate);
  }

  public async getEmbed(message: Partial.Message): Promise<MessageTypes.Embed | undefined> {
    try {
      const targetURL = /([https://].*)/.exec(message.content)?.[0];  
      if (!targetURL) return;
  
      const { body: html, url } = await got(targetURL);
      return await metascraper({ html, url });
    } catch {}
  }
}
