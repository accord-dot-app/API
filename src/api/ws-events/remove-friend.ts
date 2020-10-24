import { Socket } from 'socket.io';
import { User, UserDocument } from '../../data/models/user';
import Users from '../../data/users';
import Deps from '../../utils/deps';
import { WebSocket } from '../websocket';
import WSEvent from './ws-event';

export default class implements WSEvent {
  on = 'REMOVE_FRIEND';

  constructor(private users = Deps.get<Users>(Users)) {}

  async invoke(ws: WebSocket, client: Socket, { senderId, friendId }) {
    if (!friendId) return;

    ws.io.sockets
      .to(senderId)
      .to(friendId)
      .emit('REMOVE_FRIEND', {
        sender: await this.removeFriendAndUpdate(senderId, friendId),
        friend: await this.removeFriendAndUpdate(friendId, senderId)
      });
  }

  async removeFriendAndUpdate(userId: string, friendId: string) {
    const user = await this.users.get(userId);

    this.removeFriend(user, friendId);

    await user.updateOne({ $set: { friends: user.friends } });
    return user;
  }

  private removeFriend(user: UserDocument, friendId: string) {
    const index = user.friends.findIndex((user: any) => user._id === friendId);
    user.friends.splice(index, 1);
  }
}