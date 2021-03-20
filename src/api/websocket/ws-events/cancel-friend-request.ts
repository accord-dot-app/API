import { Socket } from 'socket.io';
import Users from '../../../data/users';
import Deps from '../../../utils/deps';
import { WebSocket } from '../websocket';
import { WSEvent, Args, Params } from './ws-event';

export default class implements WSEvent<'CANCEL_FRIEND_REQUEST'> {
  on = 'CANCEL_FRIEND_REQUEST' as const;

  constructor(
    private users = Deps.get<Users>(Users),
  ) {}

  async invoke(ws: WebSocket, client: Socket, { senderId, friendId }: Params.CancelFriendRequest) {
    ws.io
      .to([senderId, friendId])
      .emit('CANCEL_FRIEND_REQUEST', {
        sender: await this.removeFriendRequest(senderId, friendId),
        friend: await this.removeFriendRequest(friendId, senderId),
      } as Args.CancelFriendRequest);
  }

  async removeFriendRequest(userId: string, friendId: string) {
    const user = await this.users.get(userId);
    return user.update(
      { $pull: { friendRequests: friendId } },
      { runValidators: true }
    );
  }
}