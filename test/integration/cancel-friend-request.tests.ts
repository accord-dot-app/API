import AcceptFriendRequest from '../../src/api/websocket/ws-events/accept-friend-request';
import { WebSocket } from '../../src/api/websocket/websocket';
import io from 'socket.io-client';
import { Mock } from '../mock';
import { GuildDocument } from '../../src/data/models/guild';
import { expect } from 'chai';
import { generateSnowflake } from '../../src/data/snowflake-entity';
import { UserDocument } from '../../src/data/models/user';

// todo: remove
describe.skip('cancel-friend-request', () => {
  const client = io(`http://localhost:${process.env.PORT}`) as any;
  let event: AcceptFriendRequest;
  let ws: WebSocket;

  let sender: UserDocument;
  let friend: UserDocument;

  beforeEach(async () => {
    ({ event, ws, user: sender } = await Mock.defaultSetup(client, AcceptFriendRequest));
    friend = await Mock.user();
  });

  afterEach(() => ws.sessions.clear());
  after(async () => {
    client.disconnect();
    await Mock.cleanDB();
  });

  it('user cancels valid friend request, fulfilled', async () => {
    await expect(cancelFriendRequest()).to.be.fulfilled;
  });

  it('user sends friend request to non existing user, rejected', async () => {
    const result = () => event.invoke(ws, client, {
      senderId: sender._id,
      friendId: generateSnowflake(),
    });

    await expect(result()).to.be.rejectedWith('User Not Found');
  });

  it('sender already has max friends, rejected', async () => {
    await sender.update({
      $push: { friends: await getMaxFriends() }
    });

    await expect(cancelFriendRequest()).to.be.rejectedWith('too much clout');
  });


  it('sender already has max requests, rejected', async () => {
    const friendRequests: any[] = [...new Array(100)].map(generateSnowflake);
    await sender.update({ $push: { friendRequests } });

    await expect(cancelFriendRequest()).to.be.rejectedWith('pending friend requests');
  });


  it('friend already has max friends, rejected', async () => {
    await friend.update({
      $push: { friends: await getMaxFriends() }
    });

    await expect(cancelFriendRequest()).to.be.rejectedWith('too much clout');
  });

  it('friend already has max requests, rejected', async () => {
    const friendRequests: any[] = [...new Array(100)].map(generateSnowflake);
    await friend.update({ $push: { friendRequests } });

    await expect(cancelFriendRequest()).to.be.rejectedWith('pending friend requests');
  });

  async function cancelFriendRequest() {
    return event.invoke(ws, client, {
      senderId: sender._id,
      friendId: friend._id,
    });
  }

  async function getMaxFriends() {
    const friends = [];
    for (let i = 0; i < 100; i++)
      friends.push(await Mock.user());
    return friends;
  }
});
