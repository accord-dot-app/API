import { WebSocket } from '../../src/api/websocket/websocket';
import Deps from '../../src/utils/deps';
import io from 'socket.io-client';
import { API } from '../../src/api/server';
import ChannelCreate from '../../src/api/websocket/ws-events/channel-create';
import { Channel } from '../../src/data/models/channel';

describe('channel-create', () => {
  const client = io(`http://localhost:${process.env.PORT}`) as any;;
  let ws: WebSocket;
  let event: ChannelCreate;

  beforeEach(() => {
    Deps.get<API>(API);

    ws = Deps.get<WebSocket>(WebSocket);
    event = new ChannelCreate();
    
    ws.sessions.set(client.id, 'user_1');
  });

  afterEach(async () => await Channel.deleteMany({}));
});
