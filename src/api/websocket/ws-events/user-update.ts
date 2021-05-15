import { Socket } from 'socket.io';
import { User } from '../../../data/models/user';
import { Prohibited } from '../../../data/types/ws-types';
import Users from '../../../data/users';
import Deps from '../../../utils/deps';
import { WSGuard } from '../../modules/ws-guard';
import { WebSocket } from '../websocket';
import { WSEvent, Args, Params } from './ws-event';

export default class implements WSEvent<'USER_UPDATE'> {
  on = 'USER_UPDATE' as const;

  constructor(
    private users = Deps.get<Users>(Users),
    private guard = Deps.get<WSGuard>(WSGuard),
  ) {}

  public async invoke(ws: WebSocket, client: Socket, { key, partialUser }: Params.UserUpdate) {
    const { id: userId } = await this.guard.decodeKey(key);
    console.log(userId);
    
    const user = await this.users.get(userId);

    this.guard.validateKeys('user', partialUser);

    await user.updateOne(
      partialUser,
      { runValidators: true, context: 'query' },
    );

    client.emit('USER_UPDATE', { partialUser } as Args.UserUpdate);
  }
}
