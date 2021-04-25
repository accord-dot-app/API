import { WSEventParams } from '../ws-events/ws-event';

// if bot user:
// -> separate cooldowns for each guild / room ID

export class WSCooldowns {
  public readonly active = new Map<string, EventLog[]>();

  public handle(clientId: string, eventName: keyof WSEventParams) {
    this.add(clientId, eventName);

    const clientEvents = this.get(clientId).length;
    const maxEvents = 100;
    if (clientEvents > maxEvents)
      throw new TypeError('You are doing too many things at once!');

    this.prune(clientId);
  }

  private get(clientId: string) {
    return this.active.get(clientId)
      ?? this.active
        .set(clientId, [])
        .get(clientId) as EventLog[];
  }

  private add(clientId: string, eventName: keyof WSEventParams) {
    this
      .get(clientId)
      .push({ eventName, timestamp: new Date().getTime() });
  }

  private prune(clientId: string) {
    const logs = this.get(clientId);
    const lastLog = logs[logs.length - 1];

    const timeToDelete = 60 * 1000;
    const expirationMs = lastLog.timestamp + timeToDelete;
    if (new Date().getTime() < expirationMs) return;

    this.active.delete(clientId);
  }
}

interface EventLog {
  eventName: keyof WSEventParams;
  timestamp: number;
}
