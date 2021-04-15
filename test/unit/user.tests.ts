import { generateSnowflake } from '../../src/data/snowflake-entity';
import { test, given } from 'sazerac';
import { longArray, mongooseError } from '../test-utils';
import { User } from '../../src/data/models/user';
import { UserTypes } from '../../src/data/types/entity-types';
import { Mock } from '../mock';
import { expect } from 'chai';

test(createUser, () => {
  given().expect(true);
  given({ avatarURL: '' }).expect('Avatar URL is required');
  given({ avatarURL: 'a' }).expect(true);
  given({ friendIds: longArray(101) }).expect('Clout limit reached');
  given({ friendIds: [] }).expect(true);
  given({ friendRequests: longArray(101) }).expect('Clout limit reached');
  given({ friendRequests: [] }).expect(true);
  given({ status: '' }).expect('Status is required');
  given({ status: 'A' }).expect('Invalid status');
  given({ status: 'ONLINE' }).expect(true);
  given({ status: 'BUSY' }).expect(true);
  given({ status: 'AFK' }).expect(true);
  given({ status: 'OFFLINE' }).expect(true);
  given({ email: '' }).expect(true);
  given({ email: 'a' }).expect('Invalid email address');
  given({ email: 'a@a' }).expect('Invalid email address');
  given({ email: 'adam@d-cl.one' }).expect(true);
  given({ ignored: null }).expect(true);
  given({ ignored: { channelIds: [] } }).expect(true);
  given({ ignored: { guildIds: [] } }).expect(true);
  given({ ignored: { userIds: [] } }).expect(true);
  given({ username: '' }).expect('Username is required');
  given({ username: 'ADAMJR' }).expect(true);
  given({ username: 'ADAM JR' }).expect('Invalid username');
  given({ username: 'a' }).expect('Invalid username');
  given({ username: 'ADAM-JR' }).expect(true);
  given({ voice: null }).expect('Voice State is required');
  given({ voice: new UserTypes.VoiceState() }).expect(true);

  it('email is taken, rejected', async () => {
    const user = await Mock.user();
    user.email = 'adam@d-cl.one';
    await user.save();

    const user2 = await Mock.user();
    user2.email = 'adam@d-cl.one';

    await expect(user2.validate()).to.be.rejectedWith('expected `email` to be unique');
  });

  it('username is taken, rejected', async () => {
    const user = await Mock.user();
    user.username = 'Adam';
    await user.save();

    const user2 = await Mock.user();
    user2.username = 'adam';

    await expect(user2.validate()).to.be.rejectedWith('expected `username` to be unique');
  });

  after(() => Mock.cleanDB());
});

function createUser(user: any) {
  const error = new User({
    _id: generateSnowflake(),
    avatarURL: 'a',
    bot: false,
    badges: [],
    friendIds: [],
    friendRequests: [],
    guilds: [generateSnowflake()],
    status: 'ONLINE',
    username: `mock-user-${generateSnowflake()}`,
    voice: new UserTypes.VoiceState(),
    ...user,
  }).validateSync();

  return mongooseError(error);
}
