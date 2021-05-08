import { Router } from 'express';
import Channels from '../../data/channels';
import Messages from '../../data/messages';
import { SelfUserDocument } from '../../data/models/user';
import Pings from '../../data/pings';
import { Lean } from '../../data/types/entity-types';
import Deps from '../../utils/deps';
import { updateUser, validateUser } from '../modules/middleware';

export const router = Router();

const channels = Deps.get<Channels>(Channels);
const messages = Deps.get<Messages>(Messages);
const pings = Deps.get<Pings>(Pings);

router.get('/', updateUser, validateUser, async (req, res) => {
  const dms: Lean.Channel[] = await channels.getDMChannels(res.locals.user._id);
  const guildsChannels = await channels.getGuildsChannels(res.locals.user);
  const all = dms.concat(guildsChannels);

  res.json(all);
});

router.get('/:channelId/messages', updateUser, validateUser, async (req, res) => {
  const channelId = req.params.channelId;

  const user: SelfUserDocument = res.locals.user;
  const channelMsgs = (await messages
    .getChannelMessages(channelId) ?? await messages
    .getDMChannelMessages(channelId, res.locals.user._id));

  // TODO: add lazy loading
  // const start = Math.max(channelMsgs.length - (req.query.start as any), 0);
  // const end = Math.max(channelMsgs.length - (req.query.end as any) as any, 25);
  
  const slicedMsgs = channelMsgs
    // .slice(start, end)
    .map(m => {
      const isIgnored = user.ignored.userIds.includes(m.authorId);
      if (isIgnored)
        m.content = 'This user is blocked, and the message content has been hidden.';
      return m;
    });

  const index = slicedMsgs.length - 1;
  const lastMessage = slicedMsgs[index];
  if (lastMessage)
    await pings.markAsRead(user, lastMessage);
  
  res.json(slicedMsgs);
});

router.get('/:id', updateUser, validateUser, async (req, res) => {
  const channel = await channels.get(req.params.id);
  res.json(channel);
});

