import { Socket } from 'socket.io';
import { Channel } from '../../../data/models/channel';
import { Guild } from '../../../data/models/guild';
import { GuildMember } from '../../../data/models/guild-member';
import { Invite } from '../../../data/models/invite';
import { Message } from '../../../data/models/message';
import { Role } from '../../../data/models/role';
import { User } from '../../../data/models/user';
import Deps from '../../../utils/deps';
import { WSGuard } from '../../modules/ws-guard';
import { WebSocket } from '../websocket';
import { WSEvent, Params } from './ws-event';

export default class implements WSEvent<'GUILD_DELETE'> {
  on = 'GUILD_DELETE' as const;

  constructor(
    private guard = Deps.get<WSGuard>(WSGuard),
  ) {}

  public async invoke(ws: WebSocket, client: Socket, { guildId }: Params.GuildDelete) {
    await this.guard.validateIsOwner(client, guildId);
    
    await User.updateMany(
      { guilds: guildId },
      { $pull: { guilds: guildId } },
    );
      
    await Guild.deleteOne({ _id: guildId });
    await Channel.deleteMany({ guildId });
    await GuildMember.deleteMany({ guildId });
    await Invite.deleteMany({ guildId });
    await Role.deleteMany({ guildId });
    // TODO: delete guild messages

    ws.io
      .to(guildId)
      .emit('GUILD_DELETE');
  }
}
