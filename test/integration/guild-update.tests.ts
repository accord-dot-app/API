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
import { GuildMember, GuildMemberDocument } from '../../src/data/models/guild-member';

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
    member = await GuildMember.findById(guild.members[1]);
    user = await User.findById(member.userId);
    
    ws.sessions.set(client.id, user.id);
  });

  afterEach(() => ws.sessions.clear());
  after(async () => {
    client.disconnect();
    await Mock.cleanDB();
  });

  it('spoofed user, rejected', async () => {
    const invoke = () => event.invoke(ws, client, {
      guildId: guild.id,
      partialGuild: guild,
    });

    await expect(invoke()).to.be.rejectedWith('Missing Permissions');
  });

  it('member has insufficient perms, rejected', async () => {
    await Mock.clearRolePerms(guild.id);

    const invoke = () => event.invoke(ws, client, {
      guildId: guild.id,
      partialGuild: guild,
    });

    await expect(invoke()).to.be.rejectedWith('Missing Permissions');
  });

  it('user has MANAGE_GUILD perms, fulfilled', async () => {
    const role = await Mock.role(guild.id, PermissionTypes.General.MANAGE_GUILD);
    member.roleIds.push(role.id);
    await member.update(member);

    const invoke = () => event.invoke(ws, client, {
      guildId: guild.id,
      partialGuild: {
        name: guild.name,
      },
    });

    await expect(invoke()).to.be.fulfilled;
  });

  it('user is owner, fulfilled', async () => {
    ws.sessions.set(client.id, guild.ownerId);

    const invoke = () => event.invoke(ws, client, {
      guildId: guild.id,
      partialGuild: {
        name: guild.name,
      },
    });

    await expect(invoke()).to.be.fulfilled;
  });

  it('guild name too short, rejected', async () => {
    ws.sessions.set(client.id, guild.ownerId);

    const invoke = () => event.invoke(ws, client, {
      guildId: guild.id,
      partialGuild: {
        name: ''
      },
    });

    await expect(invoke()).to.be.rejectedWith('minimum');
  });

  it('guild name too long, rejected', async () => {
    ws.sessions.set(client.id, guild.ownerId);

    const invoke = () => event.invoke(ws, client, {
      guildId: guild.id,
      partialGuild: {
        name: new Array(64).join('a')
      },
    });

    await expect(invoke()).to.be.rejectedWith('maximum');
  });

  it('name acronym updated', async () => {
    ws.sessions.set(client.id, guild.ownerId);

    await event.invoke(ws, client, {
      guildId: guild.id,
      partialGuild: {
        name: 'K E K K'
      },
    });

    guild = await Guild.findById(guild.id);

    expect(guild.nameAcronym).to.equal('KEK');
  });
});