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
  members: GuildMemberDocument[];
  type: ChannelType;
  summary: string;
}

export const Channel = model<ChannelDocument>('channel', new Schema({
  _id: String,
  createdAt: { type: Date, default: new Date() },
  name: String,
  members: { type: String, ref: 'guildMember' },
  type: String,
  summary: String
}));