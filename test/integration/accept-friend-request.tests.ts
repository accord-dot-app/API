import AcceptFriendRequest from '../../src/api/websocket/ws-events/accept-friend-request';
import { WebSocket } from '../../src/api/websocket/websocket';
import io from 'socket.io-client';
import { Mock } from '../mock';
import { UserDocument } from '../../src/data/models/user';
import { GuildDocument } from '../../src/data/models/guild';

describe('accept-friend-request', () => {
  const client = io(`http://localhost:${process.env.PORT}`) as any;;
  let event: AcceptFriendRequest;
  let ws: WebSocket;

  let user: UserDocument;
  let guild: GuildDocument;

  beforeEach(async () => {
    const setup = await Mock.defaultSetup(client, AcceptFriendRequest);
    se;
  });

  afterEach(() => ws.sessions.clear());
  after(async () => {
    client.disconnect();
    await Mock.cleanDB();
  });

  it('fulfilled', async () => {
    user.id = '123';
    const result = () => event.invoke(ws, client, {
      
    });

    await expect(result()).to.be.fulfilled;
  });

  it('rejected', async () => {
    const result = () => event.invoke(ws, client, {
      
    });

    await expect(result()).to.be.rejectedWith();
  });

  async function makeGuildOwner() {
    ws.sessions.set(client.id, guild.ownerId);
    await Mock.clearRolePerms(guild);
  }
});
