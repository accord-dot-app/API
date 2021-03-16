import { WebSocket } from '../../src/api/websocket/websocket';
import Deps from '../../src/utils/deps';
import io from 'socket.io-client';
import { Message } from '../../src/data/models/message';
import { GuildMember } from '../../src/data/models/guild-member';
import { Guild } from '../../src/data/models/guild';
import { User } from '../../src/data/models/user';
import { Channel } from '../../src/data/models/channel';
import { API } from '../../src/api/server';
import VoiceServerUpdate from '../../src/api/websocket/ws-events/voice-state-update';
import { Mock } from '../mock';

describe('voice-server-update', () => {
  const client = io(`http://localhost:${process.env.PORT}`) as any;
  const event = new VoiceServerUpdate();
  const ws = new WebSocket();

  beforeEach(() => {
    Deps.get<API>(API);
    
    ws.sessions.set(client.id, 'user_1');
  });

  afterEach(() => ws.sessions.clear());
  after(async () => {
    client.disconnect();
    await Mock.cleanDB();
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
