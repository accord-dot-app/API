import { generateSnowflake } from '../../src/data/snowflake-entity';
import { test, given } from 'sazerac';
import { mongooseError } from '../test-utils';
import { Ping } from '../../src/data/models/ping';

test(createPing, () => {
  given().expect(true);
  given({ _id: null }).expect(true);
  given({ pings: [] }).expect(true);
});

function createPing(message: any) {
  const error = new Ping({
    _id: generateSnowflake(),
    pings: [],
  }).validateSync();

  return mongooseError(error);
}
