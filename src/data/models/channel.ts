import { Document, model, Schema } from 'mongoose';
import { GuildMemberDocument } from './guild-member';

export enum ChannelType {
  DM = 'DM',
  Text = 'TEXT',
  Voice = 'VOICE'
}

export interface ChannelDocument extends Document {
  id: string;
  createdAt: Date;
  name: string;
  memberIds?: string[];
  type: ChannelType;
  summary?: string;
}

export const Channel = model<ChannelDocument>('channel', new Schema({
  _id: String,
  createdAt: { type: Date, default: new Date() },
  name: String,
  memberIds: { type: Array, default: [] },
  type: String,
  summary: String
}));