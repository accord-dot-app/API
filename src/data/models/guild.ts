import { Document, model, Schema } from 'mongoose';

export interface Channel {
  id: string;
  name: string;
  summary: string;
  type: ChannelType;
}

export enum ChannelType {
  Text = 'TEXT'
}

export interface GuildDocument extends Document {
  id: string;
  name: string;
  createdAt: Date;
  iconURL: string;
  channels: Channel[];
}

export const Guild = model<GuildDocument>('guild', new Schema({
  _id: String,
  name: String,
  createdAt: Date,
  iconURL: String,
  channel: { type: Array, defualt: [] }
}));