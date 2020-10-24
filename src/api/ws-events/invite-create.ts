import { Socket } from 'socket.io';
import { Invite } from '../../data/models/invite';
import Users from '../../data/users';
import Deps from '../../utils/deps';
import { generateInviteCode } from '../../utils/utils';
import { WebSocket } from '../websocket';
import WSEvent from './ws-event';

export default class implements WSEvent {
  on = 'INVITE_CREATE';

  constructor(private users = Deps.get<Users>(Users)) {}

  async invoke(ws: WebSocket, client: Socket, { guild, user }) {
    const invite = await Invite.create({
      _id: generateInviteCode(),
      createdAt: new Date(),
      expiresAt: null,
      guild,
      inviter: user,
      maxUses: null,
      uses: 0
    });

    ws.io
      .to(guild._id)
      .emit('INVITE_CREATE', { invite });
  }
}