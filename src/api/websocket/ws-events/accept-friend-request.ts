import { Socket } from 'socket.io';
import Channels from '../../../data/channels';
import { UserDocument } from '../../../data/models/user';
import Users from '../../../data/users';
import Deps from '../../../utils/deps';
import { WebSocket } from '../websocket';
import WSEvent, { Args, Params, WSEventParams } from './ws-event';

export default class implements WSEvent {
  on: keyof WSEventParams = 'ACCEPT_FRIEND_REQUEST';

  constructor(
    private channels = Deps.get<Channels>(Channels),
    private users = Deps.get<Users>(Users),
  ) {}

  async invoke(ws: WebSocket, client: Socket, { senderId, friendId }: Params.AcceptFriendRequest) {
    const sender = await this.users.get(senderId);
    const friend = await this.users.get(friendId);

    this.validateCanAccept(sender, friend);

    ws.io
      .to(senderId)
      .to(friendId)
      .emit('ACCEPT_FRIEND_REQUEST', {
        sender: await this.acceptFriend(sender, friend),
        friend: await this.acceptFriend(friend, sender),
        dmChannel: await this.channels.createDM(senderId, friendId)
      } as Args.AcceptFriendRequest);
  }

  private validateCanAccept(sender: UserDocument, friend: UserDocument) {
    const maxLength = 100;    
    if (sender.friends.length >= maxLength)
      throw new TypeError('User has too much clout');
    if (sender.friendRequests.length >= maxLength)
      throw new TypeError('User has too many pending friend requests');
    if (friend.friends.length >= maxLength)
      throw new TypeError('You have too much clout');
    if (friend.friendRequests.length >= maxLength)
      throw new TypeError('You have too many pending friend requests');
  }

  async acceptFriend(user: UserDocument, friend: UserDocument) {
    const friendExists = user.friends.includes(friend);
    if (friendExists)
      return user;

    await user.update({
      $pull: { friendRequests: friend },
      $push: { friends: friend }
    }, { runValidators: true });
    return user;
  }
}