import { Document, model, Schema } from 'mongoose';

export enum ChannelType {
  DM = 'DM',
  Text = 'TEXT',
  Voice = 'VOICE'
}

export interface ChannelDocument extends Document {
  createdAt: Date;
  name?: string;
  type: ChannelType;
  guildId?: string;
  summary?: string;
  recipientIds?: string[];
  sender?: string;
  memberIds?: string[];
}

export const Channel = model<ChannelDocument>('channel', new Schema({
  _id: String,
  createdAt: { type: Date, default: new Date() },
  name: String,
  guildId: String,
  memberIds: { type: Array, default: [] },
  recipientIds: { type: Array, default: [] },
  type: String,
  summary: String
}));