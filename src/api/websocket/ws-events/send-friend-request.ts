import { Socket } from 'socket.io';
import { UserTypes } from '../../../data/types/entity-types';
import { User } from '../../../data/models/user';
import { WebSocket } from '../websocket';
import WSEvent, { Args, Params, WSEventParams } from './ws-event';

export default class implements WSEvent {
  on: keyof WSEventParams = 'SEND_FRIEND_REQUEST';

  async invoke(ws: WebSocket, client: Socket, { senderId, friendUsername }: Params.SendFriendRequest) {
    const friend = await User.findOne({ username: friendUsername });
    if (!friend || friend._id === senderId) return;

    ws.io
      .to(senderId)
      .to(friend._id)
      .emit('SEND_FRIEND_REQUEST', {
        sender: await this.addFriendRequest(senderId, friend._id, 'OUTGOING'),
        friend: await this.addFriendRequest(friend._id, senderId, 'INCOMING')
      } as Args.SendFriendRequest);
  }

  async addFriendRequest(userId: string, friendId: string, type: UserTypes.FriendRequestType) {
    const user = await User.findById(userId);
    if (!user) return;

    const alreadyPending = user.friendRequestIds.some(r => r.userId === friendId);
    if (alreadyPending)
      return user;

    user.friendRequestIds.push({ userId: friendId, type });

    return user.update({
      $set: { friendRequests: user.friendRequestIds }
    });
  }
}