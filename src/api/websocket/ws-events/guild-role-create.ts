import { Socket } from 'socket.io';
import { Guild } from '../../../data/models/guild';
import { GeneralPermission, Role } from '../../../data/models/role';
import { generateSnowflake } from '../../../data/snowflake-entity';
import Deps from '../../../utils/deps';
import { WSGuard } from '../../modules/ws-guard';
import { WebSocket } from '../websocket';
import WSEvent, { Args, Params } from './ws-event';

export default class implements WSEvent {
  on = 'GUILD_ROLE_CREATE';

  constructor(
    private guard = Deps.get<WSGuard>(WSGuard)
  ) {}

  // TODO: throw errors when cannot manage
  async invoke(ws: WebSocket, client: Socket, { guildId, partialRole }: Params.GuildRoleCreate) {
    const userId = ws.sessions.get(client.id);
    const canManage = await this.guard.can(userId, guildId, GeneralPermission.MANAGE_ROLES);
    // if adding an audit log, you would log the client made a role here
    if (!canManage) return;

    const role = await Role.create({
      ...partialRole,
      _id: generateSnowflake(),
      createdAt: new Date(),
      guildId
    });
    const guild = await Guild.findById(guildId);
    await guild.updateOne({ $set: { roles: guild.roles.concat(role) } });

    ws.io.sockets
      .to(guild._id)
      .emit('GUILD_ROLE_CREATE', { role } as Args.GuildRoleCreate);
  }
}
