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
  authorId: string;
  channelId: string;
  content: string;
  createdAt: Date;
  embed: MessageEmbed;
  guildId: string;
  updatedAt: Date;
}

export const Message = model<MessageDocument>('message', new Schema({
  _id: String,
  authorId: String, // author -> authorId
  channelId: String, // channel -> channelId
  content: String,
  createdAt: { type: Date, default: new Date() },
  embed: Object,
  guild: { type: String, ref: 'guild' }, // guild -> guildId
  updatedAt: Date
}).index({ channel: 1, createdAt: 1 }));
