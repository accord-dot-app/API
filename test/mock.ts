import { Channel } from '../src/data/models/channel';
import { Guild } from '../src/data/models/guild';
import { GuildMember } from '../src/data/models/guild-member';
import { User } from '../src/data/models/user';
import { generateSnowflake } from '../src/data/snowflake-entity';
import { Types } from 'mongoose';
import { defaultPermissions, Role, RoleDocument } from '../src/data/models/role';
import { ChannelTypes, Lean, UserTypes } from '../src/data/types/entity-types';

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
      ownerId: owner.id,
      channels: [
        await this.channel('TEXT', guildId),
        await this.channel('VOICE', guildId),
      ],
      members: [
        await this.guildMember(owner.id, guildId, roles),
      ],
      roles,
    });
  }

  public static async user(guildIds: string[] = []) {
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
      voice: new UserTypes.VoiceState()
    });
  }

  public static async guildMember(userId: string, guildId: string, extraRoles?: Lean.Role[]) {
    return await GuildMember.create({
      _id: new Types.ObjectId(),
      userId: userId,
      guildId: guildId,
      roleIds: extraRoles?.map(r => r._id)
    });
  }

  public static async channel(type: ChannelTypes.Type, guildId?: string) {
    return await Channel.create({
      _id: generateSnowflake(),
      createdAt: new Date(),
      guildId,
      memberIds: [],
      name: `Mock ${type} Channel`,
      memberIds: [],
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
