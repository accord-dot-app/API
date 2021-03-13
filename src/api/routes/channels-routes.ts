import { Request, Router } from 'express';
import Messages from '../../data/messages';
import { Channel } from '../../data/models/channel';
import { Message } from '../../data/models/message';
import { Lean } from '../../data/types/entity-types';
import Users from '../../data/users';
import Deps from '../../utils/deps';
import { updateUser, validateUser } from '../modules/middleware';

export const router = Router();

const messages = Deps.get<Messages>(Messages);
const users = Deps.get<Users>(Users);

router.get('/@me/:channelId', updateUser, validateUser, async (req, res) => {
  try {
    const channelId = req.params.channelId;
    let channelMessages = (await messages
      .getChannelMessages(channelId))
      .slice(+req.query.start || 0, +req.query.end || 25);

    const channel = await Channel.findById(channelId);
    const canMessageUser = channel.recipientIds.includes(res.locals.user._id);
    if (!canMessageUser)
      throw new TypeError('You are not friends with this user.');

    res.json(channelMessages);
  } catch (err) {    
    res.json({ code: 400, message: err?.message });
  }
});

router.get('/:guildId/:channelId', updateUser, validateUser, async (req, res) => {
  try {
    const channelMsgs = (await Message
      .find({
        guildId: req.params.guildId,
        channelId: req.params.channelId
      }))
      .slice(+req.query.start || 0, +req.query.end || 25);
    
    res.json(channelMsgs);
  } catch (err) {
    res.json({ code: 400, message: err?.message });
  }
});
