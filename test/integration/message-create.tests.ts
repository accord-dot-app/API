import MessageCreate from '../../src/api/websocket/ws-events/message-create';
import { WebSocket } from '../../src/api/websocket/websocket';
import Deps from '../../src/utils/deps';
import { expect } from 'chai';
import io from 'socket.io-client';
import { Mock } from '../mock';
import { GuildDocument } from '../../src/data/models/guild';
import { Channel, ChannelDocument } from '../../src/data/models/channel';
import { API } from '../../src/api/server';
import { User, UserDocument } from '../../src/data/models/user';

describe('message-create', () => {
  const client = io(`http://localhost:${process.env.PORT}`) as any;;
  let event: MessageCreate;
  let ws: WebSocket;
  let user: UserDocument;
  let channel: ChannelDocument;
  let guild: GuildDocument;

  beforeEach(async () => {
    Deps.get<API>(API);

    ws = Deps.get<WebSocket>(WebSocket);
    event = new MessageCreate();
    guild = await Mock.guild();
    user = await User.findById(guild.members[1].userId);
    channel = await Channel.findById(guild.channels[0]._id);    

    ws.sessions.set(client.id, user.id);
  });

  afterEach(() => ws.sessions.clear());
  after(async () => {
    client.disconnect();
    await Mock.cleanDB();
  });

  describe('invoke', () => {
    it('not a guild member, rejected', async () => {
      const user = await Mock.user();
      ws.sessions.set(client.id, user.id);

      const result = () => event.invoke(ws, client, {
        channelId: channel._id,
        partialMessage: {
          content: 'a'
        },
      });

      await expect(result()).to.be.rejectedWith('Member Not Found');
    });

    it('user is guild member with send message perms, fulfilled', async () => {
      const result = () => event.invoke(ws, client, {
        channelId: guild.channels[0]._id,
        partialMessage: {
          content: 'hi'
        },
      });

      await expect(result()).to.be.fulfilled;
    });
    
    it('user is guild member without chat perms, rejected', async () => {
      await Mock.clearRolePerms(guild);

      const result = () => event.invoke(ws, client, {
        channelId: guild.channels[0]._id,
        partialMessage: {
          content: 'hi'
        },
      });

      await expect(result()).to.be.rejectedWith('Missing Permissions');
    });
    
    it('user is guild owner, fulfilled', async () => {
      const guild = await Mock.guild();
      ws.sessions.set(client.id, guild.ownerId);

      const result = () => event.invoke(ws, client, {
        channelId: guild.channels[0]._id,
        partialMessage: {
          content: 'hi'
        },
      });

      await expect(result()).to.be.fulfilled;
    });

    describe('validation', () => {
      it('message is too short, rejected', async () => {
        const result = () => event.invoke(ws, client, {
          channelId: guild.channels[0]._id,
          partialMessage: {
            content: ''
          },
        });
  
        await expect(result()).to.be.rejectedWith('minimum');
      });
  
      it('message is too long, rejected', async () => {
        const result = () => event.invoke(ws, client, {
          channelId: guild.channels[0]._id,
          partialMessage: {
            content: new Array(3001).fill('a').join('')
          },
        });
  
        await expect(result()).to.be.rejectedWith('maximum');
      });
    });
  });
});
