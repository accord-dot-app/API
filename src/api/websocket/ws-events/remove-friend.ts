import { Socket } from 'socket.io';
import { UserDocument } from '../../../data/models/user';
import { Params } from '../../../data/types/ws-types';
import Users from '../../../data/users';
import Deps from '../../../utils/deps';
import { WebSocket } from '../websocket';
import { WSEvent, Args } from './ws-event';

export default class implements WSEvent<'REMOVE_FRIEND'> {
  on = 'REMOVE_FRIEND' as const;

  constructor(
    private users = Deps.get<Users>(Users),
  ) {}

  public async invoke(ws: WebSocket, client: Socket, { friendId }: Params.RemoveFriend) {
    const senderId = ws.sessions.userId(client);
    const sender = await this.users.get(senderId);
    const friend = await this.users.get(friendId);

    ws.io
      .to(senderId)
      .to(friendId)
      .emit('REMOVE_FRIEND', await this.handle(sender, friend) as Args.RemoveFriend);
  }

  private async handle(sender: UserDocument, friend: UserDocument): Promise<Args.RemoveFriend> {
    if (sender._id === friend._id)
      throw new TypeError('You cannot remove yourself as a friend');
    
    await this.removeFriend(sender, friend);
    await this.removeFriend(friend, sender);

    return { sender, friend };
  }

  private async removeFriend(sender: UserDocument, friend: UserDocument) {
    return sender.updateOne({
        $pull: {
          friendRequestIds: friend._id,
          friends: friend._id,
        },
      },
      { runValidators: true, context: 'query' },
    );
  }
}
