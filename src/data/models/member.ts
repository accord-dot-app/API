import { Document, model, Schema } from 'mongoose';
import { GuildDocument } from './guild';

export interface GuildMemberDocument extends Document {
  id: string;
  guild: GuildDocument;
}

export const GuildMember = model<GuildMemberDocument>('guildMember', new Schema({
  _id: String,
  guild: { type: String, ref: 'guild' }
}));