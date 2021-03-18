import '../src/data/types/env';
import { config } from 'dotenv';
config({ path: 'test/.env' });

import { should, use } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import chaiSpies from 'chai-spies';
import chaiThings from 'chai-things';
import { connect } from 'mongoose';

use(chaiAsPromised);
use(chaiSpies);
use(chaiThings);
use(should);

(async() => {   
  await connect(process.env.MONGO_URI, { 
    useUnifiedTopology: true, 
    useNewUrlParser: true, 
    useFindAndModify: false,
    useCreateIndex: true,
  }, (err) => console.log(err));

  /*await import('./integration/accept-friend-request.tests');
  await import('./integration/cancel-friend-request.tests');
  await import('./integration/channel-create.tests');
  await import('./integration/guild-member-add.tests');
  await import('./integration/guild-update.tests');
  await import('./integration/invite-delete.tests');
  await import('./integration/message-create.tests');
  await import('./integration/message-update.tests');
  await import('./integration/ready.tests');
  // await import('./integration/voice-state-update.tests');
  await import('./integration/ws-guard.tests');*/

  // await import('./unit/application.tests');
  await import('./unit/channel.tests');
  await import('./unit/guild.tests');
  await import('./unit/guild-member.tests');
  await import('./unit/invite.tests');
  await import('./unit/message.tests');
  await import('./unit/role.tests');
  await import('./unit/user.tests');
  await import('./unit/snowflake-entity.tests');
})();
