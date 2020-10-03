import { Router } from 'express';
import Guilds from '../../data/guilds';
import { generateSnowflake } from '../../data/snowflake-entity';
import Deps from '../../utils/deps';
import { updateUser, validateUser } from '../modules/middleware';
import { getNameAcronym } from '../../utils/utils';
import Channels from '../../data/channels';
import { Guild } from '../../data/models/guild';
import { Channel, ChannelType } from '../../data/models/channel';

export const router = Router();

const guilds = Deps.get<Guilds>(Guilds);
const channels = Deps.get<Channels>(Channels);

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
        type: ChannelType.Text
      }),
      await Channel.create({
        _id: generateSnowflake(),
        name: 'General',
        summary: '',
        createdAt: new Date(),
        type: ChannelType.Voice
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