import { Document, model, Schema } from 'mongoose';
import { UserDocument } from './user';

export interface GuildMemberDocument extends Document {
  guildId: string;
  roleIds: string[];
  user: UserDocument;
}

export const GuildMember = model<GuildMemberDocument>('guildMember', new Schema({
  guildId: String,
  userId: String, // ref user -> userId
  roleIds: { type: Array, default: [] }
}));
