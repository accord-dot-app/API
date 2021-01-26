import { Document, model, Schema } from 'mongoose';

export type ChannelType = 'DM' | 'TEXT' | 'VOICE';

export interface ChannelDocument extends Document {
  createdAt: Date;
  guildId?: string;
  memberIds?: string[];
  name?: string;
  recipientIds?: string[];
  summary?: string;
  type: ChannelType;
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
