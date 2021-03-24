import { Document, model, Schema } from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';
import { createdAtToDate, validators } from '../../utils/utils';
import { Lean, patterns, UserTypes } from '../types/entity-types';
import uniqueValidator from 'mongoose-unique-validator';
import { generateSnowflake } from '../snowflake-entity';

export interface UserDocument extends Document, Lean.User {
  _id: string;
  createdAt: never;
}
export interface SelfUserDocument extends Document, UserTypes.Self {
  _id: string;
  createdAt: never;
}

export const User = model<UserDocument>('user', new Schema({
  _id: {
    type: String,
    default: generateSnowflake(),
  },
  avatarURL: {
    type: String,
    required: [true, 'Avatar URL is required'],
  },
  badges: {
    type: [String],
    default: [],
  },
  bot: Boolean,
  createdAt: {
    type: Date,
    get: createdAtToDate
  },
  friendIds: {
    type: Array,
    ref: 'user',
    default: [],
    validate: {
      validator: validators.maxLength(100),
      message: 'Clout limit reached',
    },
  },
  friendRequests: {
    type: Array,
    default: [],
    validate: {
      validator: validators.maxLength(100),
      message: 'Clout limit reached',
    },
  },
  guilds: {
    type: Array,
    ref: 'guild',
    validate: {
      validator: validators.maxLength(100),
      message: 'Guild limit reached',
    },
  },
  status: {
    type: String,
    required: [true, 'Status is required'],
    validate: [patterns.status, 'Invalid status'],
  },
  username: {
    type: String,
    required: [true, 'Username is required'],
    unique: [true, 'Username is taken'],
    validate: {
      validator: patterns.username,
      message: `Invalid username`,
    }
  },
  voice: {
    type: Object,
    required: [true, 'Voice State is required'],
    default: new UserTypes.VoiceState(),
  }
}, { toJSON: { getters: true } })
.plugin(passportLocalMongoose)
.plugin(uniqueValidator));
