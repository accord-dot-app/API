import { Router } from 'express';
import Guilds from '../../data/guilds';
import Deps from '../../utils/deps';
import { updateGuild, updateUser, validateGuildExists, validateGuildOwner, validateUser } from '../modules/middleware';
import { Channel } from '../../data/models/channel';
import { GuildMember } from '../../data/models/guild-member';
import { Invite } from '../../data/models/invite';
import { Message } from '../../data/models/message';
import { SystemBot } from '../../system/bot';
import Channels from '../../data/channels';
import Roles from '../../data/roles';
import Users from '../../data/users';
import { User } from '../../data/models/user';

export const router = Router();

const bot = Deps.get<SystemBot>(SystemBot);
const guilds = Deps.get<Guilds>(Guilds);
const users = Deps.get<Users>(Users);

router.get('/', updateUser, validateUser, async (req, res) => {
  try {
    const userGuilds = await users.getGuilds(res.locals.user._id);    

    res.json(userGuilds);
  } catch (err) {
    res.json({ code: 400, message: err?.message });
  }
});

router.post('/', updateUser, validateUser, async (req, res) => {
  try {
    const guild = await guilds.create(req.body.name, res.locals.user._id);

    await User.updateOne(
      { _id: res.locals.user._id },
      { $push: { guilds: guild } },
    );

    res.status(201).json(guild);
  } catch (err) {    
    res.json({ code: 400, message: err?.message });
  }
});

router.delete('/:id', updateUser, validateUser, updateGuild, validateGuildOwner, async (req, res) => {
  try {
    await res.locals.guild.deleteOne();

    await Channel.remove({ guildId: res.locals.guild._id });
    await GuildMember.remove({ guildId: res.locals.guild._id });
    await Invite.remove({ guild: res.locals.guild });
    await Message.remove({ guild: res.locals.guild });

    res.status(204).json({ code: 204, message: 'Success!' });
  } catch (err) {    
    res.json({ code: 400, message: err?.message });
  }
});

router.get('/:id/authorize/user',
  updateUser, validateUser, updateGuild, validateGuildExists, validateGuildOwner,
  async (req, res) => {
  try {
    // req.query.client_id
    // FIXME: allow adding bots other than 2PG
    await bot.addToGuild(req.params.id);

    res.json({ message: 'Success' });
  } catch (err) {    
    res.json({ code: 400, message: err?.message });
  }
});
