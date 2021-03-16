import MessageUpdate from '../../src/api/websocket/ws-events/message-update';
import { WebSocket } from '../../src/api/websocket/websocket';
import Deps from '../../src/utils/deps';
import { expect } from 'chai';
import io from 'socket.io-client';
import { Message } from '../../src/data/models/message';
import { GuildMember } from '../../src/data/models/guild-member';
import { Mock } from '../mock';
import { Guild } from '../../src/data/models/guild';
import { User, UserDocument } from '../../src/data/models/user';
import { Channel } from '../../src/data/models/channel';
import { API } from '../../src/api/server';
import { Role } from '../../src/data/models/role';
import { Partial } from '../../src/data/types/ws-types';

describe('message-update', () => {
  const client = io(`http://localhost:${process.env.PORT}`) as any;;
  let event: MessageUpdate;
  let ws: WebSocket;
  let user: UserDocument;

  beforeEach(async () => {
    Deps.get<API>(API);

    event = new MessageUpdate();
    ws = Deps.get<WebSocket>(WebSocket);
    user = await Mock.user();

    ws.sessions.set(client.id, user.id);
  });

  afterEach(() => ws.sessions.clear());
  after(async () => {
    client.disconnect();
    await Mock.cleanDB();
  });

  describe('invoke', () => {
    it('user is not author, rejected', async () => {
      const author = await Mock.user();
      const channel = await Mock.channel('TEXT');
      ws
      const partialMessage: Partial.Message = new Message();

      const result = () => event.invoke(ws, client, {
        channelId: channel._id,
        partialMessage: {
          content: 'test',
        }
      });

      await expect(result()).to.be.rejectedWith('Unauthorized');
    });
  });
});
