import MessageDelete from '../../src/api/websocket/ws-events/message-delete';
import { WebSocket } from '../../src/api/websocket/websocket';
import Deps from '../../src/utils/deps';
import { expect } from 'chai';
import io from 'socket.io-client';
import { Mock } from '../mock';
import { GuildDocument } from '../../src/data/models/guild';
import { User, UserDocument } from '../../src/data/models/user';
import { API } from '../../src/api/server';
import { Lean } from '../../src/data/types/entity-types';
import { Message, MessageDocument } from '../../src/data/models/message';
import { generateSnowflake } from '../../src/data/snowflake-entity';

describe('message-delete', () => {
  const client = io(`http://localhost:${process.env.PORT}`) as any;;
  
  let event: MessageDelete;
  let ws: WebSocket;
  let user: UserDocument;
  let guild: GuildDocument;
  let message: MessageDocument;
  let channelId: string;

  beforeEach(async () => {
    ({ ws, event, user, guild } = await Mock.defaultSetup(client, MessageDelete));
    
    channelId = guild.channels[0]._id;
    message = await Mock.message(user, channelId);
  });

  afterEach(async () => await Mock.afterEach(ws));
  after(async () => await Mock.after(client));

  it('user is random member, rejected', async () => {
    await message.update({ authorId: generateSnowflake() });

    await expect(deleteMessage()).to.be.rejectedWith('Missing Permissions');
  });

  it('not in guild channel but message author, fulfilled', async () => {
    const channel = await Mock.channel('DM');
    message = await Mock.message(user, channel.id);

    await expect(deleteMessage()).to.be.fulfilled;
  });

  it('not in guild channel and not message author, fulfilled', async () => {
    const channel = await Mock.channel('DM');
    message = await Mock.message(await Mock.user(), channel.id);

    await expect(deleteMessage()).to.be.rejectedWith('Only message author can do this');
  });

  it('user is author, fulfilled', async () => {
    await expect(deleteMessage()).to.be.fulfilled;
  });

  it('user is author, message deleted', async () => {
    await deleteMessage();
    message = await Message.findById(message.id);

    await expect(message).to.be.null;
  });

  it('message does not exist, rejected', async () => {
    await message.deleteOne();

    await expect(deleteMessage()).to.be.rejectedWith('Message Not Found');
  });

  async function deleteMessage() {
    return event.invoke(ws, client, { messageId: message._id });
  }
  async function makeGuildOwner() {
    ws.sessions.set(client.id, guild.ownerId);
    await Mock.clearRolePerms(guild);
  }
});
