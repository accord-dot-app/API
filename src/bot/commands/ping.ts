import fetch from 'node-fetch';
import { Command, CommandContext } from './command';

export default class implements Command {
  name = 'ping';
  summary = 'Measure API response time.';

  async execute(ctx: CommandContext) {
    ctx.bot.sendMessage(ctx.channel, ctx.guild, `🏓 Ping! \`${await this.measureLatency()}ms\``);
  }

  private async measureLatency() {
    const from = new Date();
    await fetch(process.env.API_URL);
    const until = new Date();
  
    return until.getTime() - from.getTime();
  }  
}
