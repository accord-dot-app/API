import GuildMemberUpdate from '../../../src/api/websocket/ws-events/guild-member-update';
import { WebSocket } from '../../../src/api/websocket/websocket';
import io from 'socket.io-client';
import { Mock } from '../../mock/mock';
import { GuildDocument } from '../../../src/data/models/guild';
import { expect } from 'chai';
import { GuildMember, GuildMemberDocument } from '../../../src/data/models/guild-member';
import { Role, RoleDocument } from '../../../src/data/models/role';
import { PermissionTypes } from '../../../src/data/types/entity-types';

describe('guild-member-update', () => {
  const client = io(`http://localhost:${process.env.PORT}`) as any;

  let event: GuildMemberUpdate;
  let ws: WebSocket;
  let member: GuildMemberDocument;
  let guild: GuildDocument;
  let role: RoleDocument;

  beforeEach(async() => {
    ({ event, ws, member, guild, role } = await Mock.defaultSetup(client, GuildMemberUpdate));
  });

  afterEach(async () => await Mock.afterEach(ws));
  after(async () => await Mock.after(client));

  it('is noob member, missing permissions', async () => {
    await expect(guildMemberUpdate()).to.be.rejectedWith('Missing Permissions');
  });

  it('is role manager, fulfilled', async () => {
    await makeGuildManager();
    await expect(guildMemberUpdate()).to.be.fulfilled;
  });

  it('is role manager, fulfilled', async () => {
    await makeGuildManager();
    await expect(guildMemberUpdate()).to.be.fulfilled;
  });

  it('managed has same roles, rejected', async () => {
    member = await Mock.guildMember(await Mock.user(), guild);
    await makeGuildManager();

    await expect(guildMemberUpdate()).to.be.rejectedWith('Member has higher roles');
  });

  it('managed is owner, rejected', async () => {
    member = new GuildMember(guild.members[0]);
    await makeGuildManager();
    
    await expect(guildMemberUpdate()).to.be.rejectedWith('Member has higher roles');
  });

  it('roles changed, still has @everyone role', async () => {
    await makeGuildManager();
    await guildMemberUpdate();

    member = await GuildMember.findById(member._id);
    role = await Role.findById(member.roleIds[0]);

    expect(role.name).to.equal('@everyone');
  });

  function makeGuildManager() {
    return Mock.giveEveryonePerms(role, PermissionTypes.General.MANAGE_ROLES);
  }

  function guildMemberUpdate() {
    return event.invoke(ws, client, {
      memberId: member._id,
      partialMember: {
        roleIds: []
      },
    });
  }
});
