import { Router } from 'express';
import { User } from '../../data/models/user';
import passport from 'passport';
import Deps from '../../utils/deps';
import Users from '../../data/users';
import { Verification } from '../modules/email/verification';
import { updateUser, updateUsername, validateUser } from '../modules/middleware';
import { EmailFunctions } from '../modules/email/email-functions';
import { APIError } from '../modules/api-error';

export const router = Router();

const sendEmail = Deps.get<EmailFunctions>(EmailFunctions);
const users = Deps.get<Users>(Users);
const verification = Deps.get<Verification>(Verification);

router.post('/login',
  updateUsername,
  passport.authenticate('local', { failWithError: true }),
  async (req, res) => {
  const user = await User.findOne({ username: req.body.username }); 
  if (!user)
    throw new APIError(400, 'Invalid credentials');  

  if (user.verified) {
    await sendEmail.verifyCode(user as any);
    return res.status(200).json({ verify: true });
  } else if (req.body.email) 
    throw new APIError(400, 'Email is unverified');

  return res.status(200).json(users.createToken(user.id));
});

router.get('/verify-code', async (req, res) => {
  const email = verification.getEmailFromCode(req.query.code as any);
  const user = await User.findOne({ email });
  if (!email || !user)
    throw new APIError(400, 'Invalid code');

  verification.delete(email);
  res.status(200).json(users.createToken(user._id));
});

router.get('/send-verify-email', updateUser, validateUser, async (req, res) => {
  const email = req.query.email?.toString();
  if (!email)
    throw new APIError(400, 'Email not provided');

  await sendEmail.verifyEmail(email, res.locals.user);

  await User.updateOne(
    { email },
    { email },
    { runValidators: true },
  );

  return res.status(200).json({ verify: true })
});

router.get('/verify-email', async (req, res) => {
  const email = verification.getEmailFromCode(req.query.code as any);  
  if (!email)
    throw new APIError(400, 'Invalid code');

  await User.updateOne(
    { email },
    { verified: true },
    { runValidators: true },
  );

  res.redirect(`${process.env.WEBSITE_URL}/channels/@me?success=Successfully verified your email.`);
});

router.post('/change-password', async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
    verified: true,
  }) as any;
  if (!user)
    throw new APIError(400, 'User Not Found');

  await user.changePassword(req.body.oldPassword, req.body.newPassword);    

  return res.status(200).json(
    users.createToken(user.id)
  );
});
