import { Router } from 'express';
import Channels from '../../data/channels';
import Messages from '../../data/messages';
import { UserTypes } from '../../data/types/entity-types';
import Deps from '../../utils/deps';
import { updateUser, validateUser } from '../modules/middleware';

export const router = Router();

const channels = Deps.get<Channels>(Channels);
const messages = Deps.get<Messages>(Messages);

router.get('/:channelId/messages', updateUser, validateUser, async (req, res) => {
  try {
    const channelId = req.params.channelId;
    const start = +(req.query.start || 0);
    const end = +(req.query.end || 25);

    const user: UserTypes.Self = res.locals.user;
    const channelMsgs = (await messages
      .getChannelMessages(channelId) ?? await messages
      .getDMChannelMessages(channelId, res.locals.user._id))
      .slice(start, end)
      .filter(m => !user.ignored.userIds.includes(m.authorId));
    
    res.json(channelMsgs);
  } catch (err) {
    res.json({ code: 400, message: err?.message });
  }
});

router.get('/:channelId', updateUser, validateUser, async (req, res) => {
  try {
    const channel = await channels.get(req.params.id);
    res.json(channel);
  } catch (err) {    
    res.json({ code: 400, message: err?.message });
  }
});

