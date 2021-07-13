import { generateSnowflake } from '../../../src/data/snowflake-entity';
import { test, given } from 'sazerac';
import { longArray, longString, mongooseError } from '../../test-utils';
import { Mock } from '../../mock/mock';
import { Theme } from '../../../src/data/models/theme';

test(createTheme, () => {
  given().expect(true);
  given({ name: '' }).expect('Name is required');
  given({ name: longString(33) }).expect('Name is too long');
  given({ name: 'Cool Theme' }).expect(true);
  given({ styles: '' }).expect('Styles is required');
  given({ styles: longString(10001) }).expect('Styles too long');
  given({ styles: '* { color: green; }' }).expect(true);
  given({ author: '123' }).expect('Invalid Snowflake ID');
  given({ author: generateSnowflake() }).expect(true);

  after(() => Mock.cleanDB());
});

function createTheme(user: any) {
  const error = new Theme({
    _id: generateSnowflake(),
    avatarURL: 'a',
    bot: false,
    badges: [],
    friendIds: [],
    friendRequestIds: [],
    guilds: [generateSnowflake()],
    status: 'ONLINE',
    username: `mock-user-${generateSnowflake()}`,
    ...user,
  }).validateSync();

  return mongooseError(error);
}
