import { Socket } from 'socket.io';
import { User, UserDocument } from '../../../data/models/user';
import Users from '../../../data/users';
import Deps from '../../../utils/deps';
import { WebSocket } from '../websocket';
import WSEvent, { Args, Params, WSEventParams } from './ws-event';

export default class implements WSEvent {
  on: keyof WSEventParams = 'REMOVE_FRIEND';

  constructor(private users = Deps.get<Users>(Users)) {}

  async invoke(ws: WebSocket, client: Socket, { senderId, friendId }: Params.RemoveFriend) {
    if (!friendId) return;

    ws.io
      .to(senderId)
      .to(friendId)
      .emit('REMOVE_FRIEND', {
        sender: await this.removeFriendAndUpdate(senderId, friendId),
        friend: await this.removeFriendAndUpdate(friendId, senderId)
      } as Args.RemoveFriend);
  }

  async removeFriendAndUpdate(userId: string, friendId: string) {
    const user = await this.users.get(userId);
    if (!user) return;

    this.removeFriend(user, friendId);

    await user.updateOne({ $set: { friends: user.friendIds } });
    return user;
  }

  private removeFriend(user: UserDocument, friendId: string) {
    const index = user.friendIds.findIndex((user: any) => user._id === friendId);
    user.friendIds.splice(index, 1);
  }
}