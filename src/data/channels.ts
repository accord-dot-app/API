import DBWrapper from './db-wrapper';
import { Channel, ChannelDocument } from './models/channel';
import { generateSnowflake } from './snowflake-entity';

export default class Channels extends DBWrapper<string, ChannelDocument> {
  protected async getOrCreate(id: string) {
    return await Channel.findById(id);
  }

  public async getDMChannels(userId: string) {
    return await Channel.find({ recipientIds: userId });
  }

  public createText(guildId: string) {
    return Channel.create({
      _id: generateSnowflake(),
      name: 'chat',
      summary: '',
      createdAt: new Date(),
      guildId,
      type: 'TEXT',
      memberIds: []
    });
  }

  public createVoice(guildId: string) {
    return Channel.create({
      _id: generateSnowflake(),
      name: 'Talk',
      summary: '',
      createdAt: new Date(),
      guildId,
      type: 'VOICE',
      memberIds: []
    });
  }
}
