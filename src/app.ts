import './data/types/env';
import { config } from 'dotenv';
config();

import { connect } from 'mongoose';
import { API } from './api/server';
import { SystemBot } from './system/bot';
import Deps from './utils/deps';
import Log from './utils/log';
import { Email } from './api/modules/email';
import { generateInviteCode } from './data/models/invite';

connect(process.env.MONGO_URI, { 
  useUnifiedTopology: true, 
  useNewUrlParser: true, 
  useFindAndModify: false,
  useCreateIndex: true,
}, (error) => error
  ? Log.error(error.message, 'db')
  : Log.info('Connected to database.'));

Deps.get<SystemBot>(SystemBot).init();
Deps.get<API>(API);