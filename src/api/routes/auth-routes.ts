import { Router } from 'express';
import { SelfUserDocument, User } from '../../data/models/user';
import passport from 'passport';
import Deps from '../../utils/deps';
import Users from '../../data/users';
import { Email } from '../modules/email';
import { Verification } from '../modules/verification';
import { UserTypes } from '../../data/types/entity-types';
import { updateUser, validateUser } from '../modules/middleware';

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
  const user = await User.findOne({ username: req.body.username }); 
  if (!user)
    return res.status(400).json({ message: 'Invalid Credentials' });  

  if (user.email && user.verified) {
    await emailVerifyCode(user as any);
    return res.status(200).json({ verify: true });
  }
  return res.status(200).json(users.createToken(user.id));
});

router.get('/verify-code', async (req, res) => {
  const email = verification.getEmailFromCode(req.query.code as any);
  const user = await User.findOne({ email });
  if (!email || !user)
    return res.status(404).json({ message: 'Invalid Code' });

  verification.delete(email);
  res.status(200).json(users.createToken(user._id));
});

router.get('/send-verify-email', updateUser, validateUser, async (req, res) => {
  const email = req.query.email?.toString();  
  if (!email)
    return res.status(404).json({ message: 'Bad Request' }); 

  await emailVerifyEmail(email, res.locals.user);

  await res.locals.user.updateOne(
    { email },
    { runValidators: true, context: 'query' },
  );

  return res.status(200).json({ verify: true })
});

router.get('/verify-email', async (req, res) => {
  const email = verification.getEmailFromCode(req.query.code as any);  
  if (!email)
    return res.status(400).json({ message: 'Invalid Code' });

  await User.updateOne(
    { email },
    { verified: true },
    { runValidators: true },
  );

  return res.redirect('/channels/@me?success=Successfully verified your email.');
});

router.post('/change-password', updateUser, validateUser, async (req, res) => {
  try {
    const user = res.locals.user as SelfUserDocument;
    await user.changePassword(req.body.oldPassword, req.body.newPassword);    
  
    return res.status(200).json(
      users.createToken(user.id)
    );
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

async function emailVerifyCode(user: UserTypes.Self) {
  const expiresIn = 5 * 60 * 1000;
  await email.send('verify', {
    expiresIn,
    user,
    code: verification.create(user.email, expiresIn),
  }, user.email as string);
}
async function emailVerifyEmail(emailAddress: string, user: UserTypes.Self) {
  const expiresIn = 24 * 60 * 60 * 1000;
  await email.send('verify-email', {
    expiresIn,
    user,
    code: verification.create(emailAddress),
  }, emailAddress);
}
