import Deps from '../../src/utils/deps';
import { API } from '../../src/api/server';
import ChannelCreate from '../../src/api/websocket/ws-events/ready';
import { UserDocument } from '../../src/data/models/user';
import { expect } from 'chai';
import Users from '../../src/data/users';
import { Mock } from '../mock';
import { WebSocket } from '../../src/api/websocket/websocket';
import io from 'socket.io-client';

describe('ready', () => {
  const client = io(`http://localhost:${process.env.PORT}`) as any;
  const event = new ChannelCreate();
  const users = new Users();
  let key: string;
  let user: UserDocument;
  let ws: WebSocket;

  beforeEach(async () => {
    Deps.get<API>(API);

    ws = new WebSocket();
    user = await Mock.user();
    key = users.createToken(user.id);
  });

  afterEach(async () => await user.remove());

  it('user already logged in, fulfilled', async () => {
    ws.sessions.set(client.id, user.id);

    const invoke = () => event.invoke(ws, client, {
      key,
      channelIds: [],
      guildIds: [],
    });

    await expect(invoke()).to.be.fulfilled;
  });
});
