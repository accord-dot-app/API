import { Socket } from 'socket.io';
import Invites from '../../../data/invites';
import Deps from '../../../utils/deps';
import { WebSocket } from '../websocket';
import WSEvent, { Args, Params, WSEventParams } from './ws-event';

export default class implements WSEvent {
  on: keyof WSEventParams = 'INVITE_CREATE';

  constructor(
    private invites = Deps.get<Invites>(Invites),
  ) {}

  async invoke(ws: WebSocket, client: Socket, params: Params.InviteCreate) {
    ws.io
      .to(params.guildId)
      .emit('INVITE_CREATE', {
        invite: await this.invites.create(params),
      } as Args.InviteCreate);
  }
}
