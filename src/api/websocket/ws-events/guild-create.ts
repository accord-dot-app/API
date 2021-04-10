import { Socket } from 'socket.io';
import Guilds from '../../../data/guilds';
import { User } from '../../../data/models/user';
import Deps from '../../../utils/deps';
import { WebSocket } from '../websocket';
import { WSEvent, Params } from './ws-event';

export default class implements WSEvent<'GUILD_CREATE'> {
  on = 'GUILD_CREATE' as const;

  constructor(
    private guilds = Deps.get<Guilds>(Guilds),
  ) {}

  public async invoke(ws: WebSocket, client: Socket, { partialGuild }: Params.GuildCreate) {
    const userId = ws.sessions.userId(client);
    const guild = await this.guilds.create(partialGuild.name, userId);

    await User.updateOne(
      { _id: userId },
      { $push: { guilds: guild } },
      { runValidators: true },
    );

    await client.join(guild.id);

    ws.io
      .to(userId)
      .emit('GUILD_JOIN', { guild });
  }
}
