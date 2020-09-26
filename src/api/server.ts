import bodyParser from 'body-parser';
import express from 'express';
import Log from '../utils/log';
import LocalStrategy from 'passport-local';
import passport from 'passport';
import { router as apiRoutes } from './routes/api-routes';
import { router as authRoutes } from './routes/auth-routes';
import { router as guildsRoutes } from './routes/guilds-routes';
import { router as usersRoutes } from './routes/users-routes';
import { User } from '../data/models/user';
import cors from 'cors';
import { resolve } from 'path';

export class API {
  constructor() {
    const app = express();

    passport.use(new LocalStrategy.Strategy((User as any).authenticate()));
    passport.serializeUser((User as any).serializeUser());
    passport.deserializeUser((User as any).deserializeUser());

    app.use(bodyParser.json());
    app.use(passport.initialize());
    app.use(cors());
    
    app.use('/api', apiRoutes, authRoutes);
    app.use('/api/guilds', guildsRoutes);
    app.use('/api/users', usersRoutes);

    app.use('/api', express.static(resolve('../uploads')));
    
    app.listen(3000, () => Log.info(`API is running on port 3000`));
  }
}