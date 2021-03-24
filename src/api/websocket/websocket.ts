import { Server } from 'http';
import { Server as SocketServer, Socket } from 'socket.io';
import Log from '../../utils/log';
import { WSEvent, WSEventParams } from './ws-events/ws-event';
import { resolve } from 'path';
import { readdirSync } from 'fs';

export class WebSocket {
  events = new Map<keyof WSEventParams, WSEvent<keyof WSEventParams>>();
  io: SocketServer;
  
  sessions = new SessionManager();
  public readonly cooldowns = new Map<string, EventLog[]>();

  get connectedUserIds() {
    return Array.from(this.sessions.values());
  }

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
            this.handleCooldown(client, event.on);
            await event.invoke.bind(event)(this, client, data);

            client.send(`SENT - ${event.on}`);
          } catch (error) {
            client.send(`Server error on executing: ${event.on}\n${error.message}`);
          }
        });
    });

    Log.info('Started WebSocket', 'ws');
  }

  private handleCooldown(client: Socket, eventName: keyof WSEventParams) {
    let cooldowns = this.getCooldown(client.id);
    cooldowns.push({ timestamp: new Date().getTime(), eventName });

    return;

    const { totalMsDifference } = this.handleCooldowns(cooldowns, eventName);
      
    const spamThreshold = 1000;
    const maxEventsPerSecond = 10;
    if (this.cooldowns.size > maxEventsPerSecond
      && totalMsDifference < spamThreshold)
      throw new TypeError('You are being rate limited');

    const timeToDelete = 60 * 1000;
    setTimeout(() => {
      const overOneMinuteAgo = (l: EventLog) => (new Date().getTime() - l.timestamp) > timeToDelete;
      cooldowns = cooldowns.filter(overOneMinuteAgo);
    }, timeToDelete);
  }

  private handleCooldowns(cooldowns: EventLog[], eventName: keyof WSEventParams) {
    const event = this.events.get(eventName);
    let totalMsDifference = new Date().getTime();
    let totalEventCooldown = 0;

    for (const log of cooldowns) {
      totalMsDifference -= log.timestamp;
      if (log.eventName !== eventName) continue;

      totalEventCooldown += event?.cooldown ?? 0;
    }

    if (totalEventCooldown > totalMsDifference)
      throw new TypeError('You are being rate limited');

    return { totalMsDifference };
  }

  private getCooldown(clientId: string) {
    return this.cooldowns.get(clientId)
      ?? this.cooldowns
        .set(clientId, [])
        .get(clientId) as EventLog[];
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

interface EventLog {
  timestamp: number;
  eventName: keyof WSEventParams;
}
