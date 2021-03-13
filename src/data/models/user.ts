import { Document, model, Schema } from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';
import { Lean, UserTypes } from '../types/entity-types';

export interface UserDocument extends Document, Lean.User {
  _id: string;
}

export const User = model<UserDocument>('user', new Schema({
  _id: String,
  avatarURL: String,
  badges: { type: Array, default: [] },
  bot: Boolean,
  createdAt: Date,
  friends: [{ type: String, ref: 'user' }],
  friendRequests: { type: Array, default: [] },
  guilds: [{ type: String, ref: 'guild' }],
  status: String,
  username: String,
  voice: { type: Object, default: new UserTypes.VoiceState() }
}).plugin(passportLocalMongoose));
