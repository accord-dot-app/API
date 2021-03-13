import { Document, model, Schema, Types } from 'mongoose';
import { Lean } from '../types/entity-types';

export interface GuildMemberDocument extends Document, Lean.GuildMember {
  _id: Types.ObjectId;
}

export const GuildMember = model<GuildMemberDocument>('guildMember', new Schema({
  guildId: String,
  userId: String, // ref user -> userId
  roleIds: { type: Array, default: [] }
}));
