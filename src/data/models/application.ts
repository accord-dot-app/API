import { Document, model, Schema } from 'mongoose';
import { generateSnowflake } from '../snowflake-entity';
import faker from 'faker';
import { UserDocument } from './user';

export interface ApplicationDocument extends Document {
  _id: string;
  createdAt: Date;
  description: string;
  name: string;
  owner: UserDocument;
}

export const Application = model<ApplicationDocument>('application', new Schema({
  _id: {
    type: String,
    default: generateSnowflake()
  },
  createdAt: { type: Date, default: new Date() },
  description: {
    default: 'A new bot, that can do cool things.',
    type: String,
    required: true,
    maxlength: '512'
  },
  name: {
    type: String,
    default: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    required: true,
    maxlength: 48
  },
  owner: {
    type: String,
    ref: 'user'
  }
}));
