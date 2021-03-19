import { Document, model, Schema } from 'mongoose';
import { generateSnowflake } from '../snowflake-entity';
import faker from 'faker';
import { Lean, patterns } from '../types/entity-types';
import { createdAtToDate } from '../../utils/utils';

export interface ApplicationDocument extends Document, Lean.Application {
  _id: string;
  createdAt: never;
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
    required: [true, 'Description is required'],
    maxlength: [1000, 'Description too long'],
  },
  name: {
    type: String,
    default: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    required: [true, 'Name is required'],
    maxlength: [32, 'Name is too long'],
  },
  owner: {
    type: String,
    ref: 'user',
    required: [true, 'Owner is required'],
    validate: [patterns.snowflake, 'Invalid Snowflake ID'],
  }
}));
