import { config } from 'dotenv';
config();

import { connect } from 'mongoose';
import { API } from './api/server';
import { Bot } from './bot/bot';
import Users from './data/users';
import Deps from './utils/deps';
import Log from './utils/log';

connect(process.env.MONGO_URI, { 
    useUnifiedTopology: true, 
    useNewUrlParser: true, 
    useFindAndModify: false 
  }, (err) => err
    ? Log.error(err, 'db')
    : Log.info('Connected to database.'));

Deps.get<API>(API);
Deps.get<Bot>(Bot).init();