import { Router } from 'express';
import { User } from '../../data/models/user';
import Users from '../../data/users';
import Deps from '../../utils/deps';
import { updateUser, validateUser } from '../modules/middleware';
import Channels from '../../data/channels';
import { SystemBot } from '../../system/bot';

export const router = Router();

const bot = Deps.get<SystemBot>(SystemBot);
const channels = Deps.get<Channels>(Channels);
const users = Deps.get<Users>(Users);

router.get('/', updateUser, validateUser, async (req, res) => {
  const knownUsers = await users.getKnown(res.locals.user._id);  
  res.json(knownUsers);  
});

router.get('/check-username', async (req, res) => {
  const username = req.query.value?.toString().toLowerCase();
  const exists = await User.exists({
    username: {
      $regex: new RegExp(`^${username}$`, 'i')
    },
  });
  res.json(exists);
});

router.get('/self', updateUser, async (req, res) => res.json(res.locals.user));

router.get('/check-email', async (req, res) => {
  const email = req.query.value?.toString().toLowerCase();
  const exists = await User.exists({
    email: {
      $regex: new RegExp(`^${email}$`, 'i')
    },
    verified: true,
  });
  res.json(exists);
});

router.post('/', async (req, res) => {
  const userCount = await User.countDocuments();
  if (userCount >= 50)
    throw new TypeError('Max alpha tester limit reached');

  const user = await users.create(req.body.username, req.body.password); 
  const dm = await channels.createDM(bot.self._id, user._id);
  await bot.message(dm,
    'Hello there new user :smile:!\n' +
    '**Alpha Testing Info** - https://docs.accord.app/legal/alpha'
  );
  
  res.status(201).json(users.createToken(user.id));
});

router.get('/dm-channels', updateUser, async (req, res) => {
  const dmChannels = await channels.getDMChannels(res.locals.user._id);
  res.json(dmChannels);
});

router.get('/bots', async (req, res) => {
  const bots = await User.find({ bot: true });
  res.json(bots); 
});

router.get('/:id', async (req, res) => {
  const user = await users.get(req.params.id);
  res.json(user);
});
