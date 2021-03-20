import AcceptFriendRequest from '../../src/api/websocket/ws-events/accept-friend-request';
import { WebSocket } from '../../src/api/websocket/websocket';
import io from 'socket.io-client';
import { Mock } from '../mock';
import { expect, spy } from 'chai';
import { generateSnowflake } from '../../src/data/snowflake-entity';
import { UserDocument } from '../../src/data/models/user';

describe('cancel-friend-request', () => {
  const client = io(`http://localhost:${process.env.PORT}`) as any;
  
  let event: AcceptFriendRequest;
  let ws: WebSocket;
  let to: any;
  let sender: UserDocument;
  let friend: UserDocument;

  beforeEach(async () => {
    ({ event, ws, user: sender } = await Mock
      .defaultSetup(client, AcceptFriendRequest));

    friend = await Mock.user();
  });

  afterEach(() => Mock.afterEach(ws));
  after(() => Mock.after(client));

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

  it.skip('args are sent to friend and sender', async () => {
    const to = spy.on(ws.io, 'to');
    
    await cancelFriendRequest();

    expect(to).to.have.been.called.with([sender._id, friend._id]);
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
