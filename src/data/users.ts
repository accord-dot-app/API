import { Bot } from '../bot/bot';
import Deps from '../utils/deps';
import DBWrapper from './db-wrapper';
import { FriendRequestType, User, UserDocument } from './models/user';

export default class Users extends DBWrapper<string, UserDocument> {
    constructor(private bot = Deps.get<Bot>(Bot)) { super(); }

    protected async getOrCreate(id: string) {
        return (await User.findById(id))
            ?.populate('friends')
            .execPopulate();
    }

    async getKnown(userId: string) {
        return await User.find({
            $or: [
                this.bot.self,
                { friends: userId },
                { friendRequests: { userId, type: FriendRequestType.Incoming } },
                { friendRequests: { userId, type: FriendRequestType.Outgoing } }
            ]
        });
    }
}