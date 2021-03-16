import { WebSocket } from '../../src/api/websocket/websocket';
import Deps from '../../src/utils/deps';
import { Socket } from 'socket.io';
import io from 'socket.io-client';
import { Message } from '../../src/data/models/message';
import { GuildMember, GuildMemberDocument } from '../../src/data/models/guild-member';
import { Mock } from '../mock';
import { Guild, GuildDocument } from '../../src/data/models/guild';
import { User, UserDocument } from '../../src/data/models/user';
import { Channel, VoiceChannelDocument } from '../../src/data/models/channel';
import { API } from '../../src/api/server';
import VoiceStateUpdate from '../../src/api/websocket/ws-events/voice-state-update';
import { expect } from 'chai';
import { Role } from '../../src/data/models/role';
import { ChannelTypes, UserTypes } from '../../src/data/types/entity-types';

describe('voice-state-update', () => {
  const client = io(`http://localhost:${process.env.PORT}`) as any;
  const event = new VoiceStateUpdate();
  
  let ws: WebSocket;
  let guild: GuildDocument;
  let user: UserDocument;
  let member: GuildMemberDocument;
  let vc: ChannelTypes.Voice;

  beforeEach(async () => {
    Deps.get<API>(API);

    ws = Deps.get<WebSocket>(WebSocket);

    guild = await Mock.guild();
    user = await Mock.user([guild.id]);
    member = await Mock.guildMember(user.id, guild.id, guild.roles);
    vc = guild.channels[0] as ChannelTypes.Voice;
    
    ws.sessions.set(client.id, user.id);
  });

  after(async () => {
    client.disconnect();
    
    await Channel.deleteMany({});
    await Guild.deleteMany({});
    await GuildMember.deleteMany({});
    await Message.deleteMany({});
    await Role.deleteMany({});
    await User.deleteMany({});
  });

  it('spoofed user, throws error', async () => {
    const result = () => event.invoke(ws, client, {
      userId: user.id,
      voice: new UserTypes.VoiceState()
    });

    await expect(result()).to.be.rejectedWith('Unauthorized');
  });

  it('connected to channel, adds self to vc members', async () => {
    ws.sessions.set(client.id, guild.ownerId);

    await event.invoke(ws, client, {
      userId: guild.ownerId,
      voice: {
        guildId: guild._id,
        channelId: vc._id,
        selfMuted: false
      } as UserTypes.VoiceState
    });

    const result = await Channel.findById(vc._id);

    expect(result.memberIds).to.include(guild.ownerId);
  });

  it('owner attempts to connect, authorized', async () => {
    ws.sessions.set(client.id, guild.ownerId);

    const result = () => event.invoke(ws, client, {
      userId: guild.ownerId,
      voice: {
        guildId: guild._id,
        channelId: vc._id,
        selfMuted: false
      } as UserTypes.VoiceState
    });

    await expect(result()).to.be.fulfilled;
  });

  it('member attempts to connect, has default perms, authorized', async () => {
    const result = () => event.invoke(ws, client, {
      userId: user.id,
      voice: {
        guildId: guild._id,
        channelId: vc._id,
        selfMuted: false
      } as UserTypes.VoiceState
    });

    await expect(result()).to.be.fulfilled;
  });

  it('user attempts to connect, channel locked, unauthorized', async () => {
    ws.sessions.set(client.id, member.userId);

    const result = () => event.invoke(ws, client, {
      userId: member.userId,
      voice: {
        guildId: guild._id,
        channelId: vc._id,
        selfMuted: false
      } as UserTypes.VoiceState
    });

    await expect(result()).to.be.rejectedWith('Missing Permissions');
  });

  it('non-guild user attempts to connect, has default perms, unauthorized', async () => {
    const result = () => event.invoke(ws, client, {
      userId: user.id,
      voice: {
        guildId: guild._id,
        channelId: vc._id,
        selfMuted: false
      } as UserTypes.VoiceState
    });

    await expect(result()).to.be.rejectedWith('Missing Permissions');
  });
});
