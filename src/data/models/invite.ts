import { Document, model, Schema } from 'mongoose';
import { GuildDocument } from './guild';
import { UserDocument } from './user';

export interface InviteDocument extends Document {
  _id: string;
  createdAt: Date;
  expiresAt: Date;
  inviterId: string;
  guildId: string;
  maxUses: number;
  uses: number;
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
