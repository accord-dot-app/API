import { Document, model, Schema } from 'mongoose';
import { ChannelDocument } from './channel';
import { GuildDocument } from './guild';
import { UserDocument } from './user';

export interface MessageEmbed {
  description: string;
  image: string;
  title: string;
  url: string;
}

export interface MessageDocument extends Document {
  _id: string;
  author: UserDocument;
  channel: ChannelDocument;
  content: string;
  createdAt: Date;
  embed: MessageEmbed;
  guild?: GuildDocument;
  updatedAt: Date;
}

export const Message = model<MessageDocument>('message', new Schema({
  _id: String,
  author: { type: String, ref: 'user' },
  channel: { type: String, ref: 'channel' },
  content: String,
  createdAt: { type: Date, default: new Date() },
  embed: Object,
  guild: { type: String, ref: 'guild' },
  updatedAt: Date
}));