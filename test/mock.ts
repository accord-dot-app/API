import { Channel, ChannelType } from '../src/data/models/channel';
import { Guild, GuildDocument } from '../src/data/models/guild';
import { GuildMember } from '../src/data/models/guild-member';
import { User, UserDocument, UserVoiceState } from '../src/data/models/user';
import { generateSnowflake } from '../src/data/snowflake-entity';
import { Types } from 'mongoose';
import { defaultPermissions, Role, RoleDocument } from '../src/data/models/role';

export class Mock {
  public static async guild() {
    const guildId = generateSnowflake();
    const owner = await this.user([guildId]);
    const roles = [ await this.role(guildId) ];

    return await Guild.create({
      _id: guildId,
      name: 'Mock Guild',
      createdAt: new Date(),
      nameAcronym: 'MG',
      iconURL: null,
      ownerId: owner.id,
      channels: [
        await this.channel('TEXT', guildId),
        await this.channel('VOICE', guildId),
      ],
      members: [
        await this.guildMember(owner, guildId, roles),
      ],
      roles,
    });
  }

  public static async user(guildIds = []) {
    return await User.create({
      _id: generateSnowflake(),
      avatarURL: '',
      bot: false,
      badges: [],
      createdAt: new Date(),
      friends: [],
      friendRequests: [],
      guilds: guildIds,
      status: 'ONLINE',
      username: 'Mock User',
      voice: new UserVoiceState()
    });
  }

  public static async guildMember(user: UserDocument, guild: GuildDocument, extraRoles?: RoleDocument[]) {
    return await GuildMember.create({
      _id: new Types.ObjectId(),
      guildId,
      roleIds: guild.roles
        .concat(extraRoles?
          .map(r => r.id) ?? []),
      userId: user.id
    });
  }

  public static async channel(type: ChannelType, guildId?: string) {
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

  public static async role(guildId: string, permissions = defaultPermissions) {
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
