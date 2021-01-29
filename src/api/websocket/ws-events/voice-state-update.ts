import { Socket } from 'socket.io';
import { Channel } from '../../../data/models/channel';
import { User } from '../../../data/models/user';
import Deps from '../../../utils/deps';
import { WSGuard } from '../../modules/ws-guard';
import { WebSocket } from '../websocket';
import WSEvent from './ws-event';

export default class implements WSEvent {
  on = 'VOICE_STATE_UPDATE';

  constructor(
    private guard = Deps.get<WSGuard>(WSGuard)
  ) {}

  async invoke(ws: WebSocket, client: Socket, { userId, voice }) {    
    this.guard.validateIsUser(client, userId);
    await this.guard.canAccessChannel(client, voice.channelId);

    await User.findOneAndUpdate(userId, { voice });
    await this.handleVCMembers(voice, userId);

    ws.io
      .to(voice.guildId)
      .emit('VOICE_STATE_UPDATE', { userId, voice });
  }

  private async handleVCMembers(voice: any, userId: any) {
    const vc = await Channel.findById(voice.channelId);
    if (vc.type !== 'VOICE')
      throw new TypeError('Invalid Channel');

    const index = vc.memberIds.indexOf(userId);
    (voice.channelId)
      ? vc.memberIds.push(userId)
      : vc.memberIds.splice(index, 1);

    await vc.save();
  }
}
