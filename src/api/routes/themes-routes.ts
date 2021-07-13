import { Router } from 'express';
import { Theme } from '../../data/models/theme';
import { generateSnowflake } from '../../data/snowflake-entity';
import { updateUser } from '../modules/middleware';

export const router = Router();

router.get('/themes/:id', async (req, res) => {
  const theme = Theme.findById(req.params.id);
  res.json(theme);
});

router.post('/themes', updateUser, async (req, res) => {
  const theme = await Theme.create({
    ...req.body,
    author: res.locals.user,
    _id: generateSnowflake(),
  });

  res.status(201).json(theme);
});

router.delete('/themes/:id', async (req, res) => {
  const theme = await Theme.deleteOne({ _id: req.params.id });
  res.json(theme);
});
