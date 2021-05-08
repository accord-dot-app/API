import { Router } from 'express';
import Channels from '../../data/channels';
import Messages from '../../data/messages';
import { Channel } from '../../data/models/channel';
import { Message } from '../../data/models/message';
import { SelfUserDocument, User } from '../../data/models/user';
import { Lean } from '../../data/types/entity-types';
import Deps from '../../utils/deps';
import { APIError } from '../modules/api-error';
import { fullyUpdateUser, updateUser, updateUsername, validateUser } from '../modules/middleware';
import { WSRooms } from '../websocket/modules/ws-rooms';

export const router = Router();

const channels = Deps.get<Channels>(Channels);
const messages = Deps.get<Messages>(Messages);
const rooms = Deps.get<WSRooms>(WSRooms);

router.get('/', fullyUpdateUser, validateUser, async (req, res) => {
  const dms: Lean.Channel[] = await channels.getDMChannels(res.locals.user._id);
  const guildsChannels = await channels.getGuildsChannels(res.locals.user);
  const all = dms.concat(guildsChannels);

  res.json(all);
});

/*router.get('/:channelId/messages/:messageId', updateUser, validateUser, async (req, res) => {
  console.log(req.params);
  
  const message = await Message.findOne({
    _id: req.params.messageId,
    channelId: req.params.channelId,
  });
  if (!message)
    throw new APIError(404, 'Message Not Found');

  const user = res.locals.user as SelfUserDocument;
  const inChannel = await Channel.exists({
    $or: {
      _id: message?.channelId,
      memberIds: user._id,
      guildId: { $in: user.guilds as any as string[] }
    }
  });
  if (!inChannel)
    throw new APIError(403);

  res.json(message);
});*/

router.get('/:channelId/messages', fullyUpdateUser, validateUser, async (req, res) => {
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
  
  res.json(slicedMsgs);
});

router.get('/:id', fullyUpdateUser, validateUser, async (req, res) => {
  const channel = await channels.get(req.params.id);
  res.json(channel);
});

