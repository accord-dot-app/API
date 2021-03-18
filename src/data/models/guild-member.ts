import { Document, model, Schema, Types } from 'mongoose';
import { validators } from '../../utils/utils';
import { Lean, patterns } from '../types/entity-types';

export interface GuildMemberDocument extends Document, Lean.GuildMember {
  _id: Types.ObjectId;
}

export const GuildMember = model<GuildMemberDocument>('guildMember', new Schema({
  guildId: {
    type: String,
    required: [true, 'Guild ID is required'],
    validate: [patterns.snowflake, 'Invalid Snowflake ID'],
  },
  userId: {
    type: String,
    required: [true, 'User ID is required'],
    validate: [patterns.snowflake, 'Invalid Snowflake ID'],
  },
  roleIds: {
    type: [String],
    default: [],
    required: [true, 'Role IDs is required'],
    validate: {
      validator: validators.minLength(1),
      message: 'At least 1 role is required',
    }
  }
}));
