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
import { PermissionTypes } from '../../src/data/types/entity-types';
import { GuildMember } from '../../src/data/models/guild-member';

describe('ws-guard', () => {
  let client: any;
  let guard: WSGuard;

  let guild: GuildDocument;
  let user: UserDocument;
  let ws: WebSocket;

  beforeEach(async () => {
    Deps.get<API>(API);

    client = io(`http://localhost:${process.env.PORT}`) as any;
    ws = new WebSocket();
    guard = new WSGuard(
      new Channels(),
      new Roles(),
      ws,
    );    

    guild = await Mock.guild();
    user = await User.findById(guild.members[1].userId);

    ws.sessions.set(client.id, user.id);
  });

  afterEach(() => ws.sessions.clear());
  after(async () => {
    client.disconnect();
    await Mock.cleanDB();
  });

  it('validateIsOwner, is not owner, throws error', async () => {
    const result = () => guard.validateIsOwner(client, guild.id);

    await expect(result()).to.be.rejectedWith('Only Guild Owner Can Do This');
  });

  it('validateIsOwner, is owner, fulfilled', async () => {
    ws.sessions.set(client.id, guild.ownerId);

    const result = () => guard.validateIsOwner(client, guild.id);

    await expect(result()).to.be.fulfilled;
  });

  it('validateIsUser, is impostor, throws error', async () => {
    const result = () => guard.validateIsUser(client, guild.ownerId);

    expect(result).to.throw('Unauthorized');
  });

  it('validateIsUser, is user, fulfilled', async () => {
    const result = () => guard.validateIsUser(client, user.id);

    expect(result).to.not.throw;
  });

  it('canAccessChannel, text channel, default perms, fulfilled', async () => {
    const textChannelId = guild.channels[0]._id;
    const result = () => guard.canAccessChannel(client, textChannelId);

    await expect(result()).to.be.fulfilled;
  });

  it('canAccessChannel, text channel, no perms, rejected', async () => {
    await Mock.clearRolePerms(guild);
    const textChannelId = guild.channels[0]._id;

    const result = () => guard.canAccessChannel(client, textChannelId);

    await expect(result()).to.be.rejectedWith('Missing Permissions');
  });

  it('canAccessChannel, text channel, guild owner, fulfilled', async () => {
    await makeGuildOwner();
    const textChannelId = guild.channels[0]._id;

    const result = () => guard.canAccessChannel(client, textChannelId);

    await expect(result()).to.be.fulfilled;
  });

  it('canAccessChannel, voice channel, no perms, rejected', async () => {
    await Mock.clearRolePerms(guild);
    const voiceChannelId = guild.channels[1]._id;

    const result = () => guard.canAccessChannel(client, voiceChannelId);

    await expect(result()).to.be.rejectedWith('Missing Permissions');
  });

  it('canAccessChannel, voice channel, default perms, fulfilled', async () => {
    const voiceChannelId = guild.channels[1]._id;

    const result = () => guard.canAccessChannel(client, voiceChannelId);

    await expect(result()).to.be.fulfilled;
  });

  it('canAccessChannel, voice channel, guild owner, fulfilled', async () => {
    await makeGuildOwner();
    const voiceChannelId = guild.channels[1]._id;

    const result = () => guard.canAccessChannel(client, voiceChannelId);

    await expect(result()).to.be.fulfilled;
  });

  it('canAccessChannel, dm, not a member, rejected', async () => {
    const dm = await Mock.channel('DM');

    const result = () => guard.canAccessChannel(client, dm._id);

    await expect(result()).to.be.rejectedWith('Not DM Member');
  });

  it('canAccessChannel, dm, is member, fulfilled', async () => {
    const dm = await Mock.channel('DM');
    dm.memberIds.push(user.id);
    await dm.updateOne(dm);

    const result = () => guard.canAccessChannel(client, dm.id);

    await expect(result()).to.be.fulfilled;
  });

  it('can, not a guild member, rejected', async () => {
    await GuildMember.deleteOne({ userId: user.id });

    const result = () => guard.can(client, guild.id, PermissionTypes.Text.SEND_MESSAGES);

    await expect(result()).to.be.rejectedWith('Member Not Found');
  });

  it('can, guild does not exist, rejected', async () => {
    await guild.remove();

    const result = () => guard.can(client, guild.id, PermissionTypes.Text.SEND_MESSAGES);

    await expect(result()).to.be.rejectedWith('Guild Not Found');
  });

  it('can, missing perms, rejected', async () => {
    await Mock.clearRolePerms(guild);

    const result = () => guard.can(client, guild.id, PermissionTypes.Text.SEND_MESSAGES);

    await expect(result()).to.be.rejectedWith('Missing Permissions');
  });

  it('can, send messages, default perms, fulfilled', async () => {
    const result = () => guard.can(client, guild.id, PermissionTypes.Text.SEND_MESSAGES);

    await expect(result()).to.be.fulfilled;
  });

  it('can, is owner, fulfilled', async () => {
    await makeGuildOwner();

    const result = () => guard.can(client, guild.id, PermissionTypes.Text.SEND_MESSAGES);

    await expect(result()).to.be.fulfilled;
  });

  async function makeGuildOwner() {
    ws.sessions.set(client.id, guild.ownerId);
    await Mock.clearRolePerms(guild);
  }
});
