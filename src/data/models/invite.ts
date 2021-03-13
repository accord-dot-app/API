import { Document, model, Schema } from 'mongoose';
import { Lean } from '../types/entity-types';

export interface InviteDocument extends Document, Lean.Invite {
  _id: string;
}

export const Invite = model<InviteDocument>('invite', new Schema({
  _id: String,
  createdAt: Date,
  inviterId: String, // inviter - ref: user -> inviteId
  expiresAt: Date,
  guildId: String, // guild -> ref: guild, -> guildId
  maxUses: Number,
  uses: Number
}));

// TODO: guild should be sent to new member, in guild-member-add
