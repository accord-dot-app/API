import AddFriend from '../../../src/api/websocket/ws-events/add-friend';
import { WebSocket } from '../../../src/api/websocket/websocket';
import io from 'socket.io-client';
import { Mock } from '../../mock/mock';
import { expect } from 'chai';
import { User, UserDocument } from '../../../src/data/models/user';
import { Channel } from '../../../src/data/models/channel';

describe('add-friend', () => {
  const client = io(`http://localhost:${process.env.PORT}`) as any;
  let event: AddFriend;
  let ws: WebSocket;

  let sender: UserDocument;
  let friend: UserDocument;

  beforeEach(async () => {
    ({ event, ws, user: sender } = await Mock.defaultSetup(client, AddFriend));
    friend = await Mock.user();
  });

  afterEach(async () => await Mock.afterEach(ws));
  after(async () => await Mock.after(client));

  it('user sends request, fulfilled', async () => {
    await expect(addFriend()).to.be.fulfilled;
  });

  it('user adds self as friend, rejected', async () => {
    friend.username = sender.username;

    await expect(addFriend()).to.be.rejectedWith('You cannot add yourself as a friend');
  });

  it('user adds non existing user, rejected', async () => {
    await friend.deleteOne();

    await expect(addFriend()).to.be.rejectedWith('User Not Found');
  });

  it('both users add each other, creates dm channel', async () => {
    await addFriend();
    await returnFriend();

    const exists = await Channel.exists({ memberIds: sender.id }); 
    expect(exists).to.be.true;
  });

  it('both users add each other, friend request removed', async () => {
    await addFriend();
    await returnFriend();

    friend = await User.findById(friend.id);
    sender = await User.findById(sender.id);    

    expect(friend.friendRequestIds).to.be.empty;
    expect(sender.friendRequestIds).to.be.empty;
  });

  it('both users add each other, friend added', async () => {
    await addFriend();
    await returnFriend();

    friend = await User.findById(friend.id);
    sender = await User.findById(sender.id);

    expect(friend.friendIds.length).to.equal(1);
    expect(sender.friendIds.length).to.equal(1);
  });

  async function addFriend() {
    return event.invoke(ws, client, { username: friend.username });
  }

  async function returnFriend() {
    ws.sessions.set(client.id, friend.id);
    await event.invoke(ws, client, { username: sender.username });
    ws.sessions.set(client.id, sender.id);
  }
});
