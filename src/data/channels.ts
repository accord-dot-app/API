import DBWrapper from './db-wrapper';
import { Channel, ChannelDocument } from './models/channel';

export default class Channels extends DBWrapper<string, ChannelDocument> {
    protected async getOrCreate(id: string) {
        return await Channel.findById(id);
    }

    async getDMChannels(userId: string) {
        return await Channel.find({ recipientIds: userId });
    }
}