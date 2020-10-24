import DBWrapper from './db-wrapper';
import { FriendRequestType, User, UserDocument } from './models/user';

export default class Users extends DBWrapper<string, UserDocument> {
    protected async getOrCreate(id: string) {
        return (await User.findById(id))
            ?.populate('friends')
            .execPopulate();
    }

    async getKnown(userId: string) {
        return await User.find({
            $or: [
                { friends: userId },
                { friendRequests: { userId, type: FriendRequestType.Incoming } },
                { friendRequests: { userId, type: FriendRequestType.Outgoing } }
            ]
        });
    }
}