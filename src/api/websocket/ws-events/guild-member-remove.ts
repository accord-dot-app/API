import { Socket } from 'socket.io';
import Guilds from '../../../data/guilds';
import { GuildDocument } from '../../../data/models/guild';
import { GuildMember } from '../../../data/models/guild-member';
import { User } from '../../../data/models/user';
import Deps from '../../../utils/deps';
import { WSGuard } from '../../modules/ws-guard';
import { WebSocket } from '../websocket';
import { WSEvent, Args, Params } from './ws-event';

export default class implements WSEvent<'GUILD_MEMBER_REMOVE'> {
  on = 'GUILD_MEMBER_REMOVE' as const;

  constructor(
    private guilds = Deps.get<Guilds>(Guilds),
    private guard = Deps.get<WSGuard>(WSGuard),
  ) {}

  public async invoke(ws: WebSocket, client: Socket, { guildId, memberId }: Params.GuildMemberRemove) {
    const guild = await this.guilds.get(guildId, true);
    const member = guild.members.find(m => m._id === memberId);    
    if (!member)
      throw new TypeError('Member does not exist');

    const selfUserId = ws.sessions.get(client.id);
    if (guild.ownerId === member.userId)
      throw new TypeError('You cannot leave a guild you own');
      
    else if (selfUserId !== member.userId)
      await this.guard.validateCan(client, guildId, 'KICK_MEMBERS');
    
    await User.updateOne(
      { _id: member.userId },
      { $pull: { guilds: guildId } },
    );
    await GuildMember.deleteOne({ _id: memberId });

    await this.leaveGuildRooms(client, guild);

    ws.io
      .to(guildId)
      .emit('GUILD_MEMBER_REMOVE', { guildId, memberId: member._id } as Args.GuildMemberRemove);
    ws.io
      .to(member.userId)
      .emit('GUILD_LEAVE', { guildId } as Args.GuildLeave);
  }

  private async leaveGuildRooms(client: Socket, guild: GuildDocument) {
    await client.leave(guild.id);
    for (const channel of guild.channels)
      await client.leave(channel._id);
  }
}
