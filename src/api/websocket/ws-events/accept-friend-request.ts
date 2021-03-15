import { Socket } from 'socket.io';
import Channels from '../../../data/channels';
import { Channel } from '../../../data/models/channel';
import { UserDocument } from '../../../data/models/user';
import { generateSnowflake } from '../../../data/snowflake-entity';
import Users from '../../../data/users';
import Deps from '../../../utils/deps';
import { WebSocket } from '../websocket';
import WSEvent, { Args, Params } from './ws-event';

export default class implements WSEvent {
  on = 'ACCEPT_FRIEND_REQUEST';

  constructor(
    private channels = Deps.get<Channels>(Channels),
    private users = Deps.get<Users>(Users),
  ) {}

  async invoke(ws: WebSocket, client: Socket, { senderId, friendId }: Params.AcceptFriendRequest) {
    const sender = await this.users.get(senderId);
    const friend = await this.users.get(friendId);

    ws.io.sockets
      .to(senderId)
      .to(friendId)
      .emit('ACCEPT_FRIEND_REQUEST', {
        sender: await this.acceptFriend(sender, friend),
        friend: await this.acceptFriend(friend, sender),
        dmChannel: await this.channels.createDM(senderId, friendId)
      } as Args.AcceptFriendRequest);
  }

  async acceptFriend(user: UserDocument, friend: UserDocument) {
    const friendExists = user.friends.includes(friend);
    if (friendExists)
      return user;

    await user.update({
      $pull: { friendRequests: friend },
      $push: { friends: friend }
    });
    return user;
  }
}