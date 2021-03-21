import Deps from '../../src/utils/deps';
import io from 'socket.io-client';
import { Mock } from '../mock';
import { GuildDocument } from '../../src/data/models/guild';
import { User, UserDocument } from '../../src/data/models/user';
import { API } from '../../src/api/server';
import { WSGuard } from '../../src/api/modules/ws-guard';
import { expect } from 'chai';
import { WebSocket } from '../../src/api/websocket/websocket';
import Channels from '../../src/data/channels';
import Roles from '../../src/data/roles';
import { Lean, PermissionTypes } from '../../src/data/types/entity-types';
import { GuildMember } from '../../src/data/models/guild-member';
import { Role } from '../../src/data/models/role';
import Users from '../../src/data/users';

describe('ws-guard', () => {
  let client: any;
  let guard: WSGuard;

  let guild: GuildDocument;
  let user: UserDocument;
  let ws: WebSocket;
  let textChannelId: string;
  let voiceChannelId: string;

  beforeEach(async () => {
    Deps.get<API>(API);

    client = io(`http://localhost:${process.env.PORT}`) as any;
    ws = new WebSocket();
    guard = new WSGuard(
      new Channels(),
      new Roles(),
      new Users(),
      ws,
    );    

    guild = await Mock.guild();
    user = await User.findById(guild.members[1].userId);

    textChannelId = guild.channels[0]._id;
    voiceChannelId = guild.channels[1]._id;

    ws.sessions.set(client.id, user.id);
  });

  afterEach(async () => await Mock.afterEach(ws));
  after(async () => await Mock.after(client));

  it('validateIsOwner, is not owner, throws error', async () => {
    await expect(
      guard.validateIsOwner(client, guild.id)
    ).to.be.rejectedWith('Only Guild Owner Can Do This');
  });

  it('validateIsOwner, is owner, fulfilled', async () => {
    ws.sessions.set(client.id, guild.ownerId);

    await expect(
      guard.validateIsOwner(client, guild.id)
    ).to.be.fulfilled;
  });

  it('validateIsUser, is impostor, throws error', async () => {
    const result = () => guard.validateIsUser(client, guild.ownerId);
    expect(result).to.throw('Unauthorized');
  });

  it('validateIsUser, is user, fulfilled', async () => {
    const result = () => guard.validateIsUser(client, user.id);
    expect(result).to.not.throw;
  });

  it('can access text channel, default perms, fulfilled', async () => {
    await expect(
      guard.canAccessChannel(client, textChannelId)
    ).to.be.fulfilled;
  });

  it('can access text channel, no perms, rejected', async () => {
    await Mock.clearRolePerms(guild);

    await expect(
      guard.canAccessChannel(client, textChannelId)
    ).to.be.rejectedWith('Missing Permissions');
  });

  it('can access channel without use, can only read messages, fulfilled', async () => {
    await Mock.clearRolePerms(guild);

    await updateEveryoneRole(PermissionTypes.Text.READ_MESSAGES);

    await expect(
      guard.canAccessChannel(client, textChannelId)
    ).to.be.fulfilled;
  });

  it('can access channel with use, can only read messages, rejected', async () => {
    await Mock.clearRolePerms(guild);

    await updateEveryoneRole(PermissionTypes.Text.READ_MESSAGES);

    await expect(
      guard.canAccessChannel(client, textChannelId)
    ).to.be.fulfilled;
  });

  it('can access channel with use, can send and read messages, rejected', async () => {
    await Mock.clearRolePerms(guild);

    await updateEveryoneRole(PermissionTypes.Text.READ_MESSAGES
      | PermissionTypes.Text.SEND_MESSAGES);

    await expect(
      guard.canAccessChannel(client, textChannelId)
    ).to.be.fulfilled;
  });

  it('can access text channel, guild admin, fulfilled', async () => {
    await Mock.giveEveryoneAdmin(guild);

    await expect(
      guard.canAccessChannel(client, textChannelId)
    ).to.be.fulfilled;
  });

  it('can access text channel, guild owner, fulfilled', async () => {
    await makeGuildOwner();

    await expect(
      guard.canAccessChannel(client, textChannelId)
    ).to.be.fulfilled;
  });

  it('can access voice channel, no perms, rejected', async () => {
    await Mock.clearRolePerms(guild);

    await expect(
      guard.canAccessChannel(client, voiceChannelId)
    ).to.be.rejectedWith('Missing Permissions');
  });

  it('can access voice channel with use, can only connect, rejected', async () => {
    await Mock.clearRolePerms(guild);
    await updateEveryoneRole(PermissionTypes.Voice.CONNECT);

    await expect(
      guard.canAccessChannel(client, voiceChannelId)
    ).to.be.fulfilled;
  });

  it('can access voice channel with use, can connect and speak, fulfilled', async () => {
    await Mock.clearRolePerms(guild);

    await updateEveryoneRole(PermissionTypes.Voice.CONNECT
      | PermissionTypes.Voice.SPEAK);

    await expect(
      guard.canAccessChannel(client, voiceChannelId)
    ).to.be.fulfilled;
  });

  it('can access voice channel, default perms, fulfilled', async () => {
    await expect(
      guard.canAccessChannel(client, voiceChannelId)
    ).to.be.fulfilled;
  });

  it('can access voice channel, guild owner, fulfilled', async () => {
    await makeGuildOwner();

    await expect(
      guard.canAccessChannel(client, voiceChannelId)
    ).to.be.fulfilled;
  });

  it('can access channel, dm, not a member, rejected', async () => {
    const dm = await Mock.channel('DM');

    await expect(
      guard.canAccessChannel(client, dm._id)
    ).to.be.rejectedWith('Not DM Member');
  });

  it('can access channel, dm, is member, fulfilled', async () => {
    const dm = await Mock.channel('DM');
    dm.memberIds.push(user.id);
    await dm.updateOne(dm);

    await expect(
      guard.canAccessChannel(client, dm.id)
    ).to.be.fulfilled;
  });

  it('can, not a guild member, rejected', async () => {
    await GuildMember.deleteOne({ userId: user.id });

    await expect(
      guard.can(client, guild.id, PermissionTypes.Text.SEND_MESSAGES)
    ).to.be.rejectedWith('Member Not Found');
  });

  it('can, guild does not exist, rejected', async () => {
    await guild.remove();

    await expect(
      guard.can(client, guild.id, PermissionTypes.Text.SEND_MESSAGES)
    ).to.be.rejectedWith('Guild Not Found');
  });

  it('can, missing perms, rejected', async () => {
    await Mock.clearRolePerms(guild);

    await expect(
      guard.can(client, guild.id, PermissionTypes.Text.SEND_MESSAGES)
    ).to.be.rejectedWith('Missing Permissions');
  });

  it('can, send messages, default perms, fulfilled', async () => {
    await expect(
      guard.can(client, guild.id, PermissionTypes.Text.SEND_MESSAGES)
    ).to.be.fulfilled;
  });

  it('can, is owner, fulfilled', async () => {
    await makeGuildOwner();

    await expect(
      guard.can(client, guild.id, PermissionTypes.Text.SEND_MESSAGES)
    ).to.be.fulfilled;
  });

  async function updateEveryoneRole(permissions: PermissionTypes.Permission) {
    const role = guild.roles[0];
    await Role.updateOne(
      { _id: role._id },
      { permissions },
    );
  }

  async function makeGuildOwner() {
    ws.sessions.set(client.id, guild.ownerId);
    await Mock.clearRolePerms(guild);
  }
});
