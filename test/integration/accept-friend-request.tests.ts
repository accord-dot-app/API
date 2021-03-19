import AcceptFriendRequest from '../../src/api/websocket/ws-events/accept-friend-request';
import { WebSocket } from '../../src/api/websocket/websocket';
import io from 'socket.io-client';
import { Mock } from '../mock';
import { GuildDocument } from '../../src/data/models/guild';
import { expect } from 'chai';
import { generateSnowflake } from '../../src/data/snowflake-entity';
import { User, UserDocument } from '../../src/data/models/user';

describe('accept-friend-request', () => {
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

  it('user accepts friend request, fulfilled', async () => {
    await expect(acceptFriendRequest()).to.be.fulfilled;
  });

  it('user accepts friend request, creates dm channel', async () => {
    await acceptFriendRequest();

    const dmChannel = await User.findById(); 
    await expect().to.exist;
  });

  it('user accepts friend request, friend request removed', async () => {
    await acceptFriendRequest();

    friend = await User.findById(friend.id);
    sender = await User.findById(sender.id);
    expect(friend.friendRequestIds).to.be.empty;
    expect(sender.friendRequestIds).to.be.empty;
  });

  it('user accepts friend request, friend added', async () => {
    await acceptFriendRequest();

    friend = await User.findById(friend.id);
    sender = await User.findById(sender.id);
    expect(friend.friendIds).to.equal(1);
    expect(sender.friendIds).to.equal(1);
  });

  it('user accepts friend request, non existing friend, rejected', async () => {
    const result = () => event.invoke(ws, client, {
      senderId: sender._id,
      friendId: generateSnowflake(),
    });

    await expect(result()).to.be.rejectedWith('User Not Found');
  });

  async function acceptFriendRequest() {
    return event.invoke(ws, client, {
      senderId: sender._id,
      friendId: friend._id,
    });
  }
  function getMaxFriends() {
    return [...new Array(100)].map(generateSnowflake);
  }
});
