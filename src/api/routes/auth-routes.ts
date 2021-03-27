import { Router } from 'express';
import { SelfUserDocument, User } from '../../data/models/user';
import passport from 'passport';
import Deps from '../../utils/deps';
import Users from '../../data/users';
import { Verification } from '../modules/email/verification';
import { updateUser, updateUsername, validateUser } from '../modules/middleware';
import { EmailFunctions } from '../modules/email/email-functions';

export const router = Router();

const sendEmail = Deps.get<EmailFunctions>(EmailFunctions);
const users = Deps.get<Users>(Users);
const verification = Deps.get<Verification>(Verification);

router.post('/login',
  updateUsername,
  passport.authenticate('local', { failWithError: false }),
  async (req, res) => {
  const user = await User.findOne({ username: req.body.username }); 
  if (!user)
    return res.status(400).json({ message: 'Invalid Credentials' });  

  if (user.email && user.verified) {
    await sendEmail.verifyCode(user as any);
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

  await sendEmail.verifyEmail(email, res.locals.user);

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

  res.redirect('/channels/@me?success=Successfully verified your email.');
});

router.post('/change-password', updateUser, validateUser, async (req, res) => {
  const user = res.locals.user as SelfUserDocument;
  await user.changePassword(req.body.oldPassword, req.body.newPassword);    

  return res.status(200).json(
    users.createToken(user.id)
  );
});
