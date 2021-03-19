import { Document, model, Schema } from 'mongoose';
import { createdAtToDate } from '../../utils/utils';
import { generateSnowflake } from '../snowflake-entity';
import { Lean, InviteTypes, patterns } from '../types/entity-types';

export interface InviteDocument extends Document, Lean.Invite {
  _id: string;
}

export const Invite = model<InviteDocument>('invite', new Schema({
  _id: {
    type: String,
    default: generateSnowflake(),
  },
  createdAt: {
    type: Date,
    get: createdAtToDate,
  },
  options: new Schema<InviteTypes.Options>({
    expiresAt: Date,
    maxUses: {
      type: Number,
      min: [1, 'Max uses too low'],
      max: [1000, 'Max uses too high'],
    },
  }),
  inviterId: {
    type: String,
    required: [true, 'Inviter ID is required'],
    validate: [patterns.snowflake, 'Invalid Snowflake ID'],
  },
  guildId: {
    type: String,
    required: [true, 'Guild ID is required'],
    validate: [patterns.snowflake, 'Invalid Snowflake ID'],
  },
  uses: Number,
}));
