import InviteDelete from '../../src/api/websocket/ws-events/invite-delete';
import { WebSocket } from '../../src/api/websocket/websocket';
import Deps from '../../src/utils/deps';
import io from 'socket.io-client';
import { Mock } from '../mock';
import { API } from '../../src/api/server';
import { User, UserDocument } from '../../src/data/models/user';
import { GuildDocument } from '../../src/data/models/guild';
import { Invite } from '../../src/data/models/invite';
import { expect } from 'chai';
import { generateSnowflake } from '../../src/data/snowflake-entity';

describe('INIVTE_DELETE', () => {
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

  afterEach(() => ws.sessions.clear());
  after(async () => {
    client.disconnect();
    await Mock.cleanDB();
  });

  it('guild member, default perms, rejected', async () => {
    let invite = await Mock.invite(guild.id);

    const result = () => event.invoke(ws, client, {
      inviteCode: invite._id,
    });

    await expect(result()).to.be.rejectedWith('Missing Permissions');
  });

  it('guild member, has perms, fulfilled', async () => {
    let invite = await Mock.invite(guild.id);

    const result = () => event.invoke(ws, client, {
      inviteCode: invite._id,
    });

    await expect(result()).to.be.fulfilled('');
  });

  it('invite created then successfully deleted', async () => {
    let invite = await Mock.invite(guild.id);

    await event.invoke(ws, client, {
      inviteCode: invite._id,
    });

    invite = await Invite.findById(guild.id);
    expect(invite).to.be.null;
  });

  it('invite does not exist, rejected', async () => {
    const invite = await Mock.invite(guild.id);

    const result = () => event.invoke(ws, client, {
      inviteCode: generateSnowflake(),
    });

    await expect(result()).to.be.rejectedWith('Invite Not Found');
  });
});
