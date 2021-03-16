import { WebSocket } from '../../src/api/websocket/websocket';
import Deps from '../../src/utils/deps';
import io from 'socket.io-client';
import { API } from '../../src/api/server';
import ChannelCreate from '../../src/api/websocket/ws-events/channel-create';
import { Mock } from '../mock';
import { expect, spy } from 'chai';
import { Guild, GuildDocument } from '../../src/data/models/guild';
import { User, UserDocument } from '../../src/data/models/user';
import { Channel } from '../../src/data/models/channel';

describe('channel-create', () => {
  const client = io(`http://localhost:${process.env.PORT}`) as any;;
  let ws: WebSocket;
  let event: ChannelCreate;

  let guild: GuildDocument;
  let user: UserDocument;

  beforeEach(async () => {
    Deps.get<API>(API);

    ws = Deps.get<WebSocket>(WebSocket);
    event = new ChannelCreate();

    Mock.ioClient(client);

    guild = await Mock.guild(); 
    user = await User.findById(guild.members[1].userId);
    
    ws.sessions.set(client.id, user._id);
  });

  afterEach(() => ws.sessions.clear());
  after(async () => {
    client.disconnect();
    await Mock.cleanDB();
  });

  it('owner creates channel, default perms, fulfilled', async () => {
    await Mock.clearRolePerms(guild);
    await makeGuildOwner();
  
    await expect(createChannel()).to.be.fulfilled;
  });

  it('member creates channel, admin perms, fulfilled', async () => {
    await Mock.giveEveryoneAdmin(guild);
  
    await expect(createChannel()).to.be.fulfilled;
  });

  it('member creates channel, no perms, rejected', async () => {
    await Mock.clearRolePerms(guild);
  
    await expect(createChannel()).to.be.rejectedWith('Missing Permissions');
  });

  it('member successfully creates channel, new channel added', async () => {
    const oldLength = guild.channels.length;
    
    await makeGuildOwner();
    await createChannel();

    guild = await Guild.findById(guild.id);
    expect(guild.channels.length).to.be.greaterThan(oldLength);
  });

  describe('client', () => {
    it('member successfully creates channel, client joins channel room', async () => {
      const join = spy.on(client, 'join');
      
      await makeGuildOwner();
      await createChannel();

      guild = await Guild.findById(guild.id);

      expect(join).to.be.called.with(guild.channels[2]);
    });
  });

  describe('validation', () => {
    it('name, too short, rejected', async () => {  
      await makeGuildOwner();

      const result = () => event.invoke(ws, client, {
        guildId: guild._id,
        partialChannel: {
          name: '',
          type: 'TEXT',
          summary: '',
        },
      });
    
      await expect(result()).to.be.rejectedWith('minimum');
    });
    it('name, too long, rejected', async () => {  
      await makeGuildOwner();

      const result = () => event.invoke(ws, client, {
        guildId: guild._id,
        partialChannel: {
          name: new Array(34).join(' '),
          type: 'TEXT',
          summary: '',
        },
      });
    
      await expect(result()).to.be.rejectedWith('maximum');
    });
    it('summary, too long, rejected', async () => {
      await makeGuildOwner();

      const result = () => event.invoke(ws, client, {
        guildId: guild._id,
        partialChannel: {
          name: '',
          type: 'TEXT',
          summary: new Array(129).join(' '),
        },
      });
    
      await expect(result()).to.be.rejectedWith('minimum');
    });
    it('type, incorrect, rejected', async () => {
      await makeGuildOwner();

      const result = () => event.invoke(ws, client, {
        guildId: guild._id,
        partialChannel: {
          name: 'a',
          type: 'asasas' as any,
          summary: '',
        },
      });
    
      await expect(result()).to.be.rejectedWith('validation');
    });
  });

  async function createChannel() {
    return event.invoke(ws, client, {
      guildId: guild._id,
      partialChannel: {
        name: 'chat',
        type: 'TEXT',
        summary: '',
      },
    });
  }

  async function makeGuildOwner() {
    ws.sessions.set(client.id, guild.ownerId);
    await Mock.clearRolePerms(guild);
  }
});
