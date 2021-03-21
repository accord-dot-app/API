import { WSEventArgs, WSEventParams } from '../data/types/ws-types';
import io from 'socket.io-client';

export class WSService {
  public readonly socket = io.connect(`${process.env.ROOT_ENDPOINT}`);

  public on<K extends keyof WSEventArgs>(name: K, callback: WSEventArgs[K]): this {
    this.socket.on(name, callback);

    return this;
  }

  public emit<K extends keyof WSEventParams>(name: K, params: WSEventParams[K]) {
    this.socket.emit(name, params);
  }
}
