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
  avatarURL: string;
  badges: BadgeType[];
  bot: boolean;
  createdAt: Date;
  friends: string[];
  friendRequests: FriendRequest[];
  status: StatusType;
  username: string;
  voice: UserVoiceState;
}

export const User = model<UserDocument>('user', new Schema({
  _id: String,
  avatarURL: String,
  badges: { type: Array, default: [] },
  bot: Boolean,
  createdAt: Date,
  friends: [{ type: String, ref: 'user' }],
  friendRequests: { type: Array, default: [] },
  status: String,
  username: String,
  voice: { type: Object, default: new UserVoiceState() }
}).plugin(passportLocalMongoose));
