import UserUpdate from '../../../src/api/websocket/ws-events/user-update';
import { WebSocket } from '../../../src/api/websocket/websocket';
import io from 'socket.io-client';
import { Mock } from '../../mock';
import { User, UserDocument } from '../../../src/data/models/user';
import { expect } from 'chai';
import Deps from '../../../src/utils/deps';
import Users from '../../../src/data/users';
import { generateSnowflake } from '../../../src/data/snowflake-entity';

describe('user-update', () => {
  const client = io(`http://localhost:${process.env.PORT}`) as any;
  let event: UserUpdate;
  let ws: WebSocket;

  let user: UserDocument;
  let key: string;

  beforeEach(async () => {
    ({ event, ws, user } = await Mock.defaultSetup(client, UserUpdate));

    regenToken();
  });

  afterEach(async () => await Mock.afterEach(ws));
  after(async () => await Mock.after(client));

  it('client updates user, fulfilled', async () => {
    await expect(updateUser()).to.be.fulfilled;
  });

  it('client updates user, user is updated', async () => {
    await updateUser();
    
    const newUser = await User.findById(user.id);
    expect(user.username).to.not.equal(newUser.username);
  });

  it('client is impostor, rejected', async () => {
    user.id = generateSnowflake();
    await regenToken();

    await expect(updateUser()).to.be.rejectedWith('Unauthorized');
  });

  async function updateUser() {
    return event.invoke(ws, client, {
      key,
      partialUser: {
        avatarURL: 'https://example.com',
        username: 'mock-user',
      },
    });
  }

  async function regenToken() {
    key = Deps.get<Users>(Users).createToken(user.id, false);
  }
});
