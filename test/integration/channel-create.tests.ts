import { WebSocket } from '../../src/api/websocket/websocket';
import Deps from '../../src/utils/deps';
import io from 'socket.io-client';
import { API } from '../../src/api/server';
import ChannelCreate from '../../src/api/websocket/ws-events/channel-create';
import { Mock } from '../mock';
import { expect, spy } from 'chai';
import { Guild, GuildDocument } from '../../src/data/models/guild';
import { User, UserDocument } from '../../src/data/models/user';
import { Partial } from '../../src/data/types/ws-types';

describe('channel-create', () => {
  const client = io(`http://localhost:${process.env.PORT}`) as any;
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

  afterEach(async () => await Mock.afterEach(ws));
  after(async () => await Mock.after(client));

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

  it('member successfully creates channel, client joins channel room', async () => {
    const join = spy.on(client, 'join');
    
    await makeGuildOwner();
    await createChannel();

    guild = await Guild.findById(guild.id);

    expect(join).to.be.called();
  });

  async function createChannel(partialChannel?: Partial.Channel) {
    return event.invoke(ws, client, {
      guildId: guild._id,
      partialChannel: partialChannel ?? {
        name: 'chat',
        type: 'TEXT',
        summary: '',
      }
    });
  }

  async function makeGuildOwner() {
    ws.sessions.set(client.id, guild.ownerId);
    await Mock.clearRolePerms(guild);
  }
});
