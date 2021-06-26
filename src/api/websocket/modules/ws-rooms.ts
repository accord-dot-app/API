import { Socket } from 'socket.io';
import { SelfUserDocument } from '../../../data/models/user';
import { Lean } from '../../../data/types/entity-types';
import Deps from '../../../utils/deps';
import { WSGuard } from '../../modules/ws-guard';

export class WSRooms {
  constructor(
    private guard = Deps.get<WSGuard>(WSGuard),
  ) {}

  public async join(client: Socket, user: SelfUserDocument) {
    const alreadyJoinedRooms = client.rooms.size > 1;
    if (alreadyJoinedRooms) return;
    
    await this.joinGuildRooms(user, client);
  }

  public async joinGuildRooms(user: SelfUserDocument, client: Socket) {
    if (!user.guilds) return;

    const guildIds = user.guilds.map(g => g.id);
    await client.join(guildIds);

    const channelIds = await this.getChannelIds(client, user.guilds as any);
    await client.join(channelIds);        
  }

  private async getChannelIds(client: Socket, guilds: Lean.Guild[]) {
    const ids: string[] = [];
    const channelIds = guilds
      .flatMap(g => g.channels.map(c => c.id));    
    
    for (const id of channelIds)
      try {
        await this.guard.canAccessChannel(client, id);
        ids.push(id);
      } catch {}    
    return ids;
  }
}
