import { Document, model, Schema } from 'mongoose';
import { Lean, InviteTypes } from '../types/entity-types';

export interface InviteDocument extends Document, Lean.Invite {
  _id: string;
}

export const Invite = model<InviteDocument>('invite', new Schema({
  _id: String,
  createdAt: Date,
  options: Object,
  inviterId: String,
  guildId: String,
  uses: Number,
}));
