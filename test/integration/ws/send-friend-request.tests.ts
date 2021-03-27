import SendFriendRequest from '../../src/api/websocket/ws-events/send-friend-request';
import { WebSocket } from '../../src/api/websocket/websocket';
import io from 'socket.io-client';
import { Mock } from '../mock';
import { UserDocument } from '../../src/data/models/user';
import { GuildDocument } from '../../src/data/models/guild';
import { expect } from 'chai';
import { generateSnowflake } from '../../src/data/snowflake-entity';

describe('send-friend-request', () => {
  const client = io(`http://localhost:${process.env.PORT}`) as any;
  let event: SendFriendRequest;
  let ws: WebSocket;

  let user: UserDocument;
  let friend: UserDocument;
  let guild: GuildDocument;

  beforeEach(async () => {
    ({ event, ws, guild, user } = await Mock.defaultSetup(client, SendFriendRequest));

    friend = await Mock.user();
  });

  afterEach(async () => await Mock.afterEach(ws));
  after(async () => await Mock.after(client));

  it('sent friend request to existing user, fulfilled', async () => {
    await expect(sendFriendRequest()).to.be.fulfilled;
  });

  it('sent friend request to self, rejected', async () => {
    friend.username = user.username;

    await expect(sendFriendRequest()).to.be.rejectedWith('Cannot add yourself as a friend');
  });

  it('sent friend request to non-existing user, rejected', async () => {
    friend.username = generateSnowflake();

    await expect(sendFriendRequest()).to.be.rejectedWith('User Not Found');
  });

  async function sendFriendRequest() {
    return event.invoke(ws, client, {
      friendUsername: friend.username,
    });
  }

  async function makeGuildOwner() {
    ws.sessions.set(client.id, guild.ownerId);
    await Mock.clearRolePerms(guild);
  }
});
