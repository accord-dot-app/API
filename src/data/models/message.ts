import { Document, model, Schema } from 'mongoose';
import { ChannelDocument } from './channel';
import { UserDocument } from './user';

export interface MessageDocument extends Document {
  id: string;
  author: UserDocument;
  channel: ChannelDocument;
  createdAt: Date;
  updatedAt: Date;
  content: string;
}

export const Message = model<MessageDocument>('channel', new Schema({
  _id: String,
  author: { type: String, ref: 'user' },
  channel: { type: String, ref: 'channel' },
  createdAt: { type: Date, default: new Date() },
  updatedAt: Date,
  content: String
}));