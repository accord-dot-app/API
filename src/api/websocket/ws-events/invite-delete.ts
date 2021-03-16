import { Socket } from 'socket.io';
import Invites from '../../../data/invites';
import { Guild } from '../../../data/models/guild';
import { PermissionTypes } from '../../../data/types/entity-types';
import Deps from '../../../utils/deps';
import { WSGuard } from '../../modules/ws-guard';
import { WebSocket } from '../websocket';
import WSEvent, { Args, Params, WSEventParams } from './ws-event';

export default class implements WSEvent {
  on: keyof WSEventParams = 'INVITE_DELETE';

  constructor(
    private guard = Deps.get<WSGuard>(WSGuard),
    private invites = Deps.get<Invites>(Invites),
  ) {}

  async invoke(ws: WebSocket, client: Socket, { inviteCode }: Params.InviteDelete) {
    const invite = await this.invites.get(inviteCode);
    await this.guard.can(client, invite.guildId, PermissionTypes.General.CREATE_INVITE);

    await Guild.deleteOne({ _id: inviteCode });

    ws.io
      .to(invite.guildId)
      .emit('INVITE_DELETE', { inviteCode } as Args.InviteDelete);
  }
}