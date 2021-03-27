import { PermissionTypes } from '../../data/types/entity-types';
import Guilds from '../../data/guilds';
import { Guild, GuildDocument } from '../../data/models/guild';
import Roles from '../../data/roles';
import Users from '../../data/users';
import Deps from '../../utils/deps';
import { User } from '../../data/models/user';

const guilds = Deps.get<Guilds>(Guilds);
const roles = Deps.get<Roles>(Roles);
const users = Deps.get<Users>(Users);

export function validateUser(req, res, next) {  
  return (res.locals.user)
    ? next()
    : res.json({ code: 401, message: 'Unauthorized' });
}

export async function updateUsername(req, res, next) {
  if (!req.body.username) {
    const user = await User.findOne({ email: req.body.email });
    req.body.username = user?.username;    
  }  
  return next();
}

export async function updateUser(req, res, next) {
  try {
    const id = users.idFromAuth(req.get('Authorization'));
    res.locals.user = await users.get(id, true);    
  } finally {
    return next();
  }
}

export async function updateGuild(req, res, next) {
  res.locals.guild = await guilds.get(req.params.id);

  return next();
}

export async function validateGuildExists(req, res, next) {
  const exists = await Guild.exists({ _id: req.params.id });
  return (exists)
    ? next()
    : res.status(404).json({ message: 'Guild does not exist' });
}
 
export async function validateGuildOwner(req, res, next) {
  const userOwnsGuild = res.locals.guild.ownerId === res.locals.user._id;

  return (userOwnsGuild)
    ? next()
    : res.code(401).json({ code: 401, message: 'You do not own this guild!' });
}

export function validateHasPermission(permission: PermissionTypes.Permission) {
  return async (req, res, next) => {
    const guild: GuildDocument = res.locals.guild;
    const member = guild.members.find(m => m.userId === res.locals.user._id);
    if (!member)
      return res.status(401);

    return (roles.hasPermission(member, permission))
      ? next()
      : res.status(401);
  };
}
