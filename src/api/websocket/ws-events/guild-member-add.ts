import { Socket } from 'socket.io';
import GuildMembers from '../../../data/guild-members';
import Guilds from '../../../data/guilds';
import Invites from '../../../data/invites';
import { GuildDocument } from '../../../data/models/guild';
import { InviteDocument } from '../../../data/models/invite';
import { User } from '../../../data/models/user';
import Deps from '../../../utils/deps';
import { WSGuard } from '../../modules/ws-guard';
import { WebSocket } from '../websocket';
import { WSEvent, Args, Params, WSEventParams } from './ws-event';

export default class implements WSEvent<'GUILD_MEMBER_ADD'> {
  on = 'GUILD_MEMBER_ADD' as const;

  constructor(
    private guard = Deps.get<WSGuard>(WSGuard),
    private guilds = Deps.get<Guilds>(Guilds),
    private invites = Deps.get<Invites>(Invites),
    private guildMembers = Deps.get<GuildMembers>(GuildMembers),
  ) {}

  async invoke(ws: WebSocket, client: Socket, { inviteCode }: Params.GuildMemberAdd) {
    const invite = await this.invites.get(inviteCode);
    const guild = await this.guilds.get(invite.guildId);
    const userId = ws.sessions.userId(client);
    
    await this.handleInvite(invite);

    await User.updateOne(
      { _id: userId },
      { $push: { guilds: guild.id } as any },
      { runValidators: true },
    );
    const member = await this.guildMembers.create(guild.id, userId);
    guild.members.push(member);
    await guild.update(guild, { runValidators: true });

    await this.joinGuildRooms(client, guild);

    ws.io
      .to(guild._id)
      .emit('GUILD_MEMBER_ADD', { member } as Args.GuildMemberAdd);
    ws.io
      .to(client.id)
      .emit('GUILD_JOIN', { guild } as Args.GuildJoin);
  }

  private async handleInvite(invite: InviteDocument) {
    const inviteExpired = Number(invite.options?.expiresAt?.getTime()) < new Date().getTime();
    if (inviteExpired)
      throw new TypeError('Invite Expired');
    
    invite.uses++;

    (invite.options?.maxUses && invite.uses >= invite.options.maxUses)
      ? await invite.deleteOne()
      : await invite.save();
  }

  public async joinGuildRooms(client: Socket, guild: GuildDocument) {
    await client.join(guild.id);
    for (const channel of guild.channels)
      await client.join(channel._id);
  }
}
