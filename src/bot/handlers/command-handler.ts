import { MessageDocument } from '../../data/models/message';
import { Bot } from '../bot';
import { resolve } from 'path';
import { readdir } from 'fs';
import { promisify } from 'util';
import { Command, CommandContext } from '../commands/command';
import Log from '../../utils/log';

const readdirAsync = promisify(readdir);

export class CommandHandler {
  public readonly commands = new Map<string, Command>();

  constructor(private bot: Bot) {}

  public async init() {
    const path = resolve(`${__dirname}/../commands`);
    const fileNames = await readdirAsync(path);
    for (const name of fileNames) {
      const { default: Command } = await import(`../commands/${name}`);
      if (!Command) continue;

      const command = new Command();
      this.commands.set(command.name, command);
    }
    Log.info(`Loaded ${this.commands.size} commands`, 'bot');
  }

  public async handle(prefix: string, message: MessageDocument) {
    try {
      const commandName = this.getCommandName(message, prefix);
      const args = this.getCommandArgs(message);
  
      const command = this.commands.get(commandName);
      if (!command) return;
      
      await command.execute(new CommandContext(message, command, this.bot), ...args);      
    } catch (error) {
      this.bot.sendMessage(
        message.channel,
        message.guild,
        `:warning: ${error.message ?? 'An unknown error occurred.'}`
      );
    }
  }

  private getCommandArgs(message: MessageDocument) {
    return message.content
      .split(' ')
      .slice(1);
  }
  private getCommandName(message: MessageDocument, prefix: string) {
    return message.content
      .slice(prefix.length)
      .split(' ')[0];
  }

  private validatePermissions(command: Command, message: MessageDocument) {
    const member = message.guild.members
      .find(m => m.user.id === message.author.id);
    if (!member) return;
  }
}
