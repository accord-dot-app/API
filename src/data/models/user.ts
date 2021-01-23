import { Document, model, Schema } from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

export type StatusType = 'ONLINE' | 'DND' | 'IDLE' | 'OFFLINE';

export class UserVoiceState {
  channelId: string;
  guildId: string;
  selfMuted = false;
  connected = false;
}

export interface FriendRequest {
  userId: string,
  type: FriendRequestType
}

export type FriendRequestType = 'OUTGOING' | 'INCOMING';
export type BadgeType = 'VIEWER' | 'DEVELOPER';

export interface UserDocument extends Document {
  _id: string;
  badges: BadgeType[];
  bot: boolean;
  username: string;
  createdAt: Date;
  avatarURL: string;
  status: StatusType;
  friends: string[];
  friendRequests: FriendRequest[];
  voice: UserVoiceState;
}

export const User = model<UserDocument>('user', new Schema({
  _id: String,
  badges: { type: Array, default: [] },
  bot: Boolean,
  avatarURL: String,
  username: String,
  createdAt: Date,
  status: String,
  friends: [{ type: String, ref: 'user' }],
  friendRequests: { type: Array, default: [] },
  voice: { type: Object, default: new UserVoiceState() }
}).plugin(passportLocalMongoose));
