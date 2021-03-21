import { Router } from 'express';
import { User } from '../../data/models/user';
import passport from 'passport';
import Deps from '../../utils/deps';
import Users from '../../data/users';

export const router = Router();

const users = Deps.get<Users>(Users);

router.post('/login',
  passport.authenticate('local', { failWithError: false }),
  async (req, res) => {
  const user = await User.findOne({ username: req.body.username }); 
  if (!user)
    return res.status(400).json({ message: 'Invalid Credentials' });  

  return res.status(200).json(
    users.createToken(user.id)
  );
});
