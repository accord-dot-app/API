import DBWrapper from './db-wrapper';
import { Invite, InviteDocument } from './models/invite';

export default class Invites extends DBWrapper<string, InviteDocument> {
    protected async getOrCreate(code: string) {
        return await Invite.findById(code)
            ?.populate('inviter')
            .populate('guild')
            .exec();
    }
}