import { Socket } from 'socket.io';
import { ChannelDocument } from '../../../data/models/channel';
import { GuildDocument } from '../../../data/models/guild';
import { GuildMemberDocument } from '../../../data/models/guild-member';
import { InviteDocument } from '../../../data/models/invite';
import { WebSocket } from '../websocket';

// TODO: make non-default
export default interface WSEvent {
  on: string;

  invoke: (ws: WebSocket, client: Socket, data: any) => any;
}

export namespace Params {
  export interface AcceptFriendRequest {
    friendId: string;
    senderId: string;
  }
  export interface CancelFriendRequest extends AcceptFriendRequest {}
  export interface ChannelCreate {
    guildId: string;
    partialChannel: any;
  }
  export interface GuildDelete {
    guildId: string;
  }
  export interface GuildMemberAdd {
    inviteCode: string;
    userId: string;
  }
  export interface GuildMemberUpdate {
    member: any;
  }
  export interface GuildRoleCreate {
    partialRole: any;
  }
  export interface GuildRoleDelete {
    roleId: string;
    guildId: string;
  }
  export interface GuildRoleUpdate {
    role: any;
  }
  export interface GuildUpdate {
    guild: any;
  }
  export interface InviteCreate {
    guildId: string;
    options?: any; /* TODO: InviteOptions */
    userId: string;
  }
  export interface MessageCreate {
    partialMessage: any;
  }
  export interface MessageDelete {
    channelId: string;
    messageId: string;
  }
  export interface MessageUpdate {
    messageId: string;
    withEmbed: boolean;
  }
  export interface MessageCreate {
    partialMessage: any;
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
    partialUser: any;
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
    member: any;
  }
  export interface GuildRoleCreate {
    role: any;
  }
  export interface GuildRoleDelete {
    roleId: string;
  }
  export interface GuildRoleUpdate {
    role: any;
  }
  export interface GuildUpdate {
    guild: any;
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
    message: any;
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
    user: any;
  }
  export interface VoiceStateUpdate {}
  export interface VoiceServerUpdate {}
}
