import { Router } from 'express';
import Guilds from '../../data/guilds';
import Messages from '../../data/messages';
import { Channel } from '../../data/models/channel';
import { Message } from '../../data/models/message';
import Deps from '../../utils/deps';
import { updateUser, validateUser } from '../modules/middleware';

export const router = Router();

const guilds = Deps.get<Guilds>(Guilds);
const messages = Deps.get<Messages>(Messages);

router.get('/@me/:channelId', updateUser, validateUser, async (req, res) => {
  try {
    const channelId = req.params.channelId;
    let messages = await Message
      .find({ channel: channelId as any })
      .populate('author')
      .populate('channel')
      .exec();
    messages.slice(+req.query.start || 0, +req.query.end || 25);

    const channel = await Channel.findById(channelId);
    const canMessageUser = channel.recipientIds.includes(res.locals.user._id);
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
      .find({ guild: req.params.guildId, channel: req.params.channelId } as any)
    
    for (const msg of msgs.slice(+req.query.start || 0, +req.query.end || 25))
      channelMsgs.push(await messages.populate(msg));
    
    res.json(channelMsgs);
  } catch (err) {
    res.json({ code: 400, message: err?.message });
  }
});