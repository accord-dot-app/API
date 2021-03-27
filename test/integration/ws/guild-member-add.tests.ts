import GuildMemberAdd from '../../../src/api/websocket/ws-events/guild-member-add';
import { WebSocket } from '../../../src/api/websocket/websocket';
import Deps from '../../../src/utils/deps';
import io from 'socket.io-client';
import { Mock } from '../../mock';
import { API } from '../../../src/api/server';
import { User, UserDocument } from '../../../src/data/models/user';
import { Guild, GuildDocument } from '../../../src/data/models/guild';
import { Invite } from '../../../src/data/models/invite';
import { expect, spy } from 'chai';

describe('guild-member-add', () => {
  const client = io(`http://localhost:${process.env.PORT}`) as any;
  let event: GuildMemberAdd;
  let ws: WebSocket;

  let user: UserDocument;
  let guild: GuildDocument;

  beforeEach(async () => {
    Deps.get<API>(API);

    event = new GuildMemberAdd();
    ws = Deps.get<WebSocket>(WebSocket);

    guild = await Mock.guild(); 
    user = await User.findById(guild.members[1].userId);

    Mock.ioClient(client);
    
    ws.sessions.set(client.id, user._id);
  });

  afterEach(async () => await Mock.afterEach(ws));
  after(async () => await Mock.after(client));

  it('valid invite and code, fulfilled', async () => {
    const invite = await Mock.invite(guild.id);

    const result = () => event.invoke(ws, client, {
      inviteCode: invite._id,
    });

    await expect(result()).to.be.fulfilled;
  });

  it('valid invite and code, member added to guild', async () => {
    const invite = await Mock.invite(guild.id);

    const oldMemberCount = guild.members.length;
    await event.invoke(ws, client, {
      inviteCode: invite._id,
    });

    guild = await Guild.findById(guild.id);
    expect(guild.members.length).to.be.greaterThan(oldMemberCount);
  });

  it('valid invite and code, guild added to user guilds', async () => {
    const invite = await Mock.invite(guild.id);

    await event.invoke(ws, client, {
      inviteCode: invite._id,
    });

    user = await User.findById(user.id);
    expect(user.guilds).to.include(guild.id);
  });

  it('invite has reached max uses, is deleted', async () => {
    let invite = await Mock.invite(guild.id, { maxUses: 1 });

    await event.invoke(ws, client, {
      inviteCode: invite._id,
    });
    invite = await Invite.findById(invite._id);
    expect(invite).to.be.null;
  });

  it('invite expired, rejected', async () => {
    const invite = await Mock.invite(guild._id, {
      expiresAt: new Date(0)
    });

    const result = () => event.invoke(ws, client, {
      inviteCode: invite._id,
    });

    await expect(result()).to.be.rejectedWith('Invite Expired');
  });

  it('invalid invite code, rejected', async () => {
    const result = () => event.invoke(ws, client, {
      inviteCode: '',
    });

    await expect(result()).to.be.rejectedWith('Invite Not Found');
  });

  it('valid invite and code, emits to guild room', async () => {
    const invite = await Mock.invite(guild.id);
    const to = spy.on(ws.io, 'to');

    await event.invoke(ws, client, {
      inviteCode: invite._id,
    });

    guild = await Guild.findById(guild.id);
    expect(to).to.have.been.called.with(guild._id);
  });

  it.skip('valid invite and code, emits guild join event', async () => {
    const invite = await Mock.invite(guild.id);
    const to = spy.on(ws.io.to(guild._id), 'emit');

    await event.invoke(ws, client, {
      inviteCode: invite._id,
    });

    guild = await Guild.findById(guild.id);
    expect(to).to.have.been.called.with('GUILD_JOIN');
  });
});
