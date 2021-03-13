import { Socket } from 'socket.io';
import { WebSocket } from '../websocket';

// TODO: make non-default
export default interface WSEvent {
  on: string;

  invoke: (ws: WebSocket, client: Socket, data: any) => any;
}

export { Args, Params } from '../../../data/types/ws-types';
