import { Router } from 'express';
import { StatusType, User, UserVoiceState } from '../../data/models/user';
import { generateSnowflake } from '../../data/snowflake-entity';
import Users from '../../data/users';
import Deps from '../../utils/deps';
import jwt from 'jsonwebtoken';
import { updateUser } from '../modules/middleware';
import { Channel } from '../../data/models/channel';
import Channels from '../../data/channels';

export const router = Router();

const channels = Deps.get<Channels>(Channels);
const users = Deps.get<Users>(Users);

router.get('/', updateUser, async (req, res) => res.json(res.locals.user));

router.get('/usernames', async (req, res) => {
  const users = await User.find();
  const usernames = users.map(u => u.username);

  res.json(usernames);
});

router.post('/', async (req, res) => {
  try {
    const usernameExists = await User.exists({ username: req.body.username });
    if (usernameExists)
      throw new TypeError('Username is taken.');

    const user = await (User as any).register({
      _id: generateSnowflake(),
      username: req.body.username,
      avatarURL: `${process.env.API_URL ?? 'http://localhost:3000'}/avatars/default0.png`,
      createdAt: new Date(),
      friends: [],
      status: StatusType.Online,
      voice: new UserVoiceState()
    }, req.body.password);

    const token = jwt.sign({ _id: user._id }, 'secret' , { expiresIn : '7d' });
    
    res.status(201).json(token);
  } catch (err) {
    res.json({ code: 400, message: err?.message });
  }
});

router.get('/known', updateUser, async (req, res) => {
  try {
    const knownUsers = await users.getKnown(res.locals.user._id);
    res.json(knownUsers);
  } catch (err) {
    res.json({ code: 400, message: err?.message });
  }
});

router.get('/:id', async (req, res) => {
  const user = await users.get(req.params.id);
  res.json(user);
});

router.get('/dm-channels', updateUser, async (req, res) => {
  try {
    const dmChannels = await channels.getDMChannels(res.locals.user._id);
    res.json(dmChannels ?? []);
  } catch (err) {
    res.json({ code: 400, message: err?.message });
  }
});