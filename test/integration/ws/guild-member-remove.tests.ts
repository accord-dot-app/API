import GuildMemberRemove from '../../../src/api/websocket/ws-events/guild-member-remove';
import { WebSocket } from '../../../src/api/websocket/websocket';
import io from 'socket.io-client';
import { Mock } from '../../mock/mock';
import { GuildDocument } from '../../../src/data/models/guild';
import { expect } from 'chai';
import { GuildMemberDocument } from '../../../src/data/models/guild-member';

describe.only('guild-member-remove', () => {
  const client = io(`http://localhost:${process.env.PORT}`) as any;

  let event: GuildMemberRemove;
  let ws: WebSocket;
  let member: GuildMemberDocument;
  let guild: GuildDocument;

  beforeEach(async() => {
    ({ event, ws, guild, member } = await Mock.defaultSetup(client, GuildMemberRemove));
  });

  afterEach(async () => await Mock.afterEach(ws));
  after(async () => await Mock.after(client));

  it('leaves guild that is member of, fulfilled', async () => {
    await expect(guildMemberAdd()).to.be.fulfilled;
  });

  it('leaves guild that is member of, fulfilled', async () => {
    await expect(guildMemberAdd()).to.be.fulfilled;
  });

  it('cannot leave owned guild, rejected', async () => {
    makeGuildOwner();

    await expect(guildMemberAdd()).to.be.rejectedWith('Cannot leave a guild you own');
  });

  function guildMemberAdd() {
    return event.invoke(ws, client, {
      guildId: guild._id,
      memberId: member._id,
    });
  }
    
  function makeGuildOwner() {
    member = guild.members[0] as GuildMemberDocument;
    ws.sessions.set(client.id, guild.ownerId);
  }
});
