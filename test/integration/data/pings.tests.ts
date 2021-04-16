import Pings from '../../../src/data/pings';
import { Lean, UserTypes } from '../../../src/data/types/entity-types';
import Deps from '../../../src/utils/deps';
import { Mock } from '../../mock';
import { expect } from 'chai';

describe('data/pings', () => {
  let guild: Lean.Guild;
  let message: Lean.Message; 
  let pings: Pings;
  let user: UserTypes.Self;

  beforeEach(async () => {
    pings = Deps.get<Pings>(Pings);
    
    guild = await Mock.guild();
    message = await Mock.message(user, guild.channels[0]._id);
    user = await Mock.user() as any;
  });

  after(async () => await Mock.cleanDB());

  it('nothing is ignored, returns true', async () => {
    const result = await pings.handle(message);
    expect(result).to.be.true;
  });

  it('message author is ignored, returns false', async () => {
    user.ignored.userIds.push(message.authorId);

    const result = await pings.handle(message);
    expect(result).to.be.false;
  });

  it('channel is ignored, returns false', async () => {
    user.ignored.channelIds.push(message.channelId);

    const result = await pings.handle(message);
    expect(result).to.be.false;
  });

  it('guild is ignored, returns false', async () => {
    user.ignored.guildIds.push(guild._id);

    const result = await pings.handle(message);
    expect(result).to.be.false;
  });
});
