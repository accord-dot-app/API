import { SelfUserDocument } from './models/user';
import { Lean, UserTypes } from './types/entity-types';

export default class Pings {
  public markAsRead(user: SelfUserDocument, message: Lean.Message) {
    user.lastReadMessages[message.channelId] = message._id;
    return user.save();
  }

  public isIgnored(self: UserTypes.Self, channel: Lean.Channel, message: Lean.Message) {
    return self._id === message.authorId
      && (self.ignored.channelIds.includes(channel._id)
      || self.ignored.guildIds.includes(channel.guildId as string)
      || self.ignored.userIds.includes(message.authorId));
  }
}
