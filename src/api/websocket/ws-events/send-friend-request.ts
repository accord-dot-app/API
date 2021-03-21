import { Socket } from 'socket.io';
import { UserTypes } from '../../../data/types/entity-types';
import { User } from '../../../data/models/user';
import { WebSocket } from '../websocket';
import { WSEvent, Args, Params, WSEventParams } from './ws-event';
import Deps from '../../../utils/deps';
import Users from '../../../data/users';

export default class implements WSEvent<'SEND_FRIEND_REQUEST'> {
  on = 'SEND_FRIEND_REQUEST' as const;

  constructor(
    private users = Deps.get<Users>(Users),
  ) {}

  async invoke(ws: WebSocket, client: Socket, { senderId, friendUsername }: Params.SendFriendRequest) {
    const friend = await this.users.getByUsername(friendUsername);
    if (friend.id === senderId)
      throw new TypeError('Cannot add yourself as a friend');

    ws.io
      .to(senderId)
      .to(friend.id)
      .emit('SEND_FRIEND_REQUEST', {
        sender: await this.addFriendRequest(senderId, friend.id, 'OUTGOING'),
        friend: await this.addFriendRequest(friend.id, senderId, 'INCOMING')
      } as Args.SendFriendRequest);
  }

  async addFriendRequest(userId: string, friendId: string, type: UserTypes.FriendRequestType) {
    const user = await this.users.get(userId);
    const alreadyPending = user.friendRequests.some(r => r.userId === friendId);
    if (alreadyPending)
      return user;

    const friendRequest: UserTypes.FriendRequest = { userId: friendId, type };
    return user.update(
      { $push: { friendRequests: friendRequest } },
      { runValidators: true },
    );
  }
}