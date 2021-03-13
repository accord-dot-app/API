import { Document, model, Schema } from 'mongoose';
import { Lean } from '../types/entity-types';

export interface GuildDocument extends Document, Lean.Guild {
  _id: string;
}

export const Guild = model<GuildDocument>('guild', new Schema({
  _id: String,
  name: String,
  createdAt: { type: Date, default: new Date() },
  nameAcronym: String,
  iconURL: String,
  ownerId: String, // owner -> ownerId
  channels: [{ type: String, ref: 'channel' }],
  members: [{ type: String, ref: 'guildMember' }],
  roles: [{ type: String, ref: 'role' }],
}));
