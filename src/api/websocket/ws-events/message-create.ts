import { Socket } from 'socket.io';
import { Message } from '../../../data/models/message';
import { generateSnowflake } from '../../../data/snowflake-entity';
import { WebSocket } from '../websocket';
import { WSEvent, Args, Params, WSEventParams } from './ws-event';
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

export default class implements WSEvent<'MESSAGE_CREATE'> {
  on = 'MESSAGE_CREATE' as const;

  constructor(
    private guard = Deps.get<WSGuard>(WSGuard)
  ) {}

  public async invoke(ws: WebSocket, client: Socket, { channelId, partialMessage }: Params.MessageCreate) {
    await this.guard.canAccessChannel(client, channelId, true);

    const message = await Message.create({
      _id: generateSnowflake(),
      authorId: ws.sessions.userId(client),
      channelId,
      content: partialMessage.content,
      embed: await this.getEmbed(partialMessage),
    });

    // FIXME: dumb fix, should be handled in ready
    if (!client.rooms.has(channelId))
      await client.join(channelId);

    ws.io
      .to(channelId)
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
