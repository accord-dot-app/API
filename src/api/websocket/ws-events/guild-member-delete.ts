import { Socket } from 'socket.io';
import Guilds from '../../../data/guilds';
import { GuildDocument } from '../../../data/models/guild';
import { GuildMember } from '../../../data/models/guild-member';
import { User } from '../../../data/models/user';
import Deps from '../../../utils/deps';
import { WebSocket } from '../websocket';
import { WSEvent, Args, Params } from './ws-event';

export default class implements WSEvent<'GUILD_MEMBER_REMOVE'> {
  on = 'GUILD_MEMBER_REMOVE' as const;

  constructor(
    private guilds = Deps.get<Guilds>(Guilds),
  ) {}

  public async invoke(ws: WebSocket, client: Socket, { guildId, userId }: Params.GuildMemberRemove) {
    const guild = await this.guilds.get(guildId, true);
    const member = guild.members.find(m => m.userId === userId);
    if (!member)
      throw new TypeError('Member does not exist');
    
    await GuildMember.deleteOne({ userId });
    await User.updateOne(
      { _id: userId },
      { guilds: { $pull: guildId } as any },
      { runValidators: true },
    );
    await this.leaveGuildRooms(client, guild);

    ws.io
      .to(guildId)
      .emit('GUILD_MEMBER_REMOVE', { guildId, memberId: member._id } as Args.GuildMemberRemove);
    ws.io
      .to(client.id)
      .emit('GUILD_LEAVE', { guildId } as Args.GuildLeave);
  }

  private async leaveGuildRooms(client: Socket, guild: GuildDocument) {
    await client.leave(guild.id);
    for (const channel of guild.channels)
      await client.leave(channel._id);
  }
}
