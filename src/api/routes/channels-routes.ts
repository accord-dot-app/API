import { Router } from 'express';
import Channels from '../../data/channels';
import Messages from '../../data/messages';
import { SelfUserDocument } from '../../data/models/user';
import Pings from '../../data/pings';
import Deps from '../../utils/deps';
import { updateUser, validateUser } from '../modules/middleware';

export const router = Router();

const channels = Deps.get<Channels>(Channels);
const messages = Deps.get<Messages>(Messages);
const pings = Deps.get<Pings>(Pings);

router.get('/:channelId/messages', updateUser, validateUser, async (req, res) => {
  const channelId = req.params.channelId;
  const start = +(req.query.start || 0);
  const end = +(req.query.end || 25);

  const user: SelfUserDocument = res.locals.user;
  const channelMsgs = (await messages
    .getChannelMessages(channelId) ?? await messages
    .getDMChannelMessages(channelId, res.locals.user._id))
    .slice(start, end)
    .map(m => {
      const isIgnored = user.ignored.userIds.includes(m.authorId);
      if (isIgnored)
        m.content = 'This user is blocked, and the message content has been hidden.';
      return m;
    });

  const index = Math.max(channelMsgs.length - 1, 0);
  const lastMessage = channelMsgs[index];
  if (lastMessage)
    await pings.markAsRead(user, lastMessage);
  
  res.json(channelMsgs);
});

router.get('/:channelId', updateUser, validateUser, async (req, res) => {
  const channel = await channels.get(req.params.id);
  res.json(channel);
});

