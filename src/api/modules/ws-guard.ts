import { Guild } from '../../data/models/guild';
import { GuildMember } from '../../data/models/guild-member';
import jwt from 'jsonwebtoken';
import Deps from '../../utils/deps';
import { WebSocket } from '../websocket/websocket';
import { Socket } from 'socket.io';
import Channels from '../../data/channels';
import Roles from '../../data/roles';
import { Lean, PermissionTypes } from '../../data/types/entity-types';

export class WSGuard {
  constructor(
    private channels = Deps.get<Channels>(Channels),
    private roles = Deps.get<Roles>(Roles),
    private ws = Deps.get<WebSocket>(WebSocket),
  ) {}

  private userId(client: Socket) {
    return this.ws.sessions.get(client.id) ?? '';
  }

  public validateIsUser(client: Socket, userId: string) {    
    if (this.userId(client) !== userId)
      throw new TypeError('Unauthorized');
  }

  public async validateIsOwner(client: Socket, guildId: string) {    
    const isOwner = await Guild.exists({
      _id: guildId,
      ownerId: this.userId(client)
    });    
    if (!isOwner)
      throw new TypeError('Only Guild Owner Can Do This');
  }

  public async canAccessChannel(client: Socket, channelId?: string) {
    const channel = await this.channels.get(channelId);
    await this.canAccess(channel, client);
  }  
  private async canAccess(channel: Lean.Channel, client: Socket) {    
    const userId = this.userId(client);
    if (channel.type === 'TEXT') {
      await this.can(client, channel.guildId, PermissionTypes.Text.SEND_MESSAGES);
      return;
    } else if (channel.type === 'VOICE') {
      await this.can(client, channel.guildId, PermissionTypes.Voice.CONNECT);
      return;
    }    
    const inGroup = channel.memberIds?.includes(userId);
    if (!inGroup)
      throw new TypeError('Not DM Member');
  }

  public async can(client: Socket, guildId: string | undefined, permission: PermissionTypes.Permission) {
    const userId = this.userId(client);    
    const member = await GuildMember.findOne({ guildId, userId });
    if (!member)
      throw new TypeError('Member Not Found');
  
    const guild = await Guild.findById(guildId);
    if (!guild)
      throw new TypeError('Guild Not Found');
      
    const can = await this.roles.hasPermission(member, permission)
      || guild.ownerId === userId;    
    if (!can)
      throw new TypeError('Missing Permissions');
  }  

  public decodeKey(key: string): { id?: string } {
    const token: any = jwt.decode(key);
    return { id: token?._id };
  }
}
