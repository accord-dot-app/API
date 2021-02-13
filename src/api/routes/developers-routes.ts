import { Router } from 'express';
import { Application } from '../../data/models/application';
import { updateUser, validateUser } from '../modules/middleware';

export const router = Router();

// FIXME: inefficient if more than 1000 applications
router.get('/applications', async (req, res) => {
  const applications = await Application.find();
  res.json(applications);
});

router.use(updateUser, validateUser);

router.get('/applications/user', async (req, res) => {
  const applications = await Application.find({ owner: res.locals.user });
  res.json(applications);
});

router.get('/applications/new', async (req, res) => {  
  const count = await Application.count({ owner: res.locals.user });
  const max = 16;
  if (count >= max)
    return res.status(400).json({ message: 'Too many applications' });

  const application = new Application();
  application.owner = res.locals.user;
  await application.save();  

  res.json(application);
});

router.get('/applications/:id', async (req, res) => {
  const application = await Application.findById(req.params.id);
  res.json(application);
});

router.patch('/applications/:id', async (req, res) => {
  const application = await Application.findByIdAndUpdate(req.params.id, req.body);
  res.json(application);
});
