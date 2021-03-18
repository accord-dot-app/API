import { WSEventArgs, WSEventParams } from '../data/types/ws-types';
import Log from '../utils/log';
import io from 'socket.io-client';

export class WSService {
  public readonly socket = io.connect(`${process.env.ROOT_ENDPOINT}`);

  constructor() {
    this.socket.on('message', (content: string) => console.log(content));
  }

  public on<K extends keyof WSEventArgs>(name: K, callback: WSEventArgs[K]): this {
    this.socket.on(name, () => Log.info(`RECEIVE ${name}`, 'ws'));
    this.socket.on(name, callback);

    return this;
  }

  public emit<K extends keyof WSEventParams>(name: K, params: WSEventParams[K]) {
    Log.info(`SEND ${name}`, 'ws');
    this.socket.emit(name, params);
  }
}
