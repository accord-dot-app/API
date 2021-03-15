import { Document, model, Schema } from 'mongoose';
import { ChannelTypes, Lean } from '../types/entity-types';

export interface DMChannelDocument extends Document, ChannelTypes.DM {
  _id: string;
}
export interface TextChannelDocument extends Document, ChannelTypes.Text {
  _id: string;
}
export interface VoiceChannelDocument extends Document, ChannelTypes.Voice {
  _id: string;
}
export type ChannelDocument = DMChannelDocument | TextChannelDocument | VoiceChannelDocument;

export const Channel = model<ChannelDocument>('channel', new Schema({
  _id: String,
  createdAt: { type: Date, default: new Date() },
  guildId: String,
  memberIds: { type: Array, default: [] },
  name: String,
  summary: String,
  type: String
}));
