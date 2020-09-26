import { Router } from 'express';
import Guilds from '../../data/guilds';
import { generateSnowflake } from '../../data/snowflake-entity';
import Deps from '../../utils/deps';
import { updateUser, validateUser } from '../modules/middleware';
import { getNameAcronym } from '../../utils/utils';

export const router = Router();

const guilds = Deps.get<Guilds>(Guilds);

router.get('/', updateUser, validateUser, async (req, res) => {
  try {
    const userGuilds = await guilds.getUserGuilds(res.locals.user.id);
    
    res.json(userGuilds);
  } catch (err) {
    res.json({ code: 400, message: err?.message });
  }
});

router.post('/', updateUser, validateUser, async (req, res) => {
  try {
    const guild = await guilds.get({ id: generateSnowflake() });
    guild.name = req.body.name;
    guild.nameAcronym = getNameAcronym(req.body.name);
    guild.owner = res.locals.user;
    guild.members.push(res.locals.user);
    await guild.save();

    res.json(guild);
  } catch (err) {
    res.json({ code: 400, message: err.message });
  }
});