import MessageUpdate from '../../src/api/websocket/ws-events/message-update';
import { WebSocket } from '../../src/api/websocket/websocket';
import Deps from '../../src/utils/deps';
import { expect } from 'chai';
import io from 'socket.io-client';
import { Mock } from '../mock';
import { GuildDocument } from '../../src/data/models/guild';
import { User, UserDocument } from '../../src/data/models/user';
import { API } from '../../src/api/server';
import { Lean } from '../types/entity-types';

describe('message-update', () => {
  const client = io(`http://localhost:${process.env.PORT}`) as any;;
  
  let event: MessageUpdate;
  let ws: WebSocket;
  let user: UserDocument;
  let guild: GuildDocument;
  let channelId: string;

  beforeEach(async () => {
    Deps.get<API>(API);

    event = new MessageUpdate();
    ws = Deps.get<WebSocket>(WebSocket);

    Mock.ioClient(client);
    
    guild = await Mock.guild();
    user = await User.findById(guild.members[1].userId);
    channelId = guild.channels[0]._id;

    ws.sessions.set(client.id, user.id);
  });

  afterEach(() => ws.sessions.clear());
  after(async () => {
    client.disconnect();
    await Mock.cleanDB();
  });

  it('user not author, rejected', async () => {
    const message = await Mock.message(user, channelId);
    
    await makeGuildOwner();

    await expect(updateMessage(message)).to.be.rejectedWith('Unauthorized');
  });

  it('message does not exist, rejected', async () => {    
    const result = () => event.invoke(ws, client, {
      messageId: '',
      partialMessage: {
        content: 'test',
      },
      withEmbed: false,
    });

    await expect(result()).to.be.rejectedWith('Message Not Found');
  });

  describe('validation', () => {
    it('content too short, rejected', async () => {    
      const message = await Mock.message(user, channelId);

      const result = () => event.invoke(ws, client, {
        messageId: message.id,
        partialMessage: {
          content: '',
        },
        withEmbed: false,
      });
  
      await expect(result()).to.be.rejectedWith('minimum');
    });
    it('content too long, rejected', async () => {   
      const message = await Mock.message(user, channelId);
      
      const result = () => event.invoke(ws, client, {
        messageId: message.id,
        partialMessage: {
          content: new Array(3002).join(' '),
        },
        withEmbed: false,
      });
  
      await expect(result()).to.be.rejectedWith('maximum');
    });
  });

  async function updateMessage(message: Lean.Message) {
    return event.invoke(ws, client, {
      messageId: message.id,
      partialMessage: {
        content: 'test',
      },
      withEmbed: true
    });
  }
  async function makeGuildOwner() {
    ws.sessions.set(client.id, guild.ownerId);
    await Mock.clearRolePerms(guild);
  }
});
