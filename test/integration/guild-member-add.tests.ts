import GuildMemberAdd from '../../src/api/websocket/ws-events/guild-member-add';
import { WebSocket } from '../../src/api/websocket/websocket';
import Deps from '../../src/utils/deps';
import io from 'socket.io-client';
import { Mock } from '../mock';
import { API } from '../../src/api/server';
import { UserDocument } from '../../src/data/models/user';
import { Guild, GuildDocument } from '../../src/data/models/guild';
import { expect } from 'chai';

describe('guild-member-add', () => {
  const client = io(`http://localhost:${process.env.PORT}`) as any;;
  let event: GuildMemberAdd;
  let ws: WebSocket;

  let user: UserDocument;
  let guild: GuildDocument;

  beforeEach(async () => {
    Deps.get<API>(API);

    event = new GuildMemberAdd();
    ws = Deps.get<WebSocket>(WebSocket);

    guild = await Mock.guild(); 
    user = await Guild.findById(guild.members[1].userId);
    
    ws.sessions.set(client.id, user._id);
  });

  afterEach(() => ws.sessions.clear());
  after(async () => {
    client.disconnect();
    await Mock.cleanDB();
  });

  it('fulfilled', async () => {
    const invite = await Mock.invite(guild.id);
    invite.

    const result = () => event.invoke(ws, client, {
      
    });

    await expect(result()).to.be.fulfilled;
  });

  it('rejected', async () => {
    const result = () => event.invoke(ws, client, {
      
    });

    await expect(result()).to.be.rejectedWith();
  });
});
