import bodyParser from 'body-parser';
import express from 'express';
import Log from '../utils/log';
import LocalStrategy from 'passport-local';
import passport from 'passport';
import { router as apiRoutes } from './routes/api-routes';
import { router as guildsRoutes } from './routes/guilds-routes';
import { router as usersRoutes } from './routes/users-routes';
import { User } from '../data/models/user';

export class API {
  constructor() {
    const app = express();

    app.use(bodyParser.json());
    passport.use(new LocalStrategy.Strategy((User as any).authenticate()));
    passport.serializeUser((User as any).serialize(User as any)());
    passport.deserializeUser((User as any).deserializeUser());
    
    app.use('/api', apiRoutes);
    app.use('/api/guilds', guildsRoutes);
    app.use('/api/users', usersRoutes);
    
    app.listen(3000, () => Log.info(`API is running on port 3000`));
  }
}