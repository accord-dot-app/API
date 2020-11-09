import { Socket } from 'socket.io';
import { Guild } from '../../data/models/guild';
import { GeneralPermission, Role } from '../../data/models/role';
import { generateSnowflake } from '../../data/snowflake-entity';
import { can } from '../modules/ws-guard';
import { WebSocket } from '../websocket';
import WSEvent from './ws-event';

export default class implements WSEvent {
  on = 'GUILD_ROLE_CREATE';

  async invoke(ws: WebSocket, client: Socket, { partialRole }) {
    const userId = ws.sessions.get(client.id);
    const canManage = await can(userId, partialRole.guildId, GeneralPermission.MANAGE_ROLES);
    if (!canManage) return;

    const role = await Role.create({
      ...partialRole,
      _id: generateSnowflake(),
      createdAt: new Date()
    });
    const guild = await Guild.findById(partialRole.guildId);
    await guild.updateOne({ $set: { roles: guild.roles.concat(role) } });

    ws.io.sockets
      .to(guild._id)
      .emit('GUILD_ROLE_CREATE', { role });
  }
}