import { Document, model, Schema } from 'mongoose';
import { patterns } from '../../utils/utils';
import { Lean } from '../types/entity-types';

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
      validator: (val: string[]) => val.length <= 250,
      message: 'Channel limit reached'
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
      validator: (val: string[]) => val.length > 0,
      message: 'Guild must have at least one role'
    },
  },
}));
