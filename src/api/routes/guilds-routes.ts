import { Router } from 'express';
import Guilds from '../../data/guilds';
import { generateSnowflake } from '../../data/snowflake-entity';
import Deps from '../../utils/deps';
import { updateUser, validateUser } from '../modules/middleware';
import { getNameAcronym } from '../../utils/utils';
import { Guild } from '../../data/models/guild';
import { Channel, ChannelType } from '../../data/models/channel';
import { GuildMember } from '../../data/models/guild-member';

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
    const channels = [
      await Channel.create({
        _id: generateSnowflake(),
        name: 'general',
        summary: '',
        createdAt: new Date(),
        type: ChannelType.Text,
        members: []
      }),
      await Channel.create({
        _id: generateSnowflake(),
        name: 'General',
        summary: '',
        createdAt: new Date(),
        type: ChannelType.Voice,
        members: []
      })
    ];

    const guildMember = await GuildMember.create({
      user: res.locals.user,
      guild: null
    });

    const guild = await Guild.create({
      _id: generateSnowflake(),
      name: req.body.name,
      nameAcronym: getNameAcronym(req.body.name),
      createdAt: new Date(),
      owner: res.locals.user,
      members: [guildMember],
      channels,
      iconURL: null
    });

    // guildMember.guild = guild;
    // await guildMember.save();

    res.json(guild);
  } catch (err) {    
    res.json({ code: 400, message: err.message });
  }
});