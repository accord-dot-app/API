import InviteDelete from '../../src/api/websocket/ws-events/invite-delete';
import { WebSocket } from '../../src/api/websocket/websocket';
import Deps from '../../src/utils/deps';
import io from 'socket.io-client';
import { Mock } from '../mock';
import { API } from '../../src/api/server';
import { User, UserDocument } from '../../src/data/models/user';
import { GuildDocument } from '../../src/data/models/guild';
import { generateInviteCode, Invite } from '../../src/data/models/invite';
import { expect } from 'chai';
import { generateSnowflake } from '../../src/data/snowflake-entity';
import { Role } from '../../src/data/models/role';

describe('invite-delete', () => {
  const client = io(`http://localhost:${process.env.PORT}`) as any;;
  let event: InviteDelete;
  let ws: WebSocket;

  let user: UserDocument;
  let guild: GuildDocument;

  beforeEach(async () => {
    Deps.get<API>(API);

    event = new InviteDelete();
    ws = Deps.get<WebSocket>(WebSocket);

    guild = await Mock.guild(); 
    user = await User.findById(guild.members[1].userId);
    
    ws.sessions.set(client.id, user._id);
  });

  afterEach(async () => await Mock.afterEach(ws));
  after(async () => await Mock.after(client));

  it('guild member deletes invite, default perms, fulfilled', async () => {
    const invite = await Mock.invite(guild.id);

    const result = () => event.invoke(ws, client, {
      inviteCode: invite._id,
    });

    await expect(result()).to.be.fulfilled;
  });

  it('guild member deletes invite, no perms, rejected', async () => {
    await Mock.clearRolePerms(guild);
    const invite = await Mock.invite(guild.id);

    const result = () => event.invoke(ws, client, {
      inviteCode: invite._id,
    });

    await expect(result()).to.be.rejectedWith('Missing Permissions');
  });

  it('guild owner deletes invite, fulfilled', async () => {
    await Mock.clearRolePerms(guild);
    ws.sessions.set(client.id, guild.ownerId);

    const invite = await Mock.invite(guild.id);

    const result = () => event.invoke(ws, client, {
      inviteCode: invite._id,
    });

    await expect(result()).to.be.fulfilled;
  });

  it('guild member, has perms, fulfilled', async () => {
    const invite = await Mock.invite(guild.id);

    const result = () => event.invoke(ws, client, {
      inviteCode: invite._id,
    });

    await expect(result()).to.be.fulfilled;
  });

  it('invite deleted from db', async () => {
    let invite = await Mock.invite(guild.id);

    await event.invoke(ws, client, {
      inviteCode: invite._id,
    });

    invite = await Invite.findById(guild.id);
    expect(invite).to.be.null;
  });

  it('invite does not exist, rejected', async () => {
    const result = () => event.invoke(ws, client, {
      inviteCode: generateInviteCode(),
    });

    await expect(result()).to.be.rejectedWith('Invite Not Found');
  });
});
