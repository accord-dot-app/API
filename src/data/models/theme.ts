import { Document, model, Schema } from 'mongoose';
import { generateSnowflake } from '../snowflake-entity';
import { Lean, patterns } from '../types/entity-types';
import { createdAtToDate, generateUsername, useId } from '../../utils/utils';

export interface ThemeDocument extends Document, Lean.Theme {
  _id: string | never;
  id: string;
  createdAt: never;
}

export const Theme = model<ThemeDocument>('application', new Schema({
  _id: {
    type: String,
    default: generateSnowflake,
  },
  author: {
    type: String,
    ref: 'user',
    required: [true, 'Author is required'],
    validate: [patterns.snowflake, 'Invalid Snowflake ID'],
  },
  createdAt: { type: Date, get: createdAtToDate },
  name: {
    type: String,
    required: [true, 'Name is required'],
    maxlength: [32, 'Name is too long'],
  },
  styles: {
    type: String,
    required: [true, 'Styles is required'],
    maxlength: [10000, 'Styles too long'],
  },
}, { toJSON: { getters: true } }).method('toClient', useId));