import '../src/data/types/env';
import { config } from 'dotenv';
config({ path: 'test/.env' });

import { use } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import spies from 'chai-spies';
import { connect } from 'mongoose';

use(chaiAsPromised);
use(spies);

(async() => {   
  await connect(process.env.MONGO_URI, { 
    useUnifiedTopology: true, 
    useNewUrlParser: true, 
    useFindAndModify: false,
    useCreateIndex: true,
  }, (err) => console.log(err));

  await import('./integration/channel-create.tests');
  await import('./integration/guild-member-add.tests');
  await import('./integration/guild-update.tests');
  await import('./integration/message-create.tests');
  await import('./integration/invite-delete.tests');
  // await import('./integration/message-update.tests');
  await import('./integration/ready.tests');
  // await import('./integration/voice-state-update.tests');
  await import('./integration/ws-guard.tests');

  await import('./unit/snowflake-entity.tests')
})();
