import { Socket } from 'socket.io';
import { SelfUserDocument, User } from '../../../data/models/user';
import { Lean } from '../../../data/types/entity-types';
import Users from '../../../data/users';
import { SystemBot } from '../../../system/bot';
import Deps from '../../../utils/deps';
import { WSGuard } from '../../modules/ws-guard';
import { WebSocket } from '../websocket';
import { WSEvent, Args, Params } from './ws-event';
 
export default class implements WSEvent<'READY'> {
  on = 'READY' as const;
  cooldown = 5;  

  constructor(
    private guard = Deps.get<WSGuard>(WSGuard),
    private systemBot = Deps.get<SystemBot>(SystemBot),
    private users = Deps.get<Users>(Users),
  ) {}

  async invoke(ws: WebSocket, client: Socket, { key }: Params.Ready) {   
    const { id: userId } = await this.guard.decodeKey(key);
    if (!userId)
      throw new TypeError('Invalid User ID');
 
    ws.sessions.set(client.id, userId);

    const user = await this.users.get(userId) as any as SelfUserDocument;    
    if (user.status === 'OFFLINE')
      await User.updateOne({ _id: userId }, { status: 'ONLINE' });
    await this.joinRooms(client, user);

    ws.io
      .to(client.id)
      .emit('READY');

    const knownUsers = this.getKnownUsers(user);
    for (const id of knownUsers) {      
      ws.io
        .to(id)
        .emit('PRESENCE_UPDATE', {
          userId,
          status: user.status
        } as Args.PresenceUpdate);
    }
  }

  private async joinRooms(client: Socket, user: SelfUserDocument) {
    const alreadyJoinedRooms = client.rooms.size > 1;
    if (alreadyJoinedRooms) return;

    await client.join(this.getKnownUsers(user));
    
    if (user.guilds) {
      const guildIds = user.guilds.map(g => g._id);      
      await client.join(await this.getChannels(client, user.guilds));
      await client.join(guildIds);
    }    
    const dms = await this.users.getDMChannels(user._id)               
    if (dms) {
      const ids = dms.map(c => c._id);           
      await client.join(ids);      
    }
  }

  private async getChannels(client: Socket, guilds: Lean.Guild[]) {
    const ids: string[] = [];
    const channelIds = guilds.flatMap(g => g.channels.map(c => c._id));

    for (const id of channelIds)
      try {
        await this.guard.canAccessChannel(client, id);
        ids.push(id);
      } catch {}
    return ids;
  }

  private getKnownUsers(user: Lean.User) {
    return [
      user._id,
      this.systemBot.self?._id,
      ...user.friendRequests.map(f => f.userId),
      ...user.friendIds,
    ];
  }
}
