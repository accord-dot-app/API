import { Document, model, Schema } from 'mongoose';
import { validators } from '../../utils/utils';
import { Lean, patterns } from '../types/entity-types';

export interface GuildDocument extends Document, Lean.Guild {
  _id: string;
}

export const Guild = model<GuildDocument>('guild', new Schema({
  _id: String,
  name: {
    type: String,
    required: [true, 'Name is required'],
    maxlength: [32, 'Name is too long'],
  },
  createdAt: {
    type: Date,
    required: true,
    default: new Date(),
  },
  nameAcronym: String,
  iconURL: String,
  ownerId: {
    type: String,
    required: true,
    validate: [patterns.snowflake, 'Invalid Snowflake ID'],
  },
  channels: {
    type: [String],
    ref: 'channel',
    validate: {
      validator: validators.maxLength(250),
      message: 'Channel limit reached',
    },
  },
  members: {
    type: [String],
    ref: 'guildMember',
  },
  roles: {
    type: [String],
    ref: 'role',
    validate: {
      validator: validators.minLength(1),
      message: 'Guild must have at least one role'
    },
  },
}));
