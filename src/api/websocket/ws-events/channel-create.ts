import { Socket } from 'socket.io';
import { Channel } from '../../../data/models/channel';
import { Guild } from '../../../data/models/guild';
import { GeneralPermission } from '../../../data/models/role';
import { generateSnowflake } from '../../../data/snowflake-entity';
import Deps from '../../../utils/deps';
import { WSGuard } from '../../modules/ws-guard';
import { WebSocket } from '../websocket';
import WSEvent, { Args, Params } from './ws-event';

export default class implements WSEvent {
  on = 'CHANNEL_CREATE';

  constructor(
    private guard = Deps.get<WSGuard>(WSGuard)
  ) {}

  async invoke(ws: WebSocket, client: Socket, { partialChannel, guildId }: Params.ChannelCreate) {
    const userId = ws.sessions.get(client.id);
    const canManage = await this.guard.can(userId, guildId, GeneralPermission.MANAGE_CHANNELS);
    if (!canManage) return;
    
    const channel = await Channel.create({
      _id: generateSnowflake(),
      name: partialChannel.name,
      summary: '',
      createdAt: new Date(),
      guildId,
      type: partialChannel.type,
      memberIds: []
    });

    await Guild.updateOne({ _id: guildId }, {
      $push: {
        channels: channel
      }
    }).lean();

    ws.io.sockets
      .to(guildId)
      .emit('CHANNEL_CREATE', {
        channel
      } as Args.ChannelCreate);
  }
}
