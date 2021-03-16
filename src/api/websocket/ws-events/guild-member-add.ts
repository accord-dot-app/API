import { Socket } from 'socket.io';
import Guilds from '../../../data/guilds';
import Invites from '../../../data/invites';
import { GuildDocument } from '../../../data/models/guild';
import { GuildMember } from '../../../data/models/guild-member';
import { InviteDocument } from '../../../data/models/invite';
import { User } from '../../../data/models/user';
import Deps from '../../../utils/deps';
import { WSGuard } from '../../modules/ws-guard';
import { WebSocket } from '../websocket';
import WSEvent, { Args, Params, WSEventParams } from './ws-event';

export default class implements WSEvent {
  on: keyof WSEventParams = 'GUILD_MEMBER_ADD';

  constructor(
    private guard = Deps.get<WSGuard>(WSGuard),
    private guilds = Deps.get<Guilds>(Guilds),
    private invites = Deps.get<Invites>(Invites)) {}

  async invoke(ws: WebSocket, client: Socket, { inviteCode }: Params.GuildMemberAdd) {
    const invite = await this.invites.get(inviteCode);
    const guild = await this.guilds.get(invite.guildId);
    const userId = this.guard.userId(client);
    
    await this.handleInvite(invite);

    await User.updateOne(
      { _id: userId },
      { $push: { guilds: guild.id } as any }
    );
    const member = await GuildMember.create({
      userId,
      guildId: guild._id,
      roleIds: [guild.roles[0]._id]
    });
    guild.members.push(member);
    await guild.updateOne(guild, { runValidators: true });

    this.joinGuildRooms(client, guild);

    ws.io
      .to(guild._id)
      .emit('GUILD_MEMBER_ADD', { member } as Args.GuildMemberAdd);
    ws.io
      .to(client.id)
      .emit('GUILD_JOIN', { guild } as Args.GuildJoin);
  }

  private async handleInvite(invite: InviteDocument) {
    invite.uses++;

    (invite.options?.maxUses && invite.uses >= invite.options.maxUses)
      ? await invite.remove()
      : await invite.save();
  }

  public joinGuildRooms(client: Socket, guild: GuildDocument) {
    client.join(guild.id);
    for (const channel of guild.channels)
      client.join(channel._id);
  }
}
