import jwt from 'jsonwebtoken';
import Guilds from '../../data/guilds';
import { Permission } from '../../data/models/role';
import Users from '../../data/users';
import Deps from '../../utils/deps';

const guilds = Deps.get<Guilds>(Guilds),
      users = Deps.get<Users>(Users);

export function validateUser(req, res, next) {  
  return (res.locals.user)
    ? next()
    : res.json({ code: 401, message: 'Unauthorized' });
}

export async function updateUser(req, res, next) {
  const key = req.get('Authorization');
  const id = (jwt.decode(key) as any)?._id;
  res.locals.user = await users.get(id);

  return next();
}

export async function updateGuild(req, res, next) {
  res.locals.guild = await guilds.get(req.params.id);

  return next();
}
 
export async function validateGuildOwner(req, res, next) {
  const userOwnsGuild = res.locals.guild.owner._id === res.locals.user._id;

  return (userOwnsGuild)
    ? next()
    : res.code(401).json({ code: 401, message: 'You do not own this guild!' });
}

export function validateHasPermission(permission: Permission) {
  return async (req, res, next) => {
    const member = await res.locals.guild.members.find(m => m.user === res.locals.user._id);
    return res.locals.guild.owner._id === res.locals.user._id
      || Boolean(member.permissions & permission);
  };
}