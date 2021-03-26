import { Socket } from 'socket.io';
import { User, UserDocument } from '../../../data/models/user';
import { Params, WSEventParams } from '../../../data/types/ws-types';
import Users from '../../../data/users';
import Deps from '../../../utils/deps';
import { WebSocket } from '../websocket';
import { WSEvent, Args } from './ws-event';

export default class implements WSEvent<'REMOVE_FRIEND'> {
  on = 'REMOVE_FRIEND' as const;

  constructor(
    private users = Deps.get<Users>(Users),
  ) {}

  async invoke(ws: WebSocket, client: Socket, { friendId }: Params.RemoveFriend) {
    const senderId = ws.sessions.userId(client);
    const sender = await this.users.get(senderId);
    const friend = await this.users.get(friendId);

    ws.io
      .to(senderId)
      .to(friendId)
      .emit('REMOVE_FRIEND', {
        sender: await this.removeFriend(sender, friend),
        friend: await this.removeFriend(friend, sender),
      } as Args.RemoveFriend);
  }

  async removeFriend(user: UserDocument, friend: UserDocument) {
    const friendExists = user.friendIds.includes(friend._id);
    return (friendExists)
      ? await user.update(
          { $pull: { friends: friend } },
          { runValidators: true },
        )
      : user;
  }
}