import { Router } from 'express';
import { User } from '../../data/models/user';
import { generateSnowflake } from '../../data/snowflake-entity';
import Users from '../../data/user';
import Deps from '../../utils/deps';
import jwt from 'jsonwebtoken';

export const router = Router();

const users = Deps.get<Users>(Users);

router.post('/', async (req, res) => {
  try {
    const user = await users.get({ id: generateSnowflake() });
    user.username = req.body.username;
    
    (User as any).register(user, req.body.password);

    const token = jwt.sign({ _id: user._id }, 'secret' , { expiresIn : '7d' });
    
    res.status(201).json(token);
  } catch (err) {
    res.json({ code: 400, message: err?.message });
  }
});
