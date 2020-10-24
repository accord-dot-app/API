import { Socket } from 'socket.io';
import { FriendRequestType, User } from '../../data/models/user';
import { WebSocket } from '../websocket';
import WSEvent from './ws-event';

export default class implements WSEvent {
  on = 'USER_ADD_FRIEND';

  async invoke(ws: WebSocket, client: Socket, { senderId, friendId }) {
    ws.io.sockets
      .to(senderId)
      .to(friendId)
      .emit('USER_ADD_FRIEND', {
        sender: await this.addFriendRequest(senderId, friendId, FriendRequestType.Outgoing),
        friend: await this.addFriendRequest(friendId, senderId, FriendRequestType.Incoming)
      });
  }

  async addFriendRequest(senderId: string, friendId: string, type: FriendRequestType) {
    const user = await User.findById(senderId);

    const alreadyPending = user.friendsRequests.some(r => r.userId === friendId);
    if (alreadyPending) return;

    user.friendsRequests.push({ userId: friendId, type });

    return await user.updateOne({
      $set: { friendRequests: user.friendsRequests }
    });
  }
}