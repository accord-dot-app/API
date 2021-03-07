import { Router } from 'express';
import Guilds from '../../data/guilds';
import { generateSnowflake } from '../../data/snowflake-entity';
import Deps from '../../utils/deps';
import { updateGuild, updateUser, validateGuildExists, validateGuildOwner, validateHasPermission, validateUser } from '../modules/middleware';
import { getNameAcronym } from '../../utils/utils';
import { Guild } from '../../data/models/guild';
import { Channel, ChannelType } from '../../data/models/channel';
import { GuildMember } from '../../data/models/guild-member';
import { Invite } from '../../data/models/invite';
import { Message } from '../../data/models/message';
import { defaultPermissions, GeneralPermission, Role } from '../../data/models/role';
import { SystemBot } from '../../system/bot';
import Channels from '../../data/channels';
import Roles from '../../data/roles';

export const router = Router();

const bot = Deps.get<SystemBot>(SystemBot);
const channels = Deps.get<Channels>(Channels);
const guilds = Deps.get<Guilds>(Guilds);
const roles = Deps.get<Roles>(Roles);

router.get('/', updateUser, validateUser, async (req, res) => {
  try {
    const userGuilds = await guilds.getUserGuilds(res.locals.user._id);

    res.json(userGuilds);
  } catch (err) {
    res.json({ code: 400, message: err?.message });
  }
});

router.post('/', updateUser, validateUser, async (req, res) => {
  try {
    const guildId = generateSnowflake();
    const everyoneRoleId = generateSnowflake();

    const guild = await Guild.create({
      _id: guildId,
      name: req.body.name,
      nameAcronym: getNameAcronym(req.body.name),
      createdAt: new Date(),
      ownerId: res.locals.user._id,
      members: [
        await GuildMember.create({
          user: res.locals.user,
          guildId,
          roleIds: [everyoneRoleId]
        })
      ],
      roles: [
        await roles.createEveryone(guildId, everyoneRoleId)
      ],
      channels: [
        await channels.createText(guildId),
        await channels.createVoice(guildId),
      ],
      iconURL: null
    });
    
    res.status(201).json(guild);
  } catch (err) {    
    res.json({ code: 400, message: err?.message });
  }
});

router.patch('/:id', updateUser, validateUser, updateGuild, validateGuildOwner, async (req, res) => {
  try {
    let query = { $set: {} };
    for (let key in req.body)
      if (res.locals.guild[key] && res.locals.guild[key] !== req.body[key])
        query.$set[key] = req.body[key];

    if (req.body.name)
      query.$set['nameAcronym'] = getNameAcronym(req.body.name);

    await Guild.updateOne({ _id: req.params.id }, query);

    res.status(201).json({ ...req.body, ...res.locals.guild });    
  } catch (err) {    
    res.json({ code: 400, message: err.message });
  }
});

router.delete('/:id', updateUser, validateUser, updateGuild, validateGuildOwner, async (req, res) => {
  try {
    await res.locals.guild.deleteOne();

    await Channel.remove({ guildId: res.locals.guild._id });
    await GuildMember.remove({ guildId: res.locals.guild._id });
    await Invite.remove({ guild: res.locals.guild });
    await Message.remove({ guild: res.locals.guild });

    res.status(204).json({ code: 204, message: 'Success!' });
  } catch (err) {    
    res.json({ code: 400, message: err?.message });
  }
});

router.get('/:id/authorize/user',
  updateUser, validateUser, updateGuild, validateGuildExists, validateGuildOwner,
  async (req, res) => {
  try {
    // req.query.client_id
    // FIXME: allow adding bots other than 2PG
    await bot.addToGuild(req.params.id);

    res.json({ message: 'Success' });
  } catch (err) {    
    res.json({ code: 400, message: err?.message });
  }
});
