import { WebSocket } from '../../src/api/websocket/websocket';
import io from 'socket.io-client';
import GuildCreate from '../../src/api/websocket/ws-events/guild-create';
import { Guild, GuildDocument } from '../../src/data/models/guild';
import { UserDocument } from '../../src/data/models/user';
import { Mock } from '../mock';
import { expect } from 'chai';
import { PermissionTypes } from '../../src/data/types/entity-types';
import { GuildMemberDocument } from '../../src/data/models/guild-member';
import { Partial } from '../../src/data/types/ws-types';
import { generateSnowflake } from '../../src/data/snowflake-entity';

describe('guild-create', () => {
  const client = io(`http://localhost:${process.env.PORT}`) as any;
  let ws: WebSocket;
  let event: GuildCreate;

  let user: UserDocument;
  let member: GuildMemberDocument;

  beforeEach(async () => {
    ({ ws, event, member, user } = await Mock.defaultSetup(client, GuildCreate));
  });

  afterEach(async () => Mock.afterEach(ws));
  after(async () => await Mock.after(client));

  it('member has insufficient perms, rejected', async () => {


    await expect(guildCreate()).to.be.rejectedWith('Missing Permissions');
  });

  it('user has MANAGE_GUILD perms, fulfilled', async () => {
    const role = await Mock.role(guild.id, PermissionTypes.General.MANAGE_GUILD);
    await member.update({
      $push: { roleIds: role._id },
    });

    await expect(guildCreate()).to.be.fulfilled;
  });

  it('user is owner, fulfilled', async () => {
    ws.sessions.set(client.id, guild.ownerId);

    await expect(guildCreate()).to.be.fulfilled;
  });

  it('name acronym updated', async () => {
    ws.sessions.set(client.id, guild.ownerId);

    await guildCreate({ name: 'K E K K' });

    guild = await Guild.findById(guild.id);

    expect(guild.nameAcronym).to.equal('KEK');
  });

  function guildCreate(partialGuild: Partial.Guild) {
    return event.invoke(ws, client, {
      partialGuild,
    });
  }
});