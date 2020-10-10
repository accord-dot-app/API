import { Document, model, Schema } from 'mongoose';
import { ChannelDocument } from './channel';
import { GuildMemberDocument } from './guild-member';
import { RoleDocument } from './role';
import { UserDocument } from './user';

export interface GuildDocument extends Document {
  _id: string;
  name: string;
  createdAt: Date;
  nameAcronym: string;
  iconURL: string;
  owner: UserDocument;
  channels: ChannelDocument[];
  members: GuildMemberDocument[];
  roles: RoleDocument[];
}

export const Guild = model<GuildDocument>('guild', new Schema({
  _id: String,
  name: String,
  createdAt: { type: Date, default: new Date() },
  nameAcronym: String,
  iconURL: String,
  owner: { type: String, ref: 'user' },
  channels: [{ type: String, ref: 'channel' }],
  members: [{ type: String, ref: 'guildMember' }],
  roles: [{ type: String, ref: 'role' }],
}));