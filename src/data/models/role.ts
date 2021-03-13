import { Document, model, Schema } from 'mongoose';
import { Lean, PermissionTypes } from '../types/entity-types';

export function hasPermission(current: PermissionTypes.Permission, required: PermissionTypes.Permission) {
  return Boolean(current & required)
    || Boolean(current & PermissionTypes.General.ADMINISTRATOR);
}

export const defaultPermissions =
  PermissionTypes.General.VIEW_CHANNELS
  | PermissionTypes.General.CREATE_INVITE
  | PermissionTypes.Text.SEND_MESSAGES
  | PermissionTypes.Text.READ_MESSAGE_HISTORY
  | PermissionTypes.Text.ADD_REACTIONS
  | PermissionTypes.Voice.CONNECT
  | PermissionTypes.Voice.SPEAK;

export interface RoleDocument extends Document, Lean.Role {
  _id: string;
}

export const Role = model<RoleDocument>('role', new Schema({
  _id: String,
  color: String,
  createdAt: Date,
  guildId: String,
  hoisted: Boolean,
  mentionable: Boolean,
  name: String,
  position: Number,
  permissions: Number,
}));
