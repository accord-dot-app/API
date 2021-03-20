import { Document, model, Schema } from 'mongoose';
import { createdAtToDate, validators } from '../../utils/utils';
import { generateSnowflake } from '../snowflake-entity';
import { Lean, patterns } from '../types/entity-types';

export interface GuildDocument extends Document, Lean.Guild {
  _id: string;
  createdAt: never;
}

export const Guild = model<GuildDocument>('guild', new Schema({
  _id: {
    type: String,
    default: generateSnowflake(),
  },
  name: {
    type: String,
    required: [true, 'Name is required'],
    maxlength: [32, 'Name is too long'],
  },
  createdAt: {
    type: Date,
    get: createdAtToDate,
  },
  nameAcronym: String,
  iconURL: String,
  ownerId: {
    type: String,
    required: true,
    validate: [patterns.snowflake, 'Invalid Snowflake ID'],
  },
  channels: {
    type: Array,
    ref: 'channel',
    validate: {
      validator: validators.maxLength(250),
      message: 'Channel limit reached',
    },
  },
  members: {
    type: Array,
    ref: 'guildMember',
  },
  roles: {
    type: Array,
    ref: 'role',
    validate: {
      validator: validators.minLength(1),
      message: 'Guild must have at least one role',
    },
  },
}));
