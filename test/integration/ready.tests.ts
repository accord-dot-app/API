import { WebSocket } from '../../src/api/websocket/websocket';
import Deps from '../../src/utils/deps';
import io from 'socket.io-client';
import { API } from '../../src/api/server';
import ChannelCreate from '../../src/api/websocket/ws-events/ready';
import { User, UserDocument } from '../../src/data/models/user';
import { expect } from 'chai';
import jwt from 'jsonwebtoken';
import Users from '../../src/data/users';
import { generateSnowflake } from '../../src/data/snowflake-entity';

describe('channel-create', () => {
  const client = io(`http://localhost:${process.env.PORT}`) as any;;
  let ws: WebSocket;
  let event: ChannelCreate;
  let users: Users;
  let user: UserDocument;

  beforeEach(async () => {
    Deps.get<API>(API);

    ws = Deps.get<WebSocket>(WebSocket);
    event = new ChannelCreate();
    users = new Users();
    user = await users.createUser('test_user', 'Testing@123');
  });

  afterEach(async () => await User.deleteMany({}));

  it('user already logged in, returns', async () => {
    ws.sessions.set(client.id, user.id);
    
    const result = () => event.invoke(ws, client, {
      key: users.createToken(user.id),
      guildIds: [],
      channelIds: [],
    });

    expect(result()).to.throw();
  });

  it('user does not exist, returns', async () => {

  });
});
