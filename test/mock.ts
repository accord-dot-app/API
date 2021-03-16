import { Channel } from '../src/data/models/channel';
import { Guild } from '../src/data/models/guild';
import { GuildMember } from '../src/data/models/guild-member';
import { User } from '../src/data/models/user';
import { generateSnowflake } from '../src/data/snowflake-entity';
import { Types } from 'mongoose';
import { defaultPermissions, Role } from '../src/data/models/role';
import { ChannelTypes, InviteTypes, Lean, PermissionTypes, UserTypes } from '../src/data/types/entity-types';
import { Message } from '../src/data/models/message';
import { Invite } from '../src/data/models/invite';
import { Application } from '../src/data/models/application';

export class Mock {
  public static ioClient(client: any) {
    client.adapter = { rooms: new Map() }
    client.join = (...args) => {
      for (const arg of args)
        client.adapter.rooms.set(arg, arg);
    };
  }

  public static async message(author: Lean.User, channelId: string) {
    return await Message.create({
      _id: generateSnowflake(),
      authorId: author._id,
      channelId,
      content: 'hi',
      createdAt: new Date(),
    });
  }

  public static async guild() {
    const guildId = generateSnowflake();
    const owner = await this.user([guildId]);
    const memberUser = await this.user([guildId]);

    return await Guild.create({
      _id: guildId,
      name: 'Mock Guild',
      createdAt: new Date(),
      nameAcronym: 'MG',
      ownerId: owner.id,
      roles: [ await this.everyoneRole(guildId) ], // must go above
      channels: [
        await this.channel('TEXT', guildId),
        await this.channel('VOICE', guildId),
      ],
      members: [
        await this.guildMember(owner.id, guildId),
        await this.guildMember(memberUser.id, guildId),
      ],
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

  public static async guildMember(userId: string, guildId: string, extraRoles: Lean.Role[] = []) {
    const everyoneRole = await Role.findOne({ guildId, name: '@everyone' });
    
    return await GuildMember.create({
      _id: new Types.ObjectId(),
      userId: userId,
      guildId: guildId,
      roleIds: [everyoneRole as Lean.Role]
        .concat(extraRoles)
        .filter(r => r)
        .map(r => r._id)
    });
  }

  public static async channel(type: ChannelTypes.Type, guildId?: string) {
    return await Channel.create({
      _id: generateSnowflake(),
      createdAt: new Date(),
      guildId,
      memberIds: [],
      name: `Mock ${type} Channel`,
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

  public static async everyoneRole(guildId: string, permissions = defaultPermissions) {
    return await Role.create({
      _id: generateSnowflake(),
      color: '#FFFFFF',
      createdAt: new Date(),
      guildId,
      hoisted: false,
      mentionable: true,
      name: '@everyone',
      permissions,
      position: 0
    });
  }

  public static async invite(guildId: string, options?: InviteTypes.Options) {
    return await Invite.create({
      _id: generateSnowflake(),
      createdAt: new Date(),
      inviterId: generateSnowflake(),
      options,
      guildId,
      uses: 0,
    });
  }

  public static async clearRolePerms(guild: Lean.Guild) {
    await Role.updateOne(
      { _id: guild.roles?.[0]._id },
      { permissions: 0 },
    );
  }

  public static async giveEveryoneAdmin(guild: Lean.Guild) {
    await Role.updateOne(
      { _id: guild.roles[0]._id },
      { permissions: PermissionTypes.General.ADMINISTRATOR }
    );
  }

  public static async cleanDB() {
    await Application.deleteMany({});
    await Channel.deleteMany({});
    await Guild.deleteMany({});
    await GuildMember.deleteMany({});
    await Invite.deleteMany({});
    await Message.deleteMany({});
    await Role.deleteMany({});
    await User.deleteMany({});
  }
}
