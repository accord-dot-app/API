import { Socket } from 'socket.io';
import { PermissionTypes } from '../../../data/types/entity-types';
import { Guild } from '../../../data/models/guild';
import Deps from '../../../utils/deps';
import { WSGuard } from '../../modules/ws-guard';
import { WebSocket } from '../websocket';
import { WSEvent, Args, Params } from './ws-event';

export default class implements WSEvent<'GUILD_UPDATE'> {
  on = 'GUILD_UPDATE' as const;

  constructor(
    private guard = Deps.get<WSGuard>(WSGuard),
  ) {}

  public async invoke(ws: WebSocket, client: Socket, { guildId, partialGuild }: Params.GuildUpdate) { 
    await this.guard.validateCan(client, guildId, PermissionTypes.General.MANAGE_GUILD);

    this.guard.validateKeys('guild', partialGuild);

    await Guild.updateOne(
      { _id: guildId },
      partialGuild,
      { runValidators: true },
    );

    ws.io
      .to(guildId)
      .emit('GUILD_UPDATE', { guildId, partialGuild } as Args.GuildUpdate);
  }
}
