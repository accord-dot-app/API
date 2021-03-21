import { Socket } from 'socket.io';
import Channels from '../../../data/channels';
import Messages from '../../../data/messages';
import { PermissionTypes } from '../../../data/types/entity-types';
import Deps from '../../../utils/deps';
import { WSGuard } from '../../modules/ws-guard';
import { WebSocket } from '../websocket';
import { WSEvent, Params, Args } from './ws-event';

export default class implements WSEvent<'MESSAGE_DELETE'> {
  on = 'MESSAGE_DELETE' as const;

  constructor(
    private channels = Deps.get<Channels>(Channels),
    private guard = Deps.get<WSGuard>(WSGuard),
    private messages = Deps.get<Messages>(Messages),
  ) {}

  async invoke(ws: WebSocket, client: Socket, { messageId }: Params.MessageDelete) {
    const message = await this.messages.get(messageId);
    const channel = await this.channels.get(message.channelId);

    try {
      this.guard.validateIsUser(client, message.authorId);
    } catch {
      if (channel.type === 'DM')
        throw new TypeError('Only message author can do this');
      await this.guard.can(client, channel.guildId, PermissionTypes.Text.MANAGE_MESSAGES);
    }
    await message.remove();

    ws.io
      .to(message.channelId)
      .emit('MESSAGE_DELETE', { messageId: messageId } as Args.MessageDelete);
  }
}
