import DBWrapper from './db-wrapper';
import { Channel, ChannelDocument, DMChannelDocument, TextChannelDocument, VoiceChannelDocument } from './models/channel';
import { generateSnowflake } from './snowflake-entity';
import { ChannelTypes } from './types/entity-types';

export default class Channels extends DBWrapper<string, ChannelDocument> {
  protected async getOrCreate(id: string) {
    return await Channel.findById(id);
  }

  public async getDM(id: string) {
    return await Channel.findById(id) as DMChannelDocument;
  }
  public async getText(id: string) {
    return await Channel.findById(id) as TextChannelDocument;
  }
  public async getVoice(id: string) {
    return await Channel.findById(id) as VoiceChannelDocument;
  }

  public async getDMChannels(userId: string): Promise<DMChannelDocument[]> {
    return await Channel.find({ memberIds: userId }) as DMChannelDocument[];
  }

  public createDM(senderId: string, friendId: string) {
    return Channel.create({
      _id: generateSnowflake(),
      createdAt: new Date(),
      memberIds: [senderId, friendId],
      type: 'DM',
    }) as Promise<DMChannelDocument>;
  }
  public async createText(guildId: string) {
    return Channel.create({
      _id: generateSnowflake(),
      name: 'chat',
      summary: '',
      createdAt: new Date(),
      guildId,
      type: 'TEXT',
    }) as Promise<TextChannelDocument>;
  }
  public createVoice(guildId: string) {
    return Channel.create({
      _id: generateSnowflake(),
      name: 'Talk',
      createdAt: new Date(),
      guildId,
      type: 'VOICE',
      memberIds: []
    }) as Promise<VoiceChannelDocument>;
  }
}
