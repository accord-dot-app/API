import { Socket } from 'socket.io';
import { UserTypes } from '../../../data/types/entity-types';
import { User } from '../../../data/models/user';
import { WebSocket } from '../websocket';
import WSEvent, { Args, Params } from './ws-event';

export default class implements WSEvent {
  on = 'SEND_FRIEND_REQUEST';

  async invoke(ws: WebSocket, client: Socket, { senderId, friendUsername }: Params.SendFriendRequest) {
    const friend = await User.findOne({ username: friendUsername });
    if (!friend || friend._id === senderId) return;

    ws.io.sockets
      .to(senderId)
      .to(friend._id)
      .emit('SEND_FRIEND_REQUEST', {
        sender: await this.addFriendRequest(senderId, friend._id, 'OUTGOING'),
        friend: await this.addFriendRequest(friend._id, senderId, 'INCOMING')
      } as Args.SendFriendRequest);
  }

  async addFriendRequest(userId: string, friendId: string, type: UserTypes.FriendRequestType) {
    const user = await User.findById(userId);

    const alreadyPending = user.friendRequests.some(r => r.userId === friendId);
    if (alreadyPending)
      return user;

    user.friendRequests.push({ userId: friendId, type });

    await user.updateOne({ $set: { friendRequests: user.friendRequests } });
    return user;
  }
}