import DBWrapper from './db-wrapper';
import { Invite, InviteDocument } from './models/invite';

export default class Invites extends DBWrapper<string, InviteDocument> {
  public async get(code: string | undefined) {
    const invite = await Invite.findById(code);
    if (!invite)
      throw new TypeError('Invite Not Found');
    return invite;
  }
}