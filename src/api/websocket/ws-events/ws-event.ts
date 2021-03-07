import { Socket } from 'socket.io';
import { WebSocket } from '../websocket';

// TODO: make non-default
export default interface WSEvent {
  on: string;

  invoke: (ws: WebSocket, client: Socket, data: any) => any;
}

// REMEMBER: Sync types below with Website project.
// -> in ws.service.ts
export namespace Params {
  export interface AcceptFriendRequest {
    friendId: string;
    senderId: string;
  }
  export interface CancelFriendRequest extends AcceptFriendRequest {}
  export interface ChannelCreate {
    guildId: string;
    partialChannel: Types.PartialChannel;
  }
  export interface GuildDelete {
    guildId: string;
  }
  export interface GuildMemberAdd {
    inviteCode: string;
    userId: string;
  }
  export interface GuildMemberUpdate {
    guildId: string;
    partialMember: Types.PartialMember;
    userId: string;
  }
  export interface GuildRoleCreate {
    guildId: string;
    partialRole: Types.PartialRole;
  }
  export interface GuildRoleDelete {
    roleId: string;
    guildId: string;
  }
  export interface GuildRoleUpdate {
    roleId: string;
    guildId: string;
    partialRole: Types.PartialRole;
  }
  export interface GuildUpdate {
    guildId: string;
    partialGuild: Types.PartialGuild;
  }
  export interface InviteCreate {
    guildId: string;
    options?: any; /* TODO: InviteOptions */
    userId: string;
  }
  export interface MessageCreate {
    partialMessage: Types.PartialMessage;
  }
  export interface MessageDelete {
    channelId: string;
    messageId: string;
  }
  export interface MessageUpdate {
    messageId: string;
    partialMessage: Types.PartialMessage;
    withEmbed: boolean;
  }
  export interface MessageCreate {
    partialMessage: Types.PartialMessage;
  }
  export interface Ready {
    key: string;
    guildIds: string[];
    channelIds: string[];
  }
  export interface RemoveFriend {
    friendId: string;
    senderId: string;
  }
  export interface SendFriendRequest {
    friendUsername: string;
    senderId: string;
  }
  export interface TypingStart {
    channelId: string;
    userId: string;
  }
  export interface UserUpdate {
    partialUser: Types.PartialUser;
    userId: string;
  }
  export interface VoiceStateUpdate {
    userId: string;
    voice: any;
  }
  export interface VoiceServerUpdate {
    guildId: string;
    userId: string;
  }
}

export namespace Args {
  export interface AcceptFriendRequest extends CancelFriendRequest {
    dmChannel: any;
  }
  export interface CancelFriendRequest {
    friend: any;
    sender: any;
  }
  export interface ChannelCreate {
    channel: any
  }
  export interface GuildJoin {
    guild: any;
  }
  export interface GuildDelete {}
  export interface GuildMemberAdd {
    member: any;
  }
  export interface GuildMemberUpdate {
    partialMember: any;
    userId: string;
  }
  export interface GuildRoleCreate {
    role: any;
  }
  export interface GuildRoleDelete {
    roleId: string;
  }
  export interface GuildRoleUpdate {
    roleId: string;
    partialRole: any;
  }
  export interface GuildUpdate {
    guildId: any;
    partialGuild: Types.PartialGuild;
  }
  export interface InviteCreate {
    invite: any;
  }
  export interface MessageCreate {
    message: any;
  }
  export interface MessageDelete {
    messageId: string;
  }
  export interface MessageUpdate {
    messageId: string;
    partialMessage: any;
  }
  export interface PresenceUpdate {
    userId: string;
    status: string;
  }
  export interface RemoveFriend extends CancelFriendRequest {}
  export interface SendFriendRequest extends CancelFriendRequest {
    friend: any;
    sender: any;
  }
  export interface TypingStart {
    userId: string;
  }
  export interface UserUpdate {
    partialUser: any;
  }
  export interface VoiceStateUpdate {
    userId: string;
    voice: any;
    memberIds: string[];
  }
  export interface VoiceServerUpdate {}
}

export namespace Types {
  export interface PartialChannel {
    name: string;
    type: any;
  }
  export interface PartialGuild {
    name: string;
  }
  export interface PartialMember {
    
  }
  export interface PartialMessage {
    authorId: string;
    channelId: string;
    content: string;
    guildId?: string;
  }
  export interface PartialRole {
    name: string;
    color: string;
    hoisted: boolean;
    mentionable: boolean;
    permissions: number;
    position: number;
  }
  export interface PartialUser {
    avatarURL: string;
    username: string;
  }
}
