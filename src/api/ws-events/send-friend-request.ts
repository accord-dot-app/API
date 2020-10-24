import { Socket } from 'socket.io';
import { FriendRequestType, User } from '../../data/models/user';
import { WebSocket } from '../websocket';
import WSEvent from './ws-event';

export default class implements WSEvent {
  on = 'SEND_FRIEND_REQUEST';

  async invoke(ws: WebSocket, client: Socket, { senderId, friendUsername }) {
    const friend = await User.findOne({ username: friendUsername });
    if (!friend || friend._id === senderId) return;

    ws.io.sockets
      .to(senderId)
      .to(friend._id)
      .emit('SEND_FRIEND_REQUEST', {
        sender: await this.addFriendRequest(senderId, friend._id, FriendRequestType.Outgoing),
        friend: await this.addFriendRequest(friend._id, senderId, FriendRequestType.Incoming)
      });
  }

  async addFriendRequest(userId: string, friendId: string, type: FriendRequestType) {
    const user = await User.findById(userId);

    const alreadyPending = user.friendRequests.some(r => r.userId === friendId);
    if (alreadyPending)
      return user;

    user.friendRequests.push({ userId: friendId, type });

    await user.updateOne({ $set: { friendRequests: user.friendRequests } });

    return user;
  }
}