import jwt from 'jsonwebtoken';
import Users from '../../data/users';
import Deps from '../../utils/deps';

const users = Deps.get<Users>(Users);

export function validateUser(req, res, next) {  
  return (res.locals.user)
    ? next()
    : res.json({ code: 401, message: 'Unauthorized' });
}

export async function updateUser(req, res, next) {
  const key = req.get('Authorization');
  const id = (jwt.decode(key) as any)._id;
  res.locals.user = await users.get({ id });

  return next();
}