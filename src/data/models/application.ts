import { Document, model, Schema } from 'mongoose';
import { generateSnowflake, snowflakeToDate } from '../snowflake-entity';
import faker from 'faker';
import { Lean, patterns } from '../types/entity-types';
import { createdAtToDate } from '../../utils/utils';

export interface ApplicationDocument extends Document, Lean.Application {
  _id: string;
}

export const Application = model<ApplicationDocument>('application', new Schema({
  _id: {
    type: String,
    default: generateSnowflake(),
  },
  createdAt: {
    type: Date,
    get: createdAtToDate,
  },
  description: {
    default: 'A new bot, that can do cool things.',
    type: String,
    required: true,
    maxlength: [1000, 'Description too long'],
  },
  name: {
    type: String,
    default: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    required: true,
    maxlength: 48,
  },
  owner: {
    type: String,
    ref: 'user',
    validate: [patterns.snowflake, 'Invalid Snowflake ID'],
  }
}));
