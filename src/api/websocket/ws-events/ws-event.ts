import { Socket } from 'socket.io';
import { WSEventParams } from '../../../data/types/ws-types';
import { WebSocket } from '../websocket';

// TODO: make non-default
export default interface WSEvent {
  on: keyof WSEventParams;

  invoke: (ws: WebSocket, client: Socket, data: any) => any;
}

export { Args, Params, WSEventParams } from '../../../data/types/ws-types';
