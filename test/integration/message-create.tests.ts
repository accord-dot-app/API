import MessageCreate from '../../src/api/websocket/ws-events/message-create';
import { WebSocket } from '../../src/api/websocket/websocket';
import Deps from '../../src/utils/deps';
import { expect } from 'chai';
import io from 'socket.io-client';
import { Message } from '../../src/data/models/message';
import { GuildMember } from '../../src/data/models/guild-member';
import { Mock } from '../mock';
import { Guild } from '../../src/data/models/guild';
import { User } from '../../src/data/models/user';
import { Channel } from '../../src/data/models/channel';
import { API } from '../../src/api/server';
import { Role } from '../../src/data/models/role';
import { Types } from '../../src/api/websocket/ws-types';

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
      const partialMessage: Types.PartialMessage = new Message();
      partialMessage.authorId = 'user_2';

      const result = () => event.invoke(ws, client, { partialMessage });

      await expect(result()).to.be.rejectedWith('Unauthorized');
    });

    it('user is guild member with send message perms, message created', async () => {
      const user = await Mock.user();
      const guild = await Mock.guild();
      ws.sessions.set(client.id, user.id);

      const role = await Mock.role(guild.id);
      guild.members.push(
        await Mock.guildMember(user, guild.id, [role])
      );

      const partialMessage = new Message({
        authorId: user.id,
        channelId: guild.channels[0].id,
        content: 'hi',
        guildId: guild.id,
      }) as Types.PartialMessage;

      const result = () => event.invoke(ws, client, { partialMessage });

      await expect(result()).to.be.fulfilled;
    });
    
    it('user is guild member without chat perms, message created', async () => {
      const user = await Mock.user();
      const guild = await Mock.guild();
      ws.sessions.set(client.id, user.id);

      const mutedRole = await Mock.role(guild.id, 0);
      guild.members.push(
        await Mock.guildMember(user, guild.id, [mutedRole])
      );

      const partialMessage = new Message({
        authorId: user.id,
        channelId: guild.channels[0].id,
        content: 'hi',
        guildId: guild.id,
      }) as Types.PartialMessage;

      const result = () => event.invoke(ws, client, { partialMessage });

      await expect(result()).to.be.rejectedWith('Missing Permissions');
    });
    
    it('user is guild owner, message created', async () => {
      const guild = await Mock.guild();
      ws.sessions.set(client.id, guild.ownerId);

      const partialMessage = new Message({
        authorId: guild.ownerId,
        channelId: guild.channels[0].id,
        content: 'hi',
        guildId: guild.id,
      }) as Types.PartialMessage;

      const result = () => event.invoke(ws, client, { partialMessage });

      await expect(result()).to.be.fulfilled;
    });

    it('message is too long, rejected', async () => {
      const guild = await Mock.guild();
      ws.sessions.set(client.id, guild.ownerId);

      const partialMessage = new Message({
        authorId: guild.ownerId,
        channelId: guild.channels[0].id,
        content: new Array(3001).fill('a').join(''),
        guildId: guild.id,
      }) as Types.PartialMessage;

      const result = () => event.invoke(ws, client, { partialMessage });

      await expect(result()).to.be.rejectedWith('Content Too Long');
    });
  });
});
