import { Document, model, Schema } from 'mongoose';

export enum ChannelType {
  Text = 'TEXT'
}

export interface ChannelDocument extends Document {
  id: string;
  createdAt: Date;
  name: string;
  type: ChannelType;
  summary: string;
}

export const Channel = model<ChannelDocument>('channel', new Schema({
  _id: String,
  createdAt: { type: Date, default: new Date() },
  name: String,
  type: String,
  summary: String
}));