import DBWrapper from './db-wrapper';
import { generateInviteCode, Invite, InviteDocument } from './models/invite';
import { Params } from './types/ws-types';

export default class Invites extends DBWrapper<string, InviteDocument> {
  public async get(code: string | undefined) {
    const invite = await Invite.findById(code);
    if (!invite)
      throw new TypeError('Invite Not Found');
    return invite;
  }

  public async create({ guildId, userId, options }: Params.InviteCreate) {
    return Invite.create({
      _id: generateInviteCode(),
      guildId,
      inviterId: userId,
      options,
      uses: 0,
    });
  }
}