import { WebSocket } from '../../src/api/websocket/websocket';
import Deps from '../../src/utils/deps';
import io from 'socket.io-client';
import { API } from '../../src/api/server';
import GuildUpdate from '../../src/api/websocket/ws-events/guild-update';
import { GuildDocument } from '../../src/data/models/guild';
import { UserDocument } from '../../src/data/models/user';
import { Mock } from '../mock';
import { expect } from 'chai';
import { PermissionTypes } from '../../src/data/types/entity-types';
import { GuildMemberDocument } from '../../src/data/models/guild-member';

describe('guild-update', () => {
  const client = io(`http://localhost:${process.env.PORT}`) as any;
  let ws: WebSocket;
  let event: GuildUpdate;

  let guild: GuildDocument;
  let user: UserDocument;
  let member: GuildMemberDocument;

  beforeEach(async () => {
    Deps.get<API>(API);

    ws = Deps.get<WebSocket>(WebSocket);
    event = new GuildUpdate();

    guild = await Mock.guild();
    user = await Mock.user();
    member = await Mock.guildMember(
      user.id, guild.id, [await Mock.role(guild.id)]
    );
    
    ws.sessions.set(client.id, user.id);
  });

  afterEach(async () => {
    await user.remove();
    await guild.remove();
  });

  it('member has insufficient perms, rejected', async () => {

    const invoke = () => event.invoke(ws, client, {
      guildId: guild.id,
      partialGuild: null,
    });

    await expect(invoke()).to.be.rejectedWith('Missing Permissions');
  });

  it('user has MANAGE_GUILD perms, fulfilled', async () => {
    const role = await Mock.role(guild.id, PermissionTypes.General.MANAGE_GUILD);
    await guild.update({
      $push: {
        members: await Mock.guildMember(user.id, guild.id, [role])
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