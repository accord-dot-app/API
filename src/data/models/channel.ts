import { Document, model, Schema } from 'mongoose';
import { patterns } from '../../utils/utils';
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
  createdAt: {
    type: Date,
    default: new Date(),
    required: [true, 'Created At is required']
  },
  guildId: {
    type: String,
    validate: [patterns.snowflake, 'Invalid Snowflake ID'],
  },
  memberIds: {
    type: [String],
    default: [],
    validate: {
      validator: (val: string[]) => val.length <= 50,
      message: 'Channel member limit reached',
    }
  },
  name: {
    type: String,
    required: [true, 'Name is required'],
    maxlength: [32, 'Name too long'],
    validate: {
      validator: function(val: string) {
        const type = (this as any).type;
        const pattern = /^[A-Za-z\-\d]+$/;
        return (type === 'TEXT' && pattern.test(val)
          || type !== 'TEXT');
      },
      message: 'Invalid name'
    }
  },
  summary: {
    type: String,
    maxlength: [128, 'Summary too long'],
  },
  type: {
    type: String,
    required: [true, 'Type is required'],
    validate: [/^TEXT$|^VOICE$|^DM$/, 'Invalid type'],
  }
}));
