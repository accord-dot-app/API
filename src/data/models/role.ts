import { Document, model, Schema } from 'mongoose';

export enum GeneralPermission {
  VIEW_CHANNELS = 1024,
  MANAGE_NICKNAMES = 512,
  CHANGE_NICKNAME = 256,
  CREATE_INVITE = 128,
  KICK_MEMBERS = 64,
  BAN_MEMBERS = 32,
  MANAGE_CHANNELS = 16,
  MANAGE_ROLES = 8,
  MANAGE_GUILD = 4,
  VIEW_AUDIT_LOG = 2,
  ADMINISTRATOR = 1
}
export enum TextChannelPermission {
  ADD_REACTIONS = 2048 * 16,
  MENTION_EVERYONE = 2048 * 8,
  READ_MESSAGE_HISTORY = 2048 * 4,
  MANAGE_MESSAGES = 2048 * 2,
  SEND_MESSAGES = 2048
}
export enum VoiceChannelPermission {
  MOVE_MEMBERS = 32768 * 8,
  MUTE_MEMBERS = 32768 * 4,
  SPEAK = 32768 * 2,
  CONNECT = 32768
}

export function hasPermission(current: Permission, required: Permission) {
  return Boolean(current & required);
}

export type Permission = GeneralPermission | TextChannelPermission | VoiceChannelPermission;

export const defaultPermissions =
  GeneralPermission.VIEW_CHANNELS
  | GeneralPermission.CREATE_INVITE
  | TextChannelPermission.SEND_MESSAGES
  | TextChannelPermission.READ_MESSAGE_HISTORY
  | TextChannelPermission.ADD_REACTIONS
  | VoiceChannelPermission.CONNECT
  | VoiceChannelPermission.SPEAK;

export interface RoleDocument extends Document {
  _id: string;
  color: string;
  createdAt: Date;
  guildId: string;
  name: string;
  hoisted: boolean;
  position: number;
  mentionable: boolean;
  permissions: number;
}

export const Role = model<RoleDocument>('role', new Schema({
  _id: String,
  color: String,
  createdAt: Date,
  guildId: String,
  name: String,
  hoisted: Boolean,
  position: Number,
  mentionable: Boolean,
  permissions: Number
}));