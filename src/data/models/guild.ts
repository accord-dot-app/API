import { Document, model, Schema } from 'mongoose';
import { ChannelDocument } from './channel';
import { GuildMemberDocument } from './member';
import { UserDocument } from './user';

export interface GuildDocument extends Document {
  id: string;
  name: string;
  createdAt: Date;
  nameAcronym: string;
  iconURL: string;
  owner: UserDocument;
  channels: ChannelDocument[];
  members: GuildMemberDocument[];
}

export const Guild = model<GuildDocument>('guild', new Schema({
  _id: String,
  name: String,
  createdAt: Date,
  nameAcronym: String,
  iconURL: String,
  owner: { type: String, ref: 'user' },
  channels: [{ type: String, ref: 'channel' }],
  members: [{ type: String, ref: 'guildMember' }]
}));