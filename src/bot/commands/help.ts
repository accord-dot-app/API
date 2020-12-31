import fetch from 'node-fetch';
import { Command, CommandContext } from './command';

export default class implements Command {
  name = 'help';
  summary = 'List all bot commands.';

  async execute(ctx: CommandContext) {
    const commandsList = Array
      .from(ctx.bot.commandHandler.commands.values())
      .sort((a, b) => a.name > b.name ? 1 : -1)
      .map(c => `\`.${c.name}\` - ${c.summary}`)
      .join('\n');

    ctx.bot.sendMessage(ctx.channel, ctx.guild, `**__Commands__**:\n${commandsList}`);
  }

  private async measureLatency() {
    const from = new Date();
    await fetch(process.env.API_URL);
    const until = new Date();
  
    return until.getTime() - from.getTime();
  }  
}
