import { generateSnowflake } from '../../../src/data/snowflake-entity';
import { test, given } from 'sazerac';
import { mongooseError } from '../../test-utils';
import { ChannelPings } from '../../../src/data/models/ping';

test(createPing, () => {
  given().expect(true);
  given({ _id: null }).expect(true);
  given({ pings: [] }).expect(true);
});

function createPing() {
  const error = new ChannelPings({
    _id: generateSnowflake(),
    pings: [],
  }).validateSync();

  return mongooseError(error);
}
