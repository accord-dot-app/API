import { WebSocket } from '../../../src/api/websocket/websocket';
import Deps from '../../../src/utils/deps';
import io from 'socket.io-client';
import { API } from '../../../src/api/server';
import GuildUpdate from '../../../src/api/websocket/ws-events/guild-update';
import { Guild, GuildDocument } from '../../../src/data/models/guild';
import { User, UserDocument } from '../../../src/data/models/user';
import { Mock } from '../../mock';
import { expect } from 'chai';
import { PermissionTypes } from '../../../src/data/types/entity-types';
import { GuildMember, GuildMemberDocument } from '../../../src/data/models/guild-member';
import { Partial } from '../../../src/data/types/ws-types';
import { generateSnowflake } from '../../../src/data/snowflake-entity';

describe('guild-update', () => {
  const client = io(`http://localhost:${process.env.PORT}`) as any;
  let ws: WebSocket;
  let event: GuildUpdate;

  let guild: GuildDocument;
  let user: UserDocument;
  let member: GuildMemberDocument;

  beforeEach(async () => {
    ({ ws, event, guild, member, user } = await Mock.defaultSetup(client, GuildUpdate));
  });

  afterEach(async () => Mock.afterEach(ws));
  after(async () => await Mock.after(client));

  it('spoofed user, rejected', async () => {
    ws.sessions.set(client.id, generateSnowflake());

    await expect(guildUpdate(guild)).to.be.rejectedWith('Member Not Found');
  });

  it('member has insufficient perms, rejected', async () => {
    await Mock.clearRolePerms(guild.id);

    await expect(guildUpdate(guild)).to.be.rejectedWith('Missing Permissions');
  });

  it('user has MANAGE_GUILD perms, fulfilled', async () => {
    const role = await Mock.role(guild.id, PermissionTypes.General.MANAGE_GUILD);
    await member.update({
      $push: { roleIds: role._id },
    });

    await expect(guildUpdate(guild)).to.be.fulfilled;
  });

  it('user is owner, fulfilled', async () => {
    ws.sessions.set(client.id, guild.ownerId);

    await expect(guildUpdate(guild)).to.be.fulfilled;
  });

  it('name acronym updated', async () => {
    ws.sessions.set(client.id, guild.ownerId);

    await guildUpdate({ name: 'K E K K' });

    guild = await Guild.findById(guild.id);

    expect(guild.nameAcronym).to.equal('KEK');
  });

  function guildUpdate(partialGuild: Partial.Guild) {
    return event.invoke(ws, client, {
      guildId: guild.id,
      partialGuild,
    });
  }
});