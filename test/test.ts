import '../src/data/types/env';
import { config } from 'dotenv';
import { execSync } from 'child_process';
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

  try {
    // remove glitched test processes
    execSync(`kill -9 $(lsof -i :${process.env.PORT} | tail -n 1 | cut -d ' ' -f5)`);
  } catch {}

  await import('./integration/routes/auth-routes.tests');

  await import('./integration/ws/accept-friend-request.tests');
  await import('./integration/ws/cancel-friend-request.tests');
  await import('./integration/ws/channel-create.tests');
  await import('./integration/ws/guild-member-add.tests');
  await import('./integration/ws/guild-create.tests');
  await import('./integration/ws/guild-delete.tests');
  await import('./integration/ws/guild-update.tests');
  await import('./integration/ws/invite-create.tests');
  await import('./integration/ws/invite-delete.tests');
  await import('./integration/ws/message-create.tests');
  await import('./integration/ws/message-update.tests');
  await import('./integration/ws/message-delete.tests');
  await import('./integration/ws/ready.tests');
  // await import('./integration/ws/voice-state-update.tests');
  await import('./integration/ws/user-update.tests');
  await import('./integration/ws/ws-guard.tests');

  await import('./unit/application.tests');
  await import('./unit/channel.tests');
  await import('./unit/guild.tests');
  await import('./unit/guild-member.tests');
  await import('./unit/invite.tests');
  await import('./unit/message.tests');
  await import('./unit/role.tests');
  await import('./unit/user.tests');
  await import('./unit/snowflake-entity.tests');
})();
