import { Document, model, Schema } from 'mongoose';
import { GuildDocument } from './guild';
import { UserDocument } from './user';

export interface InviteDocument extends Document {
  _id: string;
  createdAt: Date;
  expiresAt: Date;
  inviter: UserDocument;
  guild: GuildDocument;
  maxUses: number;
  uses: number;
}

export const Invite = model<InviteDocument>('invite', new Schema({
  _id: String,
  createdAt: Date,
  inviter: { type: String, ref: 'user' },
  expiresAt: Date,
  guild: { type: String, ref: 'guild' },
  maxUses: Number,
  uses: Number
}));