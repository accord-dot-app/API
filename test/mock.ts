import { Channel, ChannelType } from '../src/data/models/channel';
import { Guild } from '../src/data/models/guild';
import { GuildMember } from '../src/data/models/guild-member';
import { User, UserDocument, UserVoiceState } from '../src/data/models/user';
import { generateSnowflake } from '../src/data/snowflake-entity';
import { Types } from 'mongoose';
import { defaultPermissions, Role, RoleDocument } from '../src/data/models/role';

export class Mock {
  public async guild() {
    const guildId = generateSnowflake();
    const owner = await this.user();
    const roles = [ await this.role(guildId) ];

    return await Guild.create({
      _id: guildId,
      name: 'Mock Guild',
      createdAt: new Date(),
      nameAcronym: 'MG',
      iconURL: null,
      owner,
      channels: [
        await this.channel('TEXT', guildId),
        await this.channel('VOICE', guildId),
      ],
      members: [
        await this.guildMember(owner, guildId, roles),
      ],
      roles
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

  public async guildMember(user: UserDocument, guildId: string, roles?: RoleDocument[]) {
    return await GuildMember.create({
      _id: new Types.ObjectId(),
      guildId,
      roleIds: roles?.map(r => r.id) ?? [],
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

  public async role(guildId: string, permissions = defaultPermissions) {
    return await Role.create({
      _id: generateSnowflake(),
      color: '#FFFFFF',
      createdAt: new Date(),
      guildId,
      hoisted: false,
      mentionable: true,
      name: 'Mock Role',
      permissions,
      position: 0
    });
  }
}
