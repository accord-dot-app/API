import { Router } from 'express';
import Deps from '../../utils/deps';
import { updateGuild, updateUser, validateHasPermission, validateUser } from '../modules/middleware';
import Users from '../../data/users';
import Guilds from '../../data/guilds';
import { WebSocket } from '../websocket/websocket';
import { Args } from '../websocket/ws-events/ws-event';
import { PermissionTypes } from '../../data/types/entity-types';

export const router = Router();

const guilds = Deps.get<Guilds>(Guilds);
const users = Deps.get<Users>(Users);
const ws = Deps.get<WebSocket>(WebSocket);

router.get('/', updateUser, validateUser, async (req, res) => {
  const user = await users.getSelf(res.locals.user._id, true);    
  res.json(user.guilds);
});

router.get('/:id/authorize/:botId',
  updateUser, validateUser, updateGuild,
  validateHasPermission(PermissionTypes.General.MANAGE_GUILD),
  async (req, res) => {
  const guild = await guilds.get(req.params.id);
  const bot = await users.get(req.params.botId);
  const member = await guilds.join(bot, res.locals.guild);

  ws.io
    .to(guild.id)
    .emit('GUILD_MEMBER_ADD', { guildId: guild._id, member } as Args.GuildMemberAdd);
  ws.io
    .to(bot.id)
    .emit('GUILD_JOIN', { guild } as Args.GuildJoin);

  res.json({ message: 'Success' });
});

router.get('/:id/invites',
  updateUser, validateUser, updateGuild,
  validateHasPermission(PermissionTypes.General.MANAGE_GUILD),
  async (req, res) => {
  const invites = await guilds.invites(req.params.id);
  res.json(invites);
});