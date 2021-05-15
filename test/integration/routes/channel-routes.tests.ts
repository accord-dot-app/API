import { Mock } from '../../mock/mock';
import Deps from '../../../src/utils/deps';
import { API } from '../../../src/api/server';
import request from 'supertest';
import Users from '../../../src/data/users';
import { UserDocument } from '../../../src/data/models/user';
import { expect } from 'chai';
import { InviteDocument } from '../../../src/data/models/invite';
import { GuildDocument } from '../../../src/data/models/guild';
import { assert } from 'console';
import { Channel } from '../../../src/data/models/channel';

describe.only('channel-routes', () => {
  const endpoint = `/api/v1/channels`;

  let app: Express.Application;
  let authorization: string;
  let users: Users;
  let user: UserDocument;
  let guild: GuildDocument;

  beforeEach(async () => {
    app = Deps.get<API>(API).app;
    users = Deps.get<Users>(Users);

    guild = await Mock.guild();
    user = await users.get(guild.ownerId);

    authorization = `Bearer ${users.createToken(user.id)}`;
  });

  afterEach(async () => await Mock.cleanDB());
  
  it('GET /, returns guild and dm channels', async () => {
    const dm = await Mock.channel({ type: 'DM' });
    const guildChannels = guild.toJSON().channels;
    
    await request(app)
      .get(endpoint)
      .set('Authorization', authorization)
      .expect(200)
      .expect(res => expect(res.body).to.deep.equal([
        ...guildChannels,
        dm.toJSON(),
      ]));
  });
});
