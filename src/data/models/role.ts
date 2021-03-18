import { Document, model, Schema } from 'mongoose';
import { createdAtToDate } from '../../utils/utils';
import { generateSnowflake } from '../snowflake-entity';
import { Lean, patterns, PermissionTypes } from '../types/entity-types';

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
  _id: {
    type: String,
    default: generateSnowflake(),
  },
  color: {
    type: String,
    validate: {
      validator: function() {
        const role = this as any as RoleDocument;
        return role.name !== '@everyone';
      },
      message: 'Cannot change @everyone role color',
    }
  },
  createdAt: {
    type: Date,
    get: createdAtToDate,
  },
  guildId: {
    type: String,
    required: [true, 'Owner ID is required'],
    validate: [patterns.snowflake, 'Invalid Snowflake ID'],
  },
  hoisted: Boolean,
  mentionable: Boolean,
  name: {
    type: String,
    required: [true, 'Name is required'],
    maxlength: [32, 'Name too long'],
  },
  position: {
    type: Number,
    required: [true, 'Position is required'],
    min: [0, 'Position must be greater than 0'],
  },
  permissions: {
    type: Number,
    default: defaultPermissions,
    required: [true, 'Permissions is required'],
    validate: {
      validator: (val: number) => val === 0
        || val === 1
        || Boolean(parseInt(val.toString(), 2) - 1),
      message: 'Invalid permissions integer',
    },
  }
}));
