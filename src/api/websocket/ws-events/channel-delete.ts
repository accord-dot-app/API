import { Socket } from 'socket.io';
import { PermissionTypes } from '../../../data/types/entity-types';
import { Channel, TextChannelDocument } from '../../../data/models/channel';
import { Guild } from '../../../data/models/guild';
import { generateSnowflake } from '../../../data/snowflake-entity';
import Deps from '../../../utils/deps';
import { WSGuard } from '../../modules/ws-guard';
import { WebSocket } from '../websocket';
import { WSEvent, Args, Params, WSEventParams } from './ws-event';
import Channels from '../../../data/channels';

export default class implements WSEvent<'CHANNEL_DELETE'> {
  on = 'CHANNEL_DELETE' as const;

  constructor(
    private channels = Deps.get<Channels>(Channels),
    private guard = Deps.get<WSGuard>(WSGuard),
  ) {}

  public async invoke(ws: WebSocket, client: Socket, { channelId }: Params.ChannelDelete) {
    const channel = await this.channels.get(channelId) as TextChannelDocument;
    await this.guard.can(client, channel.guildId, PermissionTypes.General.MANAGE_CHANNELS);
    
    await client.leave(channel.id);
    await channel.deleteOne();

    ws.io
      .to(channel.guildId)
      .emit('CHANNEL_DELETE', { channelId: channel._id } as Args.ChannelDelete);
  }
}
