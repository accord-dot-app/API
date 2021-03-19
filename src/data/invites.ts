import DBWrapper from './db-wrapper';
import { Invite, InviteDocument } from './models/invite';
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
      _id: this.generateInviteCode(),
      guildId,
      inviterId: userId,
      options,
      uses: 0,
    })
  }

  private generateInviteCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    const codeLength = 7;
    
    let result = '';
    for (let i = 0; i < codeLength; i++)
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    return result;
  }
}