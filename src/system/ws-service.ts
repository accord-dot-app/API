import { WSEventArgs, WSEventParams } from '../data/types/ws-types';
import Log from '../utils/log';
import io from 'socket.io-client';

export class WSService {
  public readonly socket = io.connect(`${process.env.ROOT_ENDPOINT}`);

  constructor() {
    this.socket.on('message', (content: string) => console.log(content));
  }

  public on<T extends keyof WSEventArgs>(name: T, callback: WSEventArgs[T]): this {
    this.socket.on(name, () => Log.info(`RECEIVE ${name}`, 'ws'));
    this.socket.on(name, callback);

    return this;
  }

  public emit<T extends keyof WSEventParams>(name: T, params: WSEventParams[T]) {
    Log.info(`SEND ${name}`, 'ws');
    this.socket.emit(name, params);
  }
}
