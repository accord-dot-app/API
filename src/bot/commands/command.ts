import { ChannelDocument } from '../../data/models/channel';
import { GuildDocument } from '../../data/models/guild';
import { GuildMemberDocument } from '../../data/models/guild-member';
import { MessageDocument } from '../../data/models/message';
import { Permission } from '../../data/models/role';
import { UserDocument } from '../../data/models/user';
import { Bot } from '../bot';

export interface Command {
  aliases?: string[];
  cooldown?: number;
  name: string;
  precondition?: Permission;
  summary: string;
  usage?: string;
  
  execute: (ctx: CommandContext, ...args: any) => Promise<any> | void;
}

export class CommandContext {
  public member: GuildMemberDocument;
  public channel: ChannelDocument;
  public guild: GuildDocument;
  public user: UserDocument;
  
  constructor(
    public message: MessageDocument,
    public command: Command,
    public bot: Bot) {
    this.member = message.guild.members.find(m => m.user.id === message.author.id);
    this.channel = message.channel;
    this.guild = message.guild;
    this.user = message.author;
    this.bot = bot;
  }
}