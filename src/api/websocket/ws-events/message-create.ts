import { Socket } from 'socket.io';
import { Message } from '../../../data/models/message';
import { generateSnowflake } from '../../../data/snowflake-entity';
import { WebSocket } from '../websocket';
import { WSEvent, Args, Params } from './ws-event';
import Deps from '../../../utils/deps';
import { WSGuard } from '../../modules/ws-guard';
import Messages from '../../../data/messages';
import Pings from '../../../data/pings';
import Channels from '../../../data/channels';
import Users from '../../../data/users';

export default class implements WSEvent<'MESSAGE_CREATE'> {
  on = 'MESSAGE_CREATE' as const;

  constructor(
    private channels = Deps.get<Channels>(Channels),
    private pings = Deps.get<Pings>(Pings),
    private messages = Deps.get<Messages>(Messages),
    private guard = Deps.get<WSGuard>(WSGuard),
    private users = Deps.get<Users>(Users),
  ) {}

  public async invoke(ws: WebSocket, client: Socket, { channelId, partialMessage }: Params.MessageCreate) {
    await this.guard.canAccessChannel(client, channelId, true);
      
    const userId = ws.sessions.userId(client);
    const message = await this.messages.create(userId, channelId, partialMessage);

    if (!client.rooms.has(channelId))
      await client.join(channelId); 

    ws.io
      .to(channelId)
      .emit('MESSAGE_CREATE', { message } as Args.MessageCreate);

    const self = await this.users.getSelf(userId, false);
    const channel = await this.channels.get(channelId);
    const ignored = this.pings.isIgnored(self, channel, message);

    if (!ignored) {
      ws.io
        .to(userId)
        .emit('PING', { channelId, guildId: channel.guildId } as Args.Ping);
    }
  }
}
