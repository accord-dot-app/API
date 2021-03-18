import { Document, model, Schema } from 'mongoose';
import { generateSnowflake } from '../snowflake-entity';
import { Lean, patterns } from '../types/entity-types';

export interface MessageDocument extends Document, Lean.Message {
  _id: string;
}

export const Message = model<MessageDocument>('message', new Schema({
  _id: {
    type: String,
    default: generateSnowflake(),
  },
  authorId: {
    type: String,
    required: [true, 'Author ID is required'],
    validate: [patterns.snowflake, 'Invalid Snowflake ID'],
  },
  channelId: {
    type: String,
    required: [true, 'Channel ID is required'],
    validate: [patterns.snowflake, 'Invalid Snowflake ID'],    
  },
  content: {
    type: String,
    minlength: [1, 'Content too short'],
    maxlength: [3000, 'Content too long'],
  },
  createdAt: {
    type: Date,
    default: new Date(),
    required: [true, 'Created At is required'],
  },
  embed: Object, // TODO: make schema
  updatedAt: Date,
}));
