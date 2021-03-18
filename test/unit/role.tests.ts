import { generateSnowflake } from '../../src/data/snowflake-entity';
import { test, given } from 'sazerac';
import { longArray, longString, mongooseError } from '../test-utils';
import { defaultPermissions, Role } from '../../src/data/models/role';

test(createRole, () => {
  given().expect(true);
  given({ color: 'Mock Role', name: '@everyone' }).expect('Cannot change @everyone role color');
  given({ color: 'Mock Role' }).expect(true);
  given({ createdAt: null }).expect('Created At is required');
  given({ createdAt: new Date() }).expect(true);
  given({ createdAt: new Date() }).expect(true);
  given({ name: '' }).expect('Name is required');
  given({ name: longString(33) }).expect('Name too long');
  given({ name: 'Mock Role' }).expect(true);
  given({ permissions: 255 }).expect('Invalid permissions integer');
  given({ permissions: null }).expect('Permissions is required');
  given({ permissions: defaultPermissions }).expect(true);
  given({ permissions: 0 }).expect(true);
  given({ position: -1 }).expect('Position must be greater than 0');
  given({ position: 0 }).expect(true);
});

function createRole(guild: any) {
  const error = new Role({
    _id: generateSnowflake(),
    color: '#FFFFFF',
    createdAt: new Date(),
    guildId: generateSnowflake(),
    hoisted: false,
    mentionable: true,
    name: 'Mock Role',
    permissions: defaultPermissions,
    position: 0,
    ...guild,
  }).validateSync();

  return mongooseError(error);
}
