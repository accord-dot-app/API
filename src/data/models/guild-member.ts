import { Document, model, Schema } from 'mongoose';
import { GuildDocument } from './guild';
import { UserDocument } from './user';

// move to separate model
export interface Role {
  name: string;
  color: string;
}

export interface GuildMemberDocument extends Document {
  guildId: string;
  user: UserDocument;
  roles: Role[];
}

export const GuildMember = model<GuildMemberDocument>('guildMember', new Schema({
  guildId: String,
  user: { type: String, ref: 'user' },
  roles: { type: Array, default: [] }
}));