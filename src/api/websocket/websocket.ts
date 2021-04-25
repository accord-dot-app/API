import { Server } from 'http';
import { Server as SocketServer, Socket } from 'socket.io';
import Log from '../../utils/log';
import { WSEvent, WSEventParams } from './ws-events/ws-event';
import { resolve } from 'path';
import { readdirSync } from 'fs';
import { WSCooldowns } from './modules/ws-cooldowns';
import Deps from '../../utils/deps';

export class WebSocket {
  public events = new Map<keyof WSEventParams, WSEvent<keyof WSEventParams>>();
  public io: SocketServer;
  public sessions = new SessionManager();  

  public get connectedUserIds() {
    return Array.from(this.sessions.values());
  }

  constructor(private cooldowns = Deps.get<WSCooldowns>(WSCooldowns)) {}

  public async init(server: Server) {
    this.io = new SocketServer(server, {
      cors: {
        origin: `http://localhost:4200`,
        methods: ['GET', 'POST'],
        allowedHeaders: ['Authorization'],
        credentials: true,
      }
    });

    const dir = resolve(`${__dirname}/ws-events`);
    const files = readdirSync(dir);

    for (const file of files) {
      const Event = require(`./ws-events/${file}`).default;
      try {
        const event = new Event();
        this.events.set(event.on, event);
      } catch {}
    }

    Log.info(`Loaded ${this.events.size} handlers`, 'ws');

    this.io.on('connection', (client) => {
      for (const event of this.events.values())
        client.on(event.on, async (data: any) => {
          try {
            this.cooldowns.handle(client.id, event.on);
            await event.invoke.bind(event)(this, client, data);
          } catch (error) {
            client.send(`Server error on executing: ${event.on}\n${error.message}`);
          }
        });
    });

    Log.info('Started WebSocket', 'ws');
  }
}

export class SessionManager extends Map<string, string> {
  public get(key: string): string  {
    const userId = super.get(key);    
    if (!userId)
      throw new TypeError('User Not Logged In');

    const snowflakeRegex = /\d{18}/;
    if (!snowflakeRegex.test(userId))
      throw new TypeError('Spoofed ID Not Allowed');
    return userId;
  }

  public userId(client: Socket) {
    return this.get(client.id);
  }
}
