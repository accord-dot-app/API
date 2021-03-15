import { Router } from 'express';
import Channels from '../../data/channels';
import Messages from '../../data/messages';
import { Message } from '../../data/models/message';
import Deps from '../../utils/deps';
import { updateUser, validateUser } from '../modules/middleware';

export const router = Router();

const channels = Deps.get<Channels>(Channels);
const messages = Deps.get<Messages>(Messages);

router.get('/@me/:channelId', updateUser, validateUser, async (req, res) => {
  try {
    const start = +(req.query.start || 0);
    const end = +(req.query.end || 25);
    const channelId = req.params.channelId;

    let channelMessages = (await messages
      .getChannelMessages(channelId))
      .slice(start, end);

    const channel = await channels.get(channelId);
    const canMessageUser = channel.memberIds.includes(res.locals.user._id);
    if (!canMessageUser)
      throw new TypeError('You are not friends with this user.');

    res.json(channelMessages);
  } catch (err) {    
    res.json({ code: 400, message: err?.message });
  }
});

router.get('/:guildId/:channelId', updateUser, validateUser, async (req, res) => {
  try {
    const start = +(req.query.start || 0);
    const end = +(req.query.end || 25);
    const channelMsgs = (await Message
      .find({
        guildId: req.params.guildId,
        channelId: req.params.channelId
      }))
      .slice(start, end);
    
    res.json(channelMsgs);
  } catch (err) {
    res.json({ code: 400, message: err?.message });
  }
});
