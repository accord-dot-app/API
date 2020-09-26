import { Document, model, PassportLocalDocument, Schema } from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

export interface UserDocument extends Document {
  id: string;
  username: string;
  createdAt: Date;
  avatarURL: string;
  status: StatusType;
  friends: string[];
}

export enum StatusType {
  Online = 'ONLINE',
  DND = 'DND',
  Idle = 'IDLE',
  Offline = 'OFFLINE'
}

export const User = model<UserDocument>('user', new Schema({
  _id: String,
  name: String,
  username: String,
  createdAt: Date,
  iconURL: String,
  friends: [{ type: String, ref: 'user' }]
}).plugin(passportLocalMongoose));