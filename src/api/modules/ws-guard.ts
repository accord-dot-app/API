import { Guild, GuildDocument } from '../../data/models/guild';
import { GuildMember, GuildMemberDocument } from '../../data/models/guild-member';
import jwt from 'jsonwebtoken';
import Deps from '../../utils/deps';
import { WebSocket } from '../websocket/websocket';
import { Socket } from 'socket.io';
import Channels from '../../data/channels';
import { ChannelDocument } from '../../data/models/channel';
import Roles from '../../data/roles';
import { PermissionTypes } from '../../data/types/entity-types';
import { Role } from '../../data/models/role';

export class WSGuard {
  constructor(
    private channels = Deps.get<Channels>(Channels),
    private roles = Deps.get<Roles>(Roles),
    private ws = Deps.get<WebSocket>(WebSocket),
  ) {}

  private userId(client: Socket) {
    return this.ws.sessions.get(client.id);
  }

  public validateIsUser(client: Socket, userId: string) {
    if (this.userId(client) !== userId)
      throw new TypeError('Unauthorized');
  }

  public async validateIsOwner(client: Socket, guildId: string) {
    const member = await GuildMember.findOne({ guildId, ownerId: this.userId(client) });
    if (!member)
      throw new TypeError('Only Guild Owner Can Do This');
  }

  public async canAccessChannel(client: Socket, channelId: string) {
    const channel = await this.channels.get(channelId);    
    const canAccess = await this.canAccess(channel, client);
    if (!canAccess)
      throw new TypeError('Missing Permissions');    
  }  
  private async canAccess(channel: ChannelDocument, client: Socket) {
    const userId = this.userId(client);
    if (channel.type === 'DM')
      return channel.recipientIds?.includes(userId);
    else if (channel.type === 'TEXT')
      return this.can(client, channel.guildId, PermissionTypes.Text.SEND_MESSAGES);
    return this.can(client, channel.guildId, PermissionTypes.Voice.CONNECT);
  }

  public async can(client: Socket, guildId: string, permission: PermissionTypes.Permission) {
    const userId = this.userId(client);
    const member = await GuildMember.findOne({ guildId, userId });
    if (!member)
      throw new TypeError('Member Not Found');
  
    const guild = await Guild.findById(guildId);
    const can = this.roles.hasPermission(member, permission)
      || guild.ownerId === userId;
    if (!can)
      throw new TypeError('Missing Permissions');
  }

  private async getHighestRole(member: GuildMemberDocument, guild: GuildDocument) {
    const roleId = member.roleIds[member.roleIds.length - 1];
    return await Role.findById(roleId);
  }
  

  public decodeKey(key: string) {
    const token: any = jwt.decode(key);
    return { id: token?._id as string };
  }
}