import { WebSocket } from '../../../src/api/websocket/websocket';
import io from 'socket.io-client';
import GuildUpdate from '../../../src/api/websocket/ws-events/guild-update';
import { Guild, GuildDocument } from '../../../src/data/models/guild';
import { UserDocument } from '../../../src/data/models/user';
import { Mock } from '../../mock/mock';
import { expect } from 'chai';
import { PermissionTypes } from '../../../src/data/types/entity-types';
import { GuildMemberDocument } from '../../../src/data/models/guild-member';
import { generateSnowflake } from '../../../src/data/snowflake-entity';
import { Partial } from '../../../src/data/types/ws-types';

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
    await Mock.clearRolePerms(guild);

    await expect(guildUpdate({})).to.be.rejectedWith('Missing Permissions');
  });

  it('user has MANAGE_GUILD perms, fulfilled', async () => {
    await Mock.givePerm(guild, member, PermissionTypes.All.MANAGE_GUILD);

    await expect(guildUpdate({})).to.be.fulfilled;
  });

  it('user is owner, fulfilled', async () => {
    makeOwner();

    await expect(guildUpdate({})).to.be.fulfilled;
  });

  it('name acronym updated', async () => {
    makeOwner();

    await guildUpdate({ name: 'K E K K' });

    guild = await Guild.findById(guild.id);

    expect(guild.nameAcronym).to.equal('KEK');
  });

  it('contains banned keys, rejected', async () => {
    makeOwner();
    await expect(guildUpdate({ id: '123' })).to.be.rejectedWith('Contains readonly values');
  });

  function guildUpdate(partialGuild: Partial.Guild) {
    return event.invoke(ws, client, {
      guildId: guild.id,
      partialGuild,
    });
  }

  function makeOwner() {
    ws.sessions.set(client.id, guild.ownerId);
  }  
});