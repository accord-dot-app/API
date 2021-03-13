import { Document, model, Schema } from 'mongoose';
import { Lean } from '../types/entity-types';

export interface ChannelDocument extends Document, Lean.Channel {
  _id: string;
}

export const Channel = model<ChannelDocument>('channel', new Schema({
  _id: String,
  createdAt: { type: Date, default: new Date() },
  guildId: String,
  memberIds: { type: Array, default: [] },
  name: String,
  recipientIds: { type: Array, default: [] },
  summary: String,
  type: String
}));
