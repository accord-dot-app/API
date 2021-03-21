import { Router } from 'express';
import { Application } from '../../data/models/application';
import { generateInviteCode } from '../../data/models/invite';
import { generateSnowflake } from '../../data/snowflake-entity';
import Users from '../../data/users';
import Deps from '../../utils/deps';
import { updateUser, validateUser } from '../modules/middleware';

export const router = Router();

const users = Deps.get<Users>(Users);

// FIXME: inefficient if too many applications
router.get('/applications', async (req, res) => {
  const applications = await Application
    .find()
    .populate('-token')
    .exec();
  res.json(applications);
});

router.use(updateUser, validateUser);

router.get('/applications/user', async (req, res) => {
  const applications = await Application.find({ owner: res.locals.user });
  res.json(applications);
});

router.get('/applications/new', async (req, res) => {  
  const user = res.locals.user;
  const count = await Application.count({ owner: user });
  const maxApps = 16;
  if (count >= maxApps)
    return res.status(400).json({ message: 'Too many applications' });  

  const app = new Application({ owner: user._id as any });
  app.user = (await users.createUser(app.name, generateInviteCode(), true))._id as any;
  app.token = users.createBotToken(user.id);
  await app.save();

  res.json(app);
});

router.get('/applications/:id', async (req, res) => {
  const application = await Application
    .findById(req.params.id)
    .populate('user')
    .exec();

  return (application?.owner !== res.locals.user?._id)
    ? res.status(403).json({ message: 'Forbidden' })
    : res.json(application);
});

router.patch('/applications/:id', async (req, res) => {
  const application = await Application.findById(req.params.id);
  if (!application || application.owner !== res.locals.user._id)
    return res.status(403).json({ message: 'Forbidden' });

  await application.update(req.body, { runValidators: true });
  res.json(application);
});
