import MessageCreate from '../../src/api/websocket/ws-events/message-create';
import { WebSocket } from '../../src/api/websocket/websocket';
import Deps from '../../src/utils/deps';
import { expect } from 'chai';
import { Socket } from 'socket.io';
import io from 'socket.io-client';
import { Message } from '../../src/data/models/message';
import { GuildMember } from '../../src/data/models/guild-member';
import { Mock } from '../mock';
import { Guild } from '../../src/data/models/guild';
import { User } from '../../src/data/models/user';
import { Channel } from '../../src/data/models/channel';
import { API } from '../../src/api/server';
import { Role } from '../../src/data/models/role';

const mock = new Mock();

describe('message-create', () => {
  const client = io(`http://localhost:${process.env.PORT}`) as any;;
  let event: MessageCreate;
  let ws: WebSocket;

  beforeEach(() => {
    Deps.get<API>(API);

    event = new MessageCreate();
    ws = Deps.get<WebSocket>(WebSocket);
    
    ws.sessions.set(client.id, 'user_1');
  });

  after(async () => {
    client.disconnect();
    
    await Channel.deleteMany({});
    await Guild.deleteMany({});
    await GuildMember.deleteMany({});
    await Message.deleteMany({});
    await Role.deleteMany({});
    await User.deleteMany({});
  });

  describe('invoke', () => {
    it('spoofed author, throws error', async () => {
      const partialMessage = new Message();
      partialMessage.author = { _id: 'user_2' } as any;

      const result = () => event.invoke(ws, client, partialMessage);

      await expect(result()).to.be.rejectedWith('Unauthorized');
    });

    it('user is guild member with send message perms, message created', async () => {
      const user = await mock.user();
      const guild = await mock.guild();
      ws.sessions.set(client.id, user.id);

      const role = await mock.role(guild.id);
      guild.members.push(
        await mock.guildMember(user, guild.id, [role])
      );

      const partialMessage = new Message({
        author: user,
        channel: guild.channels[0],
        content: 'hi',
        guild
      });

      const result = () => event.invoke(ws, client, partialMessage);

      await expect(result()).to.be.fulfilled;
    });
    
    it('user is guild member without chat perms, message created', async () => {
      const user = await mock.user();
      const guild = await mock.guild();
      ws.sessions.set(client.id, user.id);

      const mutedRole = await mock.role(guild.id, 0);
      guild.members.push(
        await mock.guildMember(user, guild.id, [mutedRole])
      );

      const partialMessage = new Message({
        author: user,
        channel: guild.channels[0],
        content: 'hi',
        guild
      });

      const result = () => event.invoke(ws, client, partialMessage);

      await expect(result()).to.be.rejectedWith('Missing Permissions');
    });
    
    it('user is guild owner, message created', async () => {
      const guild = await mock.guild();
      ws.sessions.set(client.id, guild.owner.id);

      const partialMessage = new Message({
        author: guild.owner,
        channel: guild.channels[0],
        content: 'hi',
        guild
      });

      const result = () => event.invoke(ws, client, partialMessage);

      await expect(result()).to.be.fulfilled;
    });

    it('message is too long, rejected', async () => {
      const guild = await mock.guild();
      ws.sessions.set(client.id, guild.owner.id);

      const partialMessage = new Message({
        author: guild.owner,
        channel: guild.channels[0],
        content: new Array(3001).fill('a').join(''),
        guild
      });

      const result = () => event.invoke(ws, client, partialMessage);

      await expect(result()).to.be.rejectedWith('Content Too Long');
    });
  });
});
