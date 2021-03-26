import { Router } from 'express';
import { SelfUserDocument, User } from '../../data/models/user';
import passport from 'passport';
import Deps from '../../utils/deps';
import Users from '../../data/users';
import { Email } from '../modules/email';
import { Verification } from '../modules/verification';
import { Lean, UserTypes } from '../../data/types/entity-types';

export const router = Router();

const email = Deps.get<Email>(Email);
const users = Deps.get<Users>(Users);
const verification = Deps.get<Verification>(Verification);

async function updateUsername(req, res, next) {
  if (!req.body.username) {
    const user = await User.findOne({ email: req.body.email });
    req.body.username = user?.username;    
  }  
  return next();
}

router.post('/login',
  updateUsername,
  passport.authenticate('local', { failWithError: false }),
  async (req, res) => {
  const user = await User
    .findOne({ username: req.body.username }) as SelfUserDocument; 
  if (!user)
    return res.status(400).json({ message: 'Invalid Credentials' });  

  if (user.email) {
    await sendVerifyEmail(user);
    return res.status(303).json({ verify: true });
  }
  return res.status(200).json(users.createToken(user.id));
});

router.get('/verify-code', async (req, res) => {
  const email = verification
    .getEmailFromCode(req.query.code as any);
  const user = await User.findOne({ email });
  console.log(email);
  if (!email || !user)
    return res.status(404).json({ message: 'Invalid Code' });

  res.status(200).json(users.createToken(user.id))
});

async function sendVerifyEmail(user: UserTypes.Self) {
  await email.send('verify', {
    username: user.username,
    code: verification.create(user.email),
  }, user.email as string);
}
