import { Router } from 'express';
import { User } from '../../data/models/user';
import Users from '../../data/users';
import Deps from '../../utils/deps';
import { updateUser } from '../modules/middleware';
import Channels from '../../data/channels';
import { SystemBot } from '../../system/bot';

export const router = Router();

const bot = Deps.get<SystemBot>(SystemBot);
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

    const user = await users.createUser(req.body.username, req.body.password); 
    const dm = await channels.createDM(bot.self._id, user._id);
    await bot.message(dm, 'Hello there new user :smile:!');
    
    res.status(201).json(
      users.createToken(user.id)
    );
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

router.get('/dm-channels', updateUser, async (req, res) => {
  try {
    const dmChannels = await channels.getDMChannels(res.locals.user._id);        
    res.json(dmChannels);
  } catch (err) {
    res.json({ code: 400, message: err?.message });
  }
});

router.get('/bots', async (req, res) => {
  const bots = await User.find({ bot: true });
  res.json(bots); 
});

router.get('/:id', async (req, res) => {
  const user = await users.get(req.params.id);
  res.json(user);
});
