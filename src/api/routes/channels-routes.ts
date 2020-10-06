import { Router } from 'express';
import Guilds from '../../data/guilds';
import Messages from '../../data/messages';
import { Message } from '../../data/models/message';
import Deps from '../../utils/deps';
import { updateUser, validateUser } from '../modules/middleware';

export const router = Router();

const guilds = Deps.get<Guilds>(Guilds);
const messages = Deps.get<Messages>(Messages);

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
    const userGuilds = await guilds.getUserGuilds(res.locals.user._id);
    const guild = userGuilds.find(g => g._id === req.params.guildId);
    
    const userInGuild = guild.members.some(m => m.user.id === res.locals.user._id);
    if (!userInGuild)
      throw new TypeError('You are not a member of this guild.');

    const channelMsgs = [];
    const msgs = await Message
      .find({ guild: req.params.guildId, channel: req.params.channelId } as any);
    
    for (const msg of msgs)
      channelMsgs.push(await messages.populate(msg));
    
    res.json(channelMsgs.slice(+req.query.start || 0, +req.query.end || 100));
  } catch (err) {    
    res.json({ code: 400, message: err?.message });
  }
});