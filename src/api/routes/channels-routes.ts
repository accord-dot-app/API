import { Router } from 'express';
import Guilds from '../../data/guilds';
import { Message } from '../../data/models/message';
import Deps from '../../utils/deps';
import { updateUser, validateUser } from '../modules/middleware';

export const router = Router();

const guilds = Deps.get<Guilds>(Guilds);

router.get('/', (req, res) => res.json({ hello: 'earth' }));

router.get('/@me/:userId', updateUser, validateUser, async (req, res) => {
  try {
    const channelId = req.params.channelId;
    const messages = await Message
      .find(m => m.channel === channelId)
      .populate('user')
      .populate('channel')
      .populate('guild')
      .exec();

    const canMessageUser = res.locals.user.friends
      .some(u => u._id === channelId);
    if (!canMessageUser)
      throw new TypeError('You are not friends with this user.');

    res.json(messages);
  } catch (err) {
    res.json({ code: 400, message: err?.message });
  }
});

router.get('/:guildId/:channelId', updateUser, validateUser, async (req, res) => {
  try {
    const guild = await guilds.get({ id: req.params.guildId });
    const userInGuild = guild.members.some(m => m._id === res.locals.user._id);
    if (!userInGuild)
      throw new TypeError('You are not a member of this guild.');

    const messages = await Message
      .find(m => m.guild === req.params.guildId
        && m.channel === req.params.channelId);

    res.json(messages);
  } catch (err) {
    res.json({ code: 400, message: err?.message });
  }
});