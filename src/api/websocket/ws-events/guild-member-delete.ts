import { Socket } from 'socket.io';
import Guilds from '../../../data/guilds';
import Invites from '../../../data/invites';
import { GuildDocument } from '../../../data/models/guild';
import { GuildMember } from '../../../data/models/guild-member';
import { User } from '../../../data/models/user';
import Users from '../../../data/users';
import Deps from '../../../utils/deps';
import { WebSocket } from '../websocket';
import { WSEvent, Args, Params, WSEventParams } from './ws-event';

export default class implements WSEvent<'GUILD_MEMBER_DELETE'> {
  on = 'GUILD_MEMBER_DELETE' as const;

  constructor(
    private guilds = Deps.get<Guilds>(Guilds),
  ) {}

  async invoke(ws: WebSocket, client: Socket, { guildId, userId }: Params.GuildMemberDelete) {
    const guild = await this.guilds.get(guildId);
    const memberExists = guild.members.some(m => m.userId === userId);
    if (memberExists)
      throw new TypeError('Member does not exist');
    
    await GuildMember.deleteOne({ userId });
    await User.updateOne(
      { _id: userId },
      { guilds: { $pull: guildId } as any },
      { runValidators: true },
    );
    this.leaveGuildRooms(client, guild);

    ws.io
      .to(guildId)
      .emit('GUILD_MEMBER_REMOVE', { userId } as Args.GuildMemberDelete);
    ws.io
      .to(client.id)
      .emit('GUILD_LEAVE', { guildId } as Args.GuildLeave);
  }

  leaveGuildRooms(client: Socket, guild: GuildDocument) {
    client.leave(guild.id);
    for (const channel of guild.channels)
      client.leave(channel._id);
  }
}
