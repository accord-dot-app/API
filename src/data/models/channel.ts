import { Document, model, Schema } from 'mongoose';
import { ChannelTypes } from '../types/entity-types';

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
  memberIds: {
    maxlength: 69,
    type: Array,
    default: [],
  },
  name: {
    type: String,
    minlength: 1,
    maxlength: 32,
  },
  summary: {
    type: String,
    maxlength: 128,
  },
  type: {
    type: String,
    validate: (val: string): val is ChannelTypes.Type => {
      return val === 'TEXT' || val === 'VOICE' || val === 'DM';
    }
  }
}));
