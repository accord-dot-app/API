import { Document, model, Schema } from 'mongoose';
import { UserDocument } from './user';

export interface GuildMemberDocument extends Document {
  guildId: string;
  roleIds: string[];
  user: UserDocument;
}

export const GuildMember = model<GuildMemberDocument>('guildMember', new Schema({
  guildId: String,
  user: { type: String, ref: 'user' },
  roleIds: { type: Array, default: [] }
}));