import { Socket } from 'socket.io';
import Guilds from '../../../data/guilds';
import Invites from '../../../data/invites';
import { GuildDocument } from '../../../data/models/guild';
import { GuildMember } from '../../../data/models/guild-member';
import { User } from '../../../data/models/user';
import Deps from '../../../utils/deps';
import { WebSocket } from '../websocket';
import WSEvent, { Args, Params, WSEventParams } from './ws-event';

export default class implements WSEvent {
  on: keyof WSEventParams = 'GUILD_MEMBER_ADD';

  constructor(
    private guilds = Deps.get<Guilds>(Guilds),
    private invites = Deps.get<Invites>(Invites)) {}

  async invoke(ws: WebSocket, client: Socket, { inviteCode, userId }: Params.GuildMemberAdd) {
    const invite = await this.invites.get(inviteCode);
    if (!invite) return;

    const guild = await this.guilds.get(invite.guildId);
    const memberExists = guild.members.some(m => m.userId === userId);
    if (memberExists) return;
    
    invite.uses++;

    (invite.options.maxUses && invite.uses >= invite.options.maxUses)
      ? await invite.remove()
      : await invite.save();

    await User.updateOne(
      { _id: userId },
      { guilds: { $push: guild } as any }
    );
    const member = await GuildMember.create({
      userId,
      guildId: guild._id,
      roleIds: [guild.roles[0]._id]
    });
    guild.members.push(member);
    await guild.save();

    this.joinGuildRooms(client, guild);

    ws.io
      .to(guild._id)
      .emit('GUILD_MEMBER_ADD', { member } as Args.GuildMemberAdd);
    ws.io
      .to(client.id)
      .emit('GUILD_JOIN', { guild } as Args.GuildJoin);
  }

  public joinGuildRooms(client: Socket, guild: GuildDocument) {
    client.join(guild.id);
    for (const channel of guild.channels)
      client.join(channel._id);
  }
}
