import { Server } from 'http';
import { Server as SocketServer } from 'socket.io';
import Log from '../../utils/log';
import { WSEvent, WSEventParams } from './ws-events/ws-event';
import { resolve } from 'path';
import { readdirSync } from 'fs';

export class WebSocket {
  events: WSEvent<keyof WSEventParams>[] = [];
  io: SocketServer;
  
  sessions = new SessionManager();

  get connectedUserIds() {
    return Array.from(this.sessions.values());
  }

  init(server: Server) {
    this.io = new SocketServer(server);

    const dir = resolve(`${__dirname}/ws-events`);
    const files = readdirSync(dir);

    for (const file of files) {
      const Event = require(`./ws-events/${file}`).default;
      try {
        const event = new Event();
        this.events.push(event);
      } catch {}
    }

    Log.info(`Loaded ${this.events.length} handlers`, 'ws');

    this.io.on('connection', (client) => {
      for (const event of this.events)
        client.on(event.on, async (data) => {
          try {
            await event.invoke.bind(event)(this, client, data);
            client.send(`SENT - ${event.on}`);
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
}
