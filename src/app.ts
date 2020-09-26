import { connect } from 'mongoose';
import { API } from './api/server';
import Deps from './utils/deps';
import Log from './utils/log';

connect('mongodb://localhost/DClone',
  { 
    useUnifiedTopology: true, 
    useNewUrlParser: true, 
    useFindAndModify: false 
  }, (err) => err
    ? Log.error(err, 'db')
    : Log.info('Connected to database.'));

Deps.get<API>(API);