import { Router } from 'express';
import Guilds from '../../data/guilds';
import { generateSnowflake } from '../../data/snowflake-entity';
import Deps from '../../utils/deps';
import { updateUser, validateUser } from '../modules/middleware';
import { getNameAcronym } from '../../utils/utils';
import { Guild } from '../../data/models/guild';
import { Channel, ChannelType } from '../../data/models/channel';

export const router = Router();

const guilds = Deps.get<Guilds>(Guilds);

router.get('/', updateUser, validateUser, async (req, res) => {
  try {
    const userGuilds = await guilds.getUserGuilds(res.locals.user.id);
    
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
        members: [] // TODO: members that have access to the channel
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

    const guild = await Guild.create({
      _id: generateSnowflake(),
      name: req.body.name,
      nameAcronym: getNameAcronym(req.body.name),
      createdAt: new Date(),
      owner: res.locals.user,
      members: [ res.locals.user ],
      channels,
      iconURL: null
    });

    res.json(guild);
  } catch (err) {
    res.json({ code: 400, message: err.message });
  }
});