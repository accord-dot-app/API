import { Document, model, Schema } from 'mongoose';
import { Lean } from '../types/entity-types';

export interface MessageDocument extends Document, Lean.Message {
  _id: string;
}

export const Message = model<MessageDocument>('message', new Schema({
  _id: String,
  authorId: String, // author -> authorId
  channelId: String, // channel -> channelId
  content: {
    type: String,
    minlength: [1, 'Content Too Short'],
    maxlength: [3000, 'Content Too Long'],
  },
  createdAt: { type: Date, default: new Date() },
  embed: Object,
  updatedAt: Date
}).index({ channel: 1, createdAt: 1 }));
