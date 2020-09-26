import { Router } from 'express';
import { User } from '../../data/models/user';
import jwt from 'jsonwebtoken';
import passport from 'passport';

export const router = Router();

router.post('/login', passport.authenticate('local', { failWithError: false }), async(req, res) => {
  const user = await User.findOne({ username: req.body.username }); 
  if (!user)
    return res.status(400).json({ message:' Invalid Credentials' });

  const token = jwt.sign({ _id: user._id }, 'secret' , { expiresIn : '7d' });
  
  return res.status(200).json(token);
});
