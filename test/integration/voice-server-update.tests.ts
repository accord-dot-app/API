import { WebSocket } from '../../src/api/websocket/websocket';
import Deps from '../../src/utils/deps';
import { Socket } from 'socket.io';
import io from 'socket.io-client';
import { Message } from '../../src/data/models/message';
import { GuildMember } from '../../src/data/models/guild-member';
import { Mock } from '../mock';
import { Guild } from '../../src/data/models/guild';
import { User } from '../../src/data/models/user';
import { Channel } from '../../src/data/models/channel';
import { API } from '../../src/api/server';
import VoiceServerUpdate from '../../src/api/websocket/ws-events/voice-state-update';

const mock = new Mock();

describe('voice-server-update', () => {
  let client: Socket;
  let event: VoiceServerUpdate;
  let ws: WebSocket;

  beforeEach(() => {
    Deps.get<API>(API);

    client = io(`http://localhost:${process.env.PORT}`) as any;
    event = new VoiceServerUpdate();
    ws = Deps.get<WebSocket>(WebSocket);
    
    ws.sessions.set(client.id, 'user_1');
  });

  afterEach(async () => {
    await Message.deleteMany({});
  });

  describe('invoke', () => {
  });

  after(async () => {
    client.disconnect();
    
    await Channel.deleteMany({});
    await Guild.deleteMany({});
    await GuildMember.deleteMany({});
    await User.deleteMany({});
  });
});
