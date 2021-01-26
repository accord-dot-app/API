import { Guild, GuildDocument } from '../../data/models/guild';
import { GuildMember, GuildMemberDocument } from '../../data/models/guild-member';
import { Permission, TextChannelPermission } from '../../data/models/role';
import jwt from 'jsonwebtoken';
import Deps from '../../utils/deps';
import { WebSocket } from '../websocket/websocket';
import { Socket } from 'socket.io';
import Channels from '../../data/channels';

export class WSGuard {
  constructor(
    private channels = Deps.get<Channels>(Channels),
    private ws = Deps.get<WebSocket>(WebSocket)
  ) {}

  private userId(client: Socket) {
    return this.ws.sessions.get(client.id);
  }

  public validateIsUser(client: Socket, userId: string) {
    if (this.userId(client) !== userId)
      throw new TypeError('Unauthorized');
  }

  public async canAccessChannel(client: Socket, channelId: string) {
    const userId = this.userId(client);
    const channel = await this.channels.get(channelId);

    return channel.recipientIds?.includes(userId)
      ?? await this.can(userId, channel.guildId, TextChannelPermission.SEND_MESSAGES);
  }
  
  public async can(userId: string, guildId: string, permission: Permission) {
    const member = await GuildMember.findOne({ guildId, user: userId as any });
    if (!member) return;
  
    const guild = await Guild.findById(guildId);
    const highestRole = this.getHighestRole(member, guild);
  
    return highestRole?.permissions & permission
      || guild.owner as any === userId;
  }

  private getHighestRole(member: GuildMemberDocument, guild: GuildDocument) {
    const roleId = member.roleIds[member.roleIds.length - 1];
    return guild.roles.find(id => id as any === roleId);
  }
  

  public decodeKey(key: string) {
    const token: any = jwt.decode(key);
    return { id: token._id as string };
  }
}