import { generateSnowflake } from '../../src/data/snowflake-entity';
import { test, given } from 'sazerac';
import { longArray, longString, mongooseError } from '../test-utils';
import { Application } from '../../src/data/models/application';

test(createApplication, () => {
  given().expect(true);
  given({ _id: null }).expect(true);
  given({ createdAt: null }).expect('Created At is required');
  given({ createdAt: new Date() }).expect(true);
  given({ description: '' }).expect('Description is required');
  given({ description: longString(1001) }).expect('Description too long');
  given({ owner: '' }).expect('Invalid Snowflake ID');
  given({ owner: '123' }).expect('Invalid Snowflake ID');
  given({ owner: generateSnowflake() }).expect(true);
  // given({ channelId: '' }).expect('Channel ID is required');
  // given({ channelId: '123' }).expect('Invalid Snowflake ID');
  // given({ channelId: generateSnowflake() }).expect(true);
  // given({ content: '' }).expect('Content too short');
  // given({ content: longString(3001) }).expect('Content too long');
  // given({ content: 'hi' }).expect(true);
});

function createApplication(message: any) {
  const error = new Application({
    _id: generateSnowflake(),
    authorId: generateSnowflake(),
    channelId: generateSnowflake(),
    content: 'hi',
    createdAt: new Date(),
    ...message,
  }).validateSync();

  return mongooseError(error);
}

