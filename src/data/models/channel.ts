import { Document, model, Schema } from 'mongoose';
import { GuildMemberDocument } from './member';

export interface Channel {
  id: string;
  name: string;
  summary: string;
  type: ChannelType;
}

export enum ChannelType {
  Text = 'TEXT'
}

export interface ChannelDocument extends Document {
  id: string;
  channels: Channel[];
  createdAt: Date;
  members: GuildMemberDocument[];
  name: string;
}

export const Channel = model<ChannelDocument>('channel', new Schema({
  _id: String,
  channels: { type: Array, default: [] },
  createdAt: Date,
  members: { type: Array, default: [] },
  name: String
}));