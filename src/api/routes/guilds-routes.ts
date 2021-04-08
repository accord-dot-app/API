import { Router } from 'express';
import Deps from '../../utils/deps';
import { updateGuild, updateUser, validateGuildExists, validateGuildOwner, validateHasPermission, validateUser } from '../modules/middleware';
import Users from '../../data/users';
import Guilds from '../../data/guilds';
import { WebSocket } from '../websocket/websocket';
import { GuildDocument } from '../../data/models/guild';
import { Args } from '../websocket/ws-events/ws-event';
import { PermissionTypes } from '../../data/types/entity-types';

export const router = Router();

const guilds = Deps.get<Guilds>(Guilds);
const users = Deps.get<Users>(Users);
const ws = Deps.get<WebSocket>(WebSocket);

router.get('/', updateUser, validateUser, async (req, res) => {
  try {
    const userGuilds = await users.getGuilds(res.locals.user._id); 
    res.json(userGuilds);
  } catch (err) {
    res.json({ code: 400, message: err?.message });
  }
});

router.get('/:id/authorize/:botId',
  updateUser, validateUser, updateGuild,
  validateHasPermission(PermissionTypes.General.MANAGE_GUILD),
  async (req, res) => {
  try {
    const guild = await guilds.get(req.params.id);
    const bot = await users.get(req.params.botId);
    const member = await guilds.join(bot, res.locals.guild);

    ws.io
      .to(guild.id)
      .emit('GUILD_MEMBER_ADD', { member } as Args.GuildMemberAdd);
    ws.io
      .to(bot.id)
      .emit('GUILD_JOIN', { guild } as Args.GuildJoin);

    res.json({ message: 'Success' });
  } catch (err) {    
    res.json({ code: 400, message: err?.message });
  }
});

router.get('/:id/invites',
  updateUser, validateUser, updateGuild, validateGuildExists,
  validateHasPermission(PermissionTypes.General.MANAGE_GUILD),
  async (req, res) => {
  try {
    const invites = await guilds.invites(req.params.id);
    res.json(invites);
  } catch (err) {    
    res.json({ code: 400, message: err?.message });
  }
});