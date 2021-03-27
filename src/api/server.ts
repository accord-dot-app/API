import express from 'express';
import 'express-async-errors';

import bodyParser from 'body-parser';
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
import { APIError } from './modules/api-error';

export class API {
  public app = express();

  constructor(private ws = Deps.get<WebSocket>(WebSocket)) {
    this.setupMiddleware();
    this.setupRoutes();
    this.setupErrorHandling();
    this.serveWebsite();
    this.listen();
  }

  private setupMiddleware() {
    passport.use(new LocalStrategy.Strategy((User as any).authenticate()));
    passport.serializeUser((User as any).serializeUser());
    passport.deserializeUser((User as any).deserializeUser());

    this.app.use(bodyParser.json());
    this.app.use(passport.initialize());
    this.app.use(cors());
  }

  private setupRoutes() {
    this.app.use('/api', express.static(resolve('./assets')));
    this.app.use('/api', apiRoutes, authRoutes);
  
    this.app.use('/api/developers', developersRoutes);
    this.app.use('/api/channels', channelsRoutes);
    this.app.use('/api/guilds', guildsRoutes);
    this.app.use('/api/users', usersRoutes);
  } 

  private setupErrorHandling() {
    this.app.all('/api/*', (req, res) => { throw new APIError(404); });
    
    this.app.use((error, req, res, next) => {
      if (res.headersSent)
        return next(error);

      error.code ??= 400;
      return res.status(error.code).json(error);
    });
  }

  private serveWebsite() {
    const distPath = resolve('./dist/browser');
    this.app.use(express.static(distPath));
    this.app.all('*', (req, res) => res
      .status(200)
      .sendFile(`${distPath}/index.html`));
  }

  private listen() {
    const port = process.env.PORT || 8080;
    const server = this.app.listen(port, async () => {
      Log.info(`API is running on port ${port}`);
      await this.ws.init(server);
    });
  }
}
