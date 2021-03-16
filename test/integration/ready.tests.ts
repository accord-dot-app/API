import Deps from '../../src/utils/deps';
import { API } from '../../src/api/server';
import ChannelCreate from '../../src/api/websocket/ws-events/ready';
import { User, UserDocument } from '../../src/data/models/user';
import { expect } from 'chai';
import Users from '../../src/data/users';
import { Mock } from '../mock';
import { WebSocket } from '../../src/api/websocket/websocket';
import io from 'socket.io-client';
import { SystemBot } from '../../src/system/bot';

describe('ready', () => {
  const client = io(`http://localhost:${process.env.PORT}`) as any;
  
  let event: ChannelCreate;
  let users: Users;
  let key: string;
  let user: UserDocument;
  let ws: WebSocket;

  beforeEach(async () => {
    Deps.get<API>(API);

    event = new ChannelCreate();
    users = new Users();

    ws = Deps.get<WebSocket>(WebSocket);
    user = await Mock.user();
    key = users.createToken(user.id);

    Mock.ioClient(client);

    ws.sessions.set(client.id, user.id);
  });

  afterEach(() => ws.sessions.clear());
  after(async () => {
    client.disconnect();
    await Mock.cleanDB();
  });

  it('user already logged in, fulfilled', async () => {
    await event.invoke(ws, client, { key });

    const invoke = () => event.invoke(ws, client, { key });

    await expect(invoke()).to.be.fulfilled;
  });

  it('joins self user room', async () => {
    await event.invoke(ws, client, { key });
    
    const rooms = Array.from(client.adapter.rooms.values())[0];
    expect(rooms).to.include(user._id);
  });

  it('joins system bot room', async () => {
    const systemBot = Deps.get<SystemBot>(SystemBot);
    await systemBot.init();

    await event.invoke(ws, client, { key });
    
    const rooms = Array.from(client.adapter.rooms.values())[0];
    expect(rooms).to.include(systemBot.self._id);
  });

  it('joins dm channel room', async () => {
    const dm = await Mock.channel('DM');
    dm.memberIds.push(user.id);
    await dm.update(dm);

    await event.invoke(ws, client, { key });    

    const rooms = Array.from(client.adapter.rooms.values())[0];
    expect(rooms).to.include(dm._id);
  });

  it('joins guild room', async () => {
    const guild = await Mock.guild();

    user = await User.findById(guild.ownerId);
    ws.sessions.set(client.id, user.id);
    key = users.createToken(user.id);

    await event.invoke(ws, client, { key });

    const rooms = Array.from(client.adapter.rooms.values())[0];
    expect(rooms).to.include(guild._id);
  });
});
