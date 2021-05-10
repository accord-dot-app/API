import DBWrapper from './db-wrapper';
import { Channel, ChannelDocument, DMChannelDocument, TextChannelDocument, VoiceChannelDocument } from './models/channel';
import { SelfUserDocument } from './models/user';
import { generateSnowflake } from './snowflake-entity';

export default class Channels extends DBWrapper<string, ChannelDocument> {
  public async get(id: string | undefined) {
    const channel = await Channel.findById(id);
    if (!channel)
      throw new TypeError('Channel Not Found');
    return channel;
  }

  public async getDMByMembers(...memberIds: string[]) {
    return await Channel.findOne({ memberIds }) as DMChannelDocument;
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
  public async getGuildsChannels(user: SelfUserDocument): Promise<ChannelDocument[]> {
    const guildIds = user.guilds.map(c => c.id);
    return await Channel.find({
      guildId: { $in: guildIds },
    }) as ChannelDocument[];
  }

  public createDM(senderId: string, friendId: string) {
    return Channel.create({
      _id: generateSnowflake(),
      memberIds: [senderId, friendId],
      name: 'DM Channel',
      type: 'DM',
    }) as Promise<DMChannelDocument>;
  }
  public async createText(guildId: string) {
    return Channel.create({
      _id: generateSnowflake(),
      name: 'chat',
      summary: '',
      guildId,
      type: 'TEXT',
    }) as Promise<TextChannelDocument>;
  }
  public createVoice(guildId: string) {
    return Channel.create({
      _id: generateSnowflake(),
      name: 'Talk',
      guildId,
      type: 'VOICE',
      memberIds: []
    }) as Promise<VoiceChannelDocument>;
  }

  public async getSystem(guildId: string) {
    return await Channel.findOne({ guildId, type: 'TEXT' });
  }
}
