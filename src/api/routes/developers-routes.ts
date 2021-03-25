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
  const count = await Application.countDocuments({ owner: user });
  const maxApps = 16;
  if (count >= maxApps)
    return res.status(400).json({ message: 'Too many applications' });  

  const app = new Application({ owner: user._id as any });
  app.user = (await users.createUser(app.name, generateInviteCode(), true))._id as any;
  app.token = users.createToken(user.id, false);
  await app.save();

  res.json(app);
});

router.get('/applications/:id', async (req, res) => {
  const app = await Application
    .findById(req.params.id)
    .populate('user')
    .exec();

  return (app?.owner !== res.locals.user?._id)
    ? res.status(403).json({ message: 'Forbidden' })
    : res.json(app);
});

router.patch('/applications/:id', async (req, res) => {
  const app = await Application.findById(req.params.id);
  if (!app || app.owner !== res.locals.user._id)
    return res.status(403).json({ message: 'Forbidden' });

  await app.update(req.body, { runValidators: true });
  res.json(app);
});

router.get('/applications/:id/regen-token', async (req, res) => {
  const app = await Application.findById(req.params.id);
  if (!app || app.owner !== res.locals.user._id)
    return res.status(403).json({ message: 'Forbidden' });

  app.token = users.createToken(app.user as any, false);
  await app.save();

  res.json(app.token);
});