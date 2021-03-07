import { Document, model, Schema } from 'mongoose';

export interface GuildMemberDocument extends Document {
  guildId: string;
  roleIds: string[];
  userId: string;
}

export const GuildMember = model<GuildMemberDocument>('guildMember', new Schema({
  guildId: String,
  userId: String, // ref user -> userId
  roleIds: { type: Array, default: [] }
}));
