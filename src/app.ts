import './data/types/env';
import { config } from 'dotenv';
config();

import { connect } from 'mongoose';
import { API } from './api/server';
import { SystemBot } from './system/bot';
import Deps from './utils/deps';
import Log from './utils/log';

connect(process.env.MONGO_URI, { 
  useUnifiedTopology: true, 
  useNewUrlParser: true, 
  useFindAndModify: false,
  useCreateIndex: true,
}, (error) => error
  ? Log.error(error.message, 'db')
  : Log.info('Connected to database.'));

Deps.get<API>(API);
Deps.get<SystemBot>(SystemBot).init();
