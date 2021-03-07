import { Socket } from 'socket.io';
import { GeneralPermission, Role } from '../../../data/models/role';
import Deps from '../../../utils/deps';
import { WSGuard } from '../../modules/ws-guard';
import { WebSocket } from '../websocket';
import WSEvent, { Args, Params } from './ws-event';

export default class implements WSEvent {
  on = 'GUILD_ROLE_UPDATE';

  constructor(
    private guard = Deps.get<WSGuard>(WSGuard)
  ) {}

  // TODO: validate all role values
  async invoke(ws: WebSocket, client: Socket, { roleId, partialRole, guildId }: Params.GuildRoleUpdate) {
    const userId = ws.sessions.get(client.id);
    const canManage = await this.guard.can(userId, guildId, GeneralPermission.MANAGE_ROLES);
    if (!canManage) return;

    await Role.updateOne({ _id: roleId }, partialRole)

    ws.io
      .to(guildId)
      .emit('GUILD_ROLE_UPDATE', { partialRole } as Args.GuildRoleUpdate);
  }
}