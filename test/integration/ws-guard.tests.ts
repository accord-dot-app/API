import Deps from '../../src/utils/deps';
import io from 'socket.io-client';
import { Mock } from '../mock';
import { GuildDocument } from '../../src/data/models/guild';
import { User, UserDocument } from '../../src/data/models/user';
import { API } from '../../src/api/server';
import { WSGuard } from '../../src/api/modules/ws-guard';
import { expect } from 'chai';
import { WebSocket } from '../../src/api/websocket/websocket';

describe('ws-guard', () => {
  const client: SocketIOClient.Socket = io(`http://localhost:${process.env.PORT}`) as any;
  
  let guard: WSGuard;
  let guild: GuildDocument;
  let user: UserDocument;
  let ws: WebSocket;

  beforeEach(async () => {
    Deps.get<API>(API);

    guard = new WSGuard();

    guild = await Mock.guild();
    user = await User.findById(guild.members[1].userId);    

    ws = new WebSocket();
    ws.sessions.set(client.id, user.id);
    console.log(ws.sessions);
    
  });

  it('validateIsOwner, is not owner, throws error', async () => {
    const result = () => guard.validateIsOwner(client, user.id);

    await expect(result()).to.be.rejectedWith('Only Guild Owner Can Do This');
  });
});
