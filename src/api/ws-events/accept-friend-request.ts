import { Socket } from 'socket.io';
import { Channel, ChannelType } from '../../data/models/channel';
import { User, UserDocument } from '../../data/models/user';
import { generateSnowflake } from '../../data/snowflake-entity';
import { WebSocket } from '../websocket';
import WSEvent from './ws-event';

export default class implements WSEvent {
  on = 'ACCEPT_FRIEND_REQUEST';

  async invoke(ws: WebSocket, client: Socket, { senderId, friendId }) {
    const dmChannel = await Channel.create({
      _id: generateSnowflake(),
      createdAt: new Date(),
      recipientIds: [senderId, friendId],
      type: ChannelType.DM
    });

    ws.io.sockets
      .to(senderId)
      .to(friendId)
      .emit('ACCEPT_FRIEND_REQUEST', {
        sender: await this.acceptFriendRequest(senderId, friendId),
        friend: await this.acceptFriendRequest(friendId, senderId),
        dmChannel
      });
  }

  async acceptFriendRequest(userId: string, friendId: string) {
    const user = await User.findById(userId);

    this.removeFriendRequest(user, friendId);
    user.friends.push(friendId);

    await user.updateOne({
      $set: {
        friends: user.friends,
        friendRequests: user.friendRequests
      }
    });
    return user;
  }

  private removeFriendRequest(user: UserDocument, friendId: string) {
    const index = user.friendRequests.findIndex(r => r.userId === friendId);
    user.friendRequests.splice(index, 1);
  }
}