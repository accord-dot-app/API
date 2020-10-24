import DBWrapper from './db-wrapper';
import { FriendRequestType, User, UserDocument } from './models/user';

export default class Users extends DBWrapper<string, UserDocument> {
    protected async getOrCreate(id: string) {
        return (await User.findById(id))
            ?.populate('friends')
            .execPopulate();
    }

    async getKnown(userId: string) {
        const incomingFriends = await User.find({ friendRequests: { userId, type: FriendRequestType.Incoming }});
        const outgoingFriends = await User.find({ friendRequests: { userId, type: FriendRequestType.Outgoing }});

        return [].concat(
            incomingFriends,
            outgoingFriends
        );
    }
}