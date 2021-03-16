import { Document, model, Schema } from 'mongoose';
import { Lean, InviteTypes } from '../types/entity-types';

export interface InviteDocument extends Document, Lean.Invite {
  _id: string;
}

export const Invite = model<InviteDocument>('invite', new Schema({
  _id: String,
  createdAt: Date,
  options: new Schema<InviteTypes.Options>({
    expiresAt: Date,
    maxUses: {
      type: Number,
      min: 1,
      max: 1000
    },
  }),
  inviterId: String,
  guildId: String,
  uses: Number,
}));
