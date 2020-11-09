import { Router } from 'express';
import Guilds from '../../data/guilds';
import { generateSnowflake } from '../../data/snowflake-entity';
import Deps from '../../utils/deps';
import { updateGuild, updateUser, validateGuildOwner, validateHasPermission, validateUser } from '../modules/middleware';
import { getNameAcronym } from '../../utils/utils';
import { Guild } from '../../data/models/guild';
import { Channel, ChannelType } from '../../data/models/channel';
import { GuildMember } from '../../data/models/guild-member';
import { Invite } from '../../data/models/invite';
import { Message } from '../../data/models/message';
import { defaultPermissions, GeneralPermission, Role } from '../../data/models/role';

export const router = Router();

const guilds = Deps.get<Guilds>(Guilds);

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

    const channels = [
      await Channel.create({
        _id: generateSnowflake(),
        name: 'general',
        summary: '',
        createdAt: new Date(),
        guildId,
        type: ChannelType.Text,
        memberIds: []
      }),
      await Channel.create({
        _id: generateSnowflake(),
        name: 'General',
        summary: '',
        createdAt: new Date(),
        guildId,
        type: ChannelType.Voice,
        memberIds: []
      })
    ];

    const guild = await Guild.create({
      _id: guildId,
      name: req.body.name,
      nameAcronym: getNameAcronym(req.body.name),
      createdAt: new Date(),
      owner: res.locals.user,
      members: [
        await GuildMember.create({
          user: res.locals.user,
          guildId,
          roleIds: [everyoneRoleId]
        })
      ],
      roles: [
        await Role.create({
          _id: everyoneRoleId,
          color: '#A2B6AD',
          createdAt: new Date(),
          guildId,
          mentionable: false,
          hoisted: false,
          name: '@everyone',
          position: 0,
          permissions: defaultPermissions
        })
      ],
      channels,
      iconURL: null
    });
    
    res.status(201).json(guild);
  } catch (err) {    
    res.json({ code: 400, message: err?.message });
  }
});

router.post('/:id', updateUser, validateUser, updateGuild, validateHasPermission(GeneralPermission.MANAGE_CHANNELS),
  async (req, res) => {
  try {
    const channel = await Channel.create({
      _id: generateSnowflake(),
      name: req.body.name,
      summary: '',
      createdAt: new Date(),
      guildId: req.params.id,
      type: req.body.type,
      memberIds: []
    });

    res.status(201).json(channel);    
  } catch (err) {    
    res.json({ code: 400, message: err.message });
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