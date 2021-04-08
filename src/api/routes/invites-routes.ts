import { Router } from 'express';
import Invites from '../../data/invites';
import { PermissionTypes } from '../../data/types/entity-types';
import Deps from '../../utils/deps';
import { updateUser, validateHasPermission, validateUser } from '../modules/middleware';

export const router = Router();
const invites = Deps.get<Invites>(Invites);

router.get('/:id', async (req, res) => {
  const invite = await invites.get(req.params.id);
  res.json(invite);
});