import MessageUpdate from '../../../src/api/websocket/ws-events/message-update';
import { WebSocket } from '../../../src/api/websocket/websocket';
import Deps from '../../../src/utils/deps';
import { expect } from 'chai';
import io from 'socket.io-client';
import { Mock } from '../../mock/mock';
import { GuildDocument } from '../../../src/data/models/guild';
import { User, UserDocument } from '../../../src/data/models/user';
import { API } from '../../../src/api/server';
import { Lean } from '../../../src/data/types/entity-types';
import { ChannelDocument } from '../../../src/data/models/channel';
import { MessageDocument } from '../../../src/data/models/message';
import { generateSnowflake } from '../../../src/data/snowflake-entity';

describe('message-update', () => {
  const client = io(`http://localhost:${process.env.PORT}`) as any;
  
  let channel: ChannelDocument;
  let event: MessageUpdate;
  let ws: WebSocket;
  let user: UserDocument;
  let guild: GuildDocument;
  let message: MessageDocument;

  beforeEach(async () => {
    ({ event, ws, guild, user, channel } = await Mock.defaultSetup(client, MessageUpdate));

    message = await Mock.message(user, channel._id);
  });

  afterEach(async () => await Mock.afterEach(ws));
  after(async () => await Mock.after(client));

  it('user not author, rejected', async () => {
    await makeGuildOwner();

    await expect(messageUpdate()).to.be.rejectedWith('Unauthorized');
  });

  it('message does not exist, rejected', async () => {
    message._id = generateSnowflake();

    await expect(messageUpdate()).to.be.rejectedWith('Message Not Found');
  });

  function messageUpdate() {
    return event.invoke(ws, client, {
      messageId: message._id,
      partialMessage: {
        content: 'test',
      },
      withEmbed: true
    });
  }

  async function makeGuildOwner() {
    ws.sessions.set(client.id, guild.ownerId);
    await Mock.clearRolePerms(guild);
  }
});
