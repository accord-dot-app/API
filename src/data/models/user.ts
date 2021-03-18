import { Document, model, Schema } from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';
import { validators } from '../../utils/utils';
import { Lean, patterns, UserTypes } from '../types/entity-types';
import uniqueValidator from 'mongoose-unique-validator';

export interface UserDocument extends Document, Lean.User {
  _id: string;
}

export const User = model<UserDocument>('user', new Schema({
  _id: String,
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
    required: [true, 'Created At is required'],
  },
  friendIds: {
    type: [String],
    ref: 'user',
    default: [],
    validate: {
      validator: validators.maxLength(100),
      message: 'Clout limit reached',
    },
  },
  friendRequestIds: {
    type: [String],
    default: [],
    validate: {
      validator: validators.maxLength(100),
      message: 'Clout limit reached',
    },
  },
  guilds: {
    type: [String],
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
  voice: { type: Object, default: new UserTypes.VoiceState() }
})
.plugin(passportLocalMongoose)
.plugin(uniqueValidator));
