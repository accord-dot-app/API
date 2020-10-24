import { Socket } from 'socket.io';
import { FriendRequestType, User } from '../../data/models/user';
import { WebSocket } from '../websocket';
import WSEvent from './ws-event';

export default class implements WSEvent {
  on = 'CANCEL_FRIEND_REQUEST';

  async invoke(ws: WebSocket, client: Socket, { senderId, friendId }) {
    ws.io.sockets
      .to(senderId)
      .to(friendId)
      .emit('CANCEL_FRIEND_REQUEST', {
        sender: await this.removeFriendRequest(senderId, friendId),
        friend: await this.removeFriendRequest(friendId, senderId)
      });
  }

  async removeFriendRequest(userId: string, friendId: string) {
    const user = await User.findById(userId);

    const index = user.friendRequests.findIndex(r => r.userId === friendId);
    user.friendRequests.splice(index, 1);

    await user.updateOne({ $set: { friendRequests: user.friendRequests } });
    return user;
  }
}