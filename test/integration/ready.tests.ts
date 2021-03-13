import { WebSocket } from '../../src/api/websocket/websocket';
import Deps from '../../src/utils/deps';
import io from 'socket.io-client';
import { API } from '../../src/api/server';
import ChannelCreate from '../../src/api/websocket/ws-events/ready';
import { User, UserDocument } from '../../src/data/models/user';
import { expect } from 'chai';
import jwt from 'jsonwebtoken';
import Users from '../../src/data/users';
import { Mock } from '../mock';

describe('ready', () => {
  const client = io(`http://localhost:${process.env.PORT}`) as any;
  let ws: WebSocket;
  let event: ChannelCreate;
  let users: Users;
  let user: UserDocument;

  beforeEach(async () => {
    Deps.get<API>(API);

    ws = Deps.get<WebSocket>(WebSocket);
    event = new ChannelCreate();
    users = new Users();
    user = await Mock.user();
  });

  afterEach(async () => await User.deleteMany({}));

  it('user already logged in, fulfilled', async () => {
    ws.sessions.set(client.id, user.id);
    
    const result = () => event.invoke(ws, client, {
      key: users.createToken(user.id),
      guildIds: [],
      channelIds: [],
    });

    await expect(result()).to.be.fulfilled;
  });

  it('user does not exist, returns', async () => {

  });
});
