import Pings from '../../../src/data/pings';
import Deps from '../../../src/utils/deps';

describe.only('data/pings', () => {
  let pings: Pings; 

  beforeEach(() => {
    pings = Deps.get<Pings>(Pings);
  });

  it('nothing is ignored, returns true', () => {
    pings.
  });

  it('message author is ignored, returns false', () => {
  });

  it('channel is ignored, returns false', () => {
  });

  it('guild is ignored, returns false', () => {
  });
});
