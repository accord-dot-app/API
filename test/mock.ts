import { Channel, ChannelType } from '../src/data/models/channel';
import { Guild } from '../src/data/models/guild';
import { GuildMember } from '../src/data/models/guild-member';
import { User, UserDocument, UserVoiceState } from '../src/data/models/user';
import { generateSnowflake } from '../src/data/snowflake-entity';
import { Types } from 'mongoose';

export class Mock {
  public async guild() {
    return await Guild.create({
      _id: generateSnowflake(),
      name: 'Mock Guild',
      createdAt: new Date(),
      nameAcronym: 'MG',
      iconURL: null,
      owner: await this.user(),
      channels: [
        await this.channel('TEXT'),
        await this.channel('VOICE'),
      ],
      members: [],
      roles: []
    });
  }

  public async user() {
    return await User.create({
      _id: generateSnowflake(),
      avatarURL: '',
      bot: false,
      badges: [],
      createdAt: new Date(),
      friends: [],
      friendRequests: [],
      status: 'ONLINE',
      username: 'Mock User',
      voice: new UserVoiceState()
    });
  }

  public async guildMember(user: UserDocument, guildId: string) {
    return await GuildMember.create({
      _id: new Types.ObjectId(),
      guildId,
      roleIds: [],
      user
    });
  }

  public async channel(type: ChannelType, guildId?: string) {
    return await Channel.create({
      _id: generateSnowflake(),
      createdAt: new Date(),
      guildId,
      memberIds: [],
      name: `Mock ${type} Channel`,
      recipientIds: [],
      summary: '',
      type
    });
  }
}
