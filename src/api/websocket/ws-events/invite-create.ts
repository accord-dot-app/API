import { Socket } from 'socket.io';
import Invites from '../../../data/invites';
import Deps from '../../../utils/deps';
import { WSGuard } from '../../modules/ws-guard';
import { WebSocket } from '../websocket';
import { WSEvent, Args, Params, WSEventParams } from './ws-event';

export default class implements WSEvent<'INVITE_CREATE'> {
  on = 'INVITE_CREATE' as const;

  constructor(
    private guard = Deps.get<WSGuard>(WSGuard),
    private invites = Deps.get<Invites>(Invites),
  ) {}

  async invoke(ws: WebSocket, client: Socket, params: Params.InviteCreate) {
    ws.io
      .to(params.guildId)
      .emit('INVITE_CREATE', {
        invite: await this.invites
          .create(params, ws.sessions.userId(client)),
      } as Args.InviteCreate);
  }
}
