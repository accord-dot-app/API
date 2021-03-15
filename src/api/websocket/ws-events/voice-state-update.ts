import { Socket } from 'socket.io';
import { ChannelTypes, UserTypes } from '../../../data/types/entity-types';
import { Channel, VoiceChannelDocument } from '../../../data/models/channel';
import { User } from '../../../data/models/user';
import Deps from '../../../utils/deps';
import { WSGuard } from '../../modules/ws-guard';
import { WebSocket } from '../websocket';
import WSEvent, { Args, Params } from './ws-event';
import Users from '../../../data/users';

export default class implements WSEvent {
  on = 'VOICE_STATE_UPDATE';

  constructor(
    private users = Deps.get<Users>(Users),
    private guard = Deps.get<WSGuard>(WSGuard)
  ) {}

  async invoke(ws: WebSocket, client: Socket, { userId, voice }: Params.VoiceStateUpdate) {    
    this.guard.validateIsUser(client, userId);
    await this.guard.canAccessChannel(client, voice?.channelId);

    const oldUser = await this.users.get(userId);
    const { oldVC, vc } = await this.handleVCMembers(oldUser.voice, voice, userId);

    const movedGuild = oldVC && oldVC.guildId !== vc?.guildId;
    if (movedGuild)
      ws.io
        .to(oldVC?.guildId ?? '')
        .emit('VOICE_STATE_UPDATE', {
          memberIds: vc?.memberIds,
          userId,
          voice,
        }
      );

    oldUser.voice = voice;
    await oldUser.save();

    ws.io
      .to(voice.guildId ?? '')
      .emit('VOICE_STATE_UPDATE', {
        memberIds: vc?.memberIds,
        userId,
        voice,
      } as Args.VoiceStateUpdate
    );
  }

  private async handleVCMembers(oldVoice: UserTypes.VoiceState, newVoice: UserTypes.VoiceState, userId: string) {
    const oldVC = await Channel
      .findById(oldVoice.channelId) as VoiceChannelDocument | null;
    const vc = await Channel
      .findById(newVoice.channelId) as VoiceChannelDocument | null;

    if (!vc && oldVC) {
      const index = oldVC.memberIds.indexOf(userId);
      oldVC.memberIds.splice(index, 1);
      return { oldVC: await oldVC.save(), vc };
    } else if (vc?.type !== 'VOICE')
      throw new TypeError('Invalid Channel');
    else if (oldVC && oldVC.id === vc._id)
      throw new TypeError('Already In Channel');

    vc.memberIds.push(userId);

    return { oldVC, vc: await vc.save() };
  }
}
