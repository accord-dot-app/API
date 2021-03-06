import { Socket } from 'socket.io';
import { Invite } from '../../../data/models/invite';
import Users from '../../../data/users';
import Deps from '../../../utils/deps';
import { generateInviteCode } from '../../../utils/utils';
import { WebSocket } from '../websocket';
import WSEvent from './ws-event';

export default class implements WSEvent {
  on = 'INVITE_CREATE';

  async invoke(ws: WebSocket, client: Socket, { guild, user, options }) {
    ws.io
      .to(guild._id)
      .emit('INVITE_CREATE', {
        invite: await Invite.create({
          _id: generateInviteCode(),
          createdAt: new Date(),
          expiresAt: null,
          guildId: guild.id,
          inviterId: user.id,
          maxUses: options?.maxUses,
          uses: 0
        })
      });
  }
}