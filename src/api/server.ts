import bodyParser from 'body-parser';
import express from 'express';
import Log from '../utils/log';
import LocalStrategy from 'passport-local';
import passport from 'passport';
import { router as apiRoutes } from './routes/api-routes';
import { router as authRoutes } from './routes/auth-routes';
import { router as channelsRoutes } from './routes/channels-routes';
import { router as developersRoutes } from './routes/developers-routes';
import { router as guildsRoutes } from './routes/guilds-routes';
import { router as usersRoutes } from './routes/users-routes';
import { User } from '../data/models/user';
import cors from 'cors';
import { resolve } from 'path';
import Deps from '../utils/deps';
import { WebSocket } from './websocket/websocket';

export class API {
  public app: Express.Application;

  constructor(ws = Deps.get<WebSocket>(WebSocket)) {
    const app = express();

    passport.use(new LocalStrategy.Strategy((User as any).authenticate()));
    passport.serializeUser((User as any).serializeUser());
    passport.deserializeUser((User as any).deserializeUser());

    app.use(bodyParser.json());
    app.use(passport.initialize());
    app.use(cors());

    app.use('/api', express.static(resolve('./assets')));
    app.use('/api', apiRoutes, authRoutes);
    
    app.use('/api/developers', developersRoutes);
    app.use('/api/channels', channelsRoutes);
    app.use('/api/guilds', guildsRoutes);
    app.use('/api/users', usersRoutes);

    app.all('/api/*', (req, res) => res.status(404).json({ code: 404 }));
    
    app.use((error, req, res, next) => {
      if (res.headersSent)
        return next(error);

      error.code ??= 400;

      res.status(error.code).json(error);
    });
    
    const distPath = resolve('./dist/browser');
    app.use(express.static(distPath));
    app.all('*', (req, res) => res.status(200).sendFile(`${distPath}/index.html`));
    
    const server = app.listen(process.env.PORT || 3000, () => {
      Log.info(`API is running on port 3000`);
      ws.init(server);
    });

    this.app = app;
  }
}
