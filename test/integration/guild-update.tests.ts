import { WebSocket } from '../../src/api/websocket/websocket';
import Deps from '../../src/utils/deps';
import io from 'socket.io-client';
import { API } from '../../src/api/server';
import GuildUpdate from '../../src/api/websocket/ws-events/guild-update';
import { Guild, GuildDocument } from '../../src/data/models/guild';
import { User, UserDocument } from '../../src/data/models/user';
import { Mock } from '../mock';
import { expect } from 'chai';
import { PermissionTypes } from '../../src/data/types/entity-types';

describe('guild-update', () => {
  const client = io(`http://localhost:${process.env.PORT}`) as any;
  let ws: WebSocket;
  let event: GuildUpdate;

  let guild: GuildDocument;
  let user: UserDocument;

  beforeEach(async () => {
    Deps.get<API>(API);

    ws = Deps.get<WebSocket>(WebSocket);
    event = new GuildUpdate();

    guild = await Mock.guild();
    user = await Mock.user();
    
    ws.sessions.set(client.id, user.id);
  });

  afterEach(async () => {
    await User.deleteMany({})
    await Guild.deleteMany({})
  });

  it('member has insufficient perms, rejected', async () => {
    const invoke = () => event.invoke(ws, client, {
      guildId: guild.id,
      partialGuild: null,
    });

    await expect(invoke()).to.be.rejectedWith('Missing Permissions');
  });

  it('user is has MANAGE_GUILD perms, fulfilled', async () => {
    const role = await Mock.role(guild.id, PermissionTypes.General.MANAGE_GUILD);
    await guild.update({
      members: {
        $push: await Mock.guildMember(user.id, guild.id, [role])
      }
    });

    const invoke = () => event.invoke(ws, client, {
      guildId: guild.id,
      partialGuild: null,
    });

    await expect(invoke()).to.be.fulfilled;
  });

  it('user is owner, fulfilled', async () => {
    ws.sessions.set(client.id, guild.ownerId);

    const invoke = () => event.invoke(ws, client, {
      guildId: guild.id,
      partialGuild: null,
    });

    await expect(invoke()).to.be.fulfilled;
  });
});