import { Socket } from 'socket.io';
import { Invite } from '../../../data/models/invite';
import { generateInviteCode } from '../../../utils/utils';
import { WebSocket } from '../websocket';
import WSEvent, { Args, Params } from './ws-event';

export default class implements WSEvent {
  on = 'INVITE_CREATE';

  async invoke(ws: WebSocket, client: Socket, { guildId, userId, options }: Params.InviteCreate) {
    ws.io
      .to(guildId)
      .emit('INVITE_CREATE', {
        invite: await Invite.create({
          _id: generateInviteCode(),
          createdAt: new Date(),
          guildId: guildId,
          inviterId: userId,
          maxUses: options?.maxUses,
          uses: 0
        })
      } as Args.InviteCreate);
  }
}