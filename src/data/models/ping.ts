import { Document, model, Schema } from 'mongoose';
import { generateSnowflake } from '../snowflake-entity';
import { Lean } from '../types/entity-types';

export interface PingDocument extends Document, Lean.Ping {
  _id: string;
}

export const ChannelPings = model<PingDocument>('ping', new Schema({
  _id: {
    type: String,
    default: generateSnowflake,
  },
  pings: {
    type: [Object],
    default: [],
  },
}));
