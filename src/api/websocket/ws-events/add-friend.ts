import { Socket } from 'socket.io';
import Channels from '../../../data/channels';
import { SelfUserDocument, UserDocument } from '../../../data/models/user';
import Users from '../../../data/users';
import Deps from '../../../utils/deps';
import { WebSocket } from '../websocket';
import { WSEvent, Args, Params } from './ws-event';

export default class implements WSEvent<'ADD_FRIEND'> {
  on = 'ADD_FRIEND' as const;

  constructor(
    private channels = Deps.get<Channels>(Channels),
    private users = Deps.get<Users>(Users),
  ) {}

  public async invoke(ws: WebSocket, client: Socket, { username }: Params.AddFriend) {
    const senderId = ws.sessions.userId(client);
    const sender = await this.users.getSelf(senderId);
    const friend = await this.users.getByUsername(username);

    const isBlocking = friend.ignored.userIds.includes(sender._id);
    if (isBlocking)
      throw new TypeError('This user is blocking you');

    ws.io
      .to(senderId)
      .to(friend._id)
      .emit('ADD_FRIEND', await this.handle(sender, friend) as Args.AddFriend);
  }

  private async handle(sender: SelfUserDocument, friend: SelfUserDocument): Promise<Args.AddFriend> {
    if (sender._id === friend._id)
      throw new TypeError('You cannot add yourself as a friend');
      
    const hasSentRequest = sender.friendRequestIds.includes(friend._id);
    if (!hasSentRequest) return {
      friend,//: await this.sendRequest(friend, sender),
      sender: await this.sendRequest(sender, friend),
    }

    const friendReturnedRequest = friend.friendRequestIds.includes(sender._id);
    if (friendReturnedRequest) return {
      friend: await this.acceptRequest(friend, sender),
      sender: await this.acceptRequest(sender, friend),
      dmChannel: await this.channels.getDMByMembers(sender._id, friend._id)
        ?? await this.channels.createDM(sender._id, friend._id),
    }
    return { sender, friend };
  }

  private async sendRequest(sender: SelfUserDocument, friend: UserDocument) {
    return await sender.updateOne(
      { $push: { friendRequestIds: friend._id } },
      { runValidators: true, context: 'query' },
    );
  }

  private async acceptRequest(sender: UserDocument, friend: UserDocument) {
    const friendExists = sender.friendIds.includes(friend._id);
    return (!friendExists)
      ? sender.update({
          $pull: { friendRequestIds: friend._id },
          $push: { friendIds: friend._id },
        }, { runValidators: true, context: 'query' })
      : sender;
  }
}
