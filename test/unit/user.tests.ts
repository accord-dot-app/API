import { generateSnowflake } from '../../src/data/snowflake-entity';
import { test, given } from 'sazerac';
import { longArray, longString, mongooseError } from '../test-utils';
import { User } from '../../src/data/models/user';
import { UserTypes } from '../../src/data/types/entity-types';
import { Mock } from '../mock';
import { expect } from 'chai';

test(createUser, () => {
  given().expect(true);
  given({ avatarURL: '' }).expect('Avatar URL is required');
  given({ avatarURL: 'a' }).expect(true);
  given({ createdAt: null }).expect('Created At is required');
  given({ createdAt: new Date() }).expect(true);
  given({ friendIds: longArray(101) }).expect('Clout limit reached');
  given({ friendIds: [] }).expect(true);
  given({ friendRequestIds: longArray(101) }).expect('Clout limit reached');
  given({ friendRequestIds: [] }).expect(true);
  given({ status: '' }).expect('Status is required');
  given({ status: 'A' }).expect('Invalid status');
  given({ status: 'ONLINE' }).expect(true);
  given({ status: 'BUSY' }).expect(true);
  given({ status: 'AFK' }).expect(true);
  given({ status: 'OFFLINE' }).expect(true);
  given({ username: '' }).expect('Username is required');
  given({ username: 'ADAMJR' }).expect(true);
  given({ username: 'ADAM JR' }).expect('Invalid username');
  given({ username: 'a' }).expect('Invalid username');
  given({ username: 'ADAM-JR' }).expect(true);

  it('username is taken', async () => {
    const user = await Mock.user();
    user.username = 'Adam';
    await user.save();

    const user2 = await Mock.user();
    user2.username = 'Adam';

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
    createdAt: new Date(),
    friendIds: [],
    friendRequestIds: [],
    guilds: [generateSnowflake()],
    status: 'ONLINE',
    username: `mock-user-${generateSnowflake()}`,
    voice: new UserTypes.VoiceState(),
    ...user,
  }).validateSync();

  return mongooseError(error);
}
