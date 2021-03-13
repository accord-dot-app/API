import { Document, model, Schema } from 'mongoose';
import { Lean } from '../types/entity-types';

export interface MessageDocument extends Document, Lean.Message {
  _id: string;
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
