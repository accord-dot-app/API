import { Guild, GuildDocument } from './models/guild';
import DBWrapper from './db-wrapper';
import { generateSnowflake } from './snowflake-entity';
import { getNameAcronym } from '../utils/utils';
import { GuildMember } from './models/guild-member';
import Deps from '../utils/deps';
import Channels from './channels';
import Roles from './roles';

export default class Guilds extends DBWrapper<string, GuildDocument> {
  constructor(
    private channels = Deps.get<Channels>(Channels),
    private roles = Deps.get<Roles>(Roles),
  ) { super(); }

  public async get(id: string | undefined) {
    const guild = await Guild
      .findById(id)
      ?.populate('members')
      .populate('roles')
      .populate('channels')
      .exec();
    if (!guild)
      throw new TypeError('User Not Found');
    return guild;
  }

  public async create(name: string, ownerId: string) {    
    const guildId = generateSnowflake();
    const everyoneRoleId = generateSnowflake();

    return await Guild.create({
      _id: guildId,
      name,
      nameAcronym: getNameAcronym(name),
      createdAt: new Date(),
      ownerId,
      members: [
        await GuildMember.create({
          userId: ownerId,
          guildId,
          roleIds: [everyoneRoleId]
        })
      ],
      roles: [
        await this.roles.createEveryone(guildId, everyoneRoleId)
      ],
      channels: [
        await this.channels.createText(guildId),
        await this.channels.createVoice(guildId),
      ],
    });
  }
}
