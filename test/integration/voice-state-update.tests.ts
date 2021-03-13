import { WebSocket } from '../../src/api/websocket/websocket';
import Deps from '../../src/utils/deps';
import { Socket } from 'socket.io';
import io from 'socket.io-client';
import { Message } from '../../src/data/models/message';
import { GuildMember } from '../../src/data/models/guild-member';
import { Mock } from '../mock';
import { Guild } from '../../src/data/models/guild';
import { User, UserVoiceState } from '../../src/data/models/user';
import { Channel } from '../../src/data/models/channel';
import { API } from '../../src/api/server';
import VoiceStateUpdate from '../../src/api/websocket/ws-events/voice-state-update';
import { expect } from 'chai';
import { Role } from '../../src/data/models/role';

describe('voice-state-update', () => {
  const userId = 'user_1';
  const client = io(`http://localhost:${process.env.PORT}`) as any;;
  let event: VoiceStateUpdate;
  let ws: WebSocket;

  beforeEach(() => {
    Deps.get<API>(API);

    event = new VoiceStateUpdate();
    ws = Deps.get<WebSocket>(WebSocket);
    
    ws.sessions.set(client.id, userId);
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

  describe('invoke', () => {
    it('spoofed author, throws error', async () => {
      const result = () => event.invoke(ws, client, {
        userId: 'user_2',
        voice: new UserVoiceState()
      });

      await expect(result()).to.be.rejectedWith('Unauthorized');
    });

    it('connected to channel, adds self to vc members', async () => {
      const guild = await Mock.guild();
      ws.sessions.set(client.id, guild.ownerId);

      const vc = guild.channels[1];

      await event.invoke(ws, client, {
        userId: guild.ownerId,
        voice: {
          guildId: guild.id,
          channelId: vc.id,
          selfMuted: false
        } as UserVoiceState
      });

      const result = await Channel.findById(vc.id);

      expect(result.memberIds).to.include(guild.ownerId);
    });

    it('owner attempts to connect, authorized', async () => {
      const guild = await Mock.guild();
      ws.sessions.set(client.id, guild.ownerId);

      const vc = guild.channels[1];

      const result = () => event.invoke(ws, client, {
        userId: guild.ownerId,
        voice: {
          guildId: guild.id,
          channelId: vc.id,
          selfMuted: false
        } as UserVoiceState
      });

      await expect(result()).to.be.fulfilled;
    });

    it('member attempts to connect, has default perms, authorized', async () => {
      const guild = await Mock.guild();
      const member = await Mock.guildMember(
        await Mock.user(),
        guild.id,
        guild.roles
      );        
      const vc = guild.channels[1];

      ws.sessions.set(client.id, member.userId);

      const result = () => event.invoke(ws, client, {
        userId: member.userId,
        voice: {
          guildId: guild.id,
          channelId: vc.id,
          selfMuted: false
        } as UserVoiceState
      });

      await expect(result()).to.be.fulfilled;
    });

    it('user attempts to connect, channel locked, unauthorized', async () => {
      const guild = await Mock.guild();
      guild.roles[0] = await Mock.role(guild.id, 0);
      await guild.save();

      const member = await Mock.guildMember(
        await Mock.user(),
        guild.id,
        guild.roles,
      );        
      const vc = guild.channels[1];

      ws.sessions.set(client.id, member.userId);

      const result = () => event.invoke(ws, client, {
        userId: member.userId,
        voice: {
          guildId: guild.id,
          channelId: vc.id,
          selfMuted: false
        } as UserVoiceState
      });

      await expect(result()).to.be.rejectedWith('Missing Permissions');
    });

    it('non-guild user attempts to connect, has default perms, unauthorized', async () => {
      const guild = await Mock.guild();
      const vc = guild.channels[1];

      const result = () => event.invoke(ws, client, {
        userId,
        voice: {
          guildId: guild.id,
          channelId: vc.id,
          selfMuted: false
        } as UserVoiceState
      });

      await expect(result()).to.be.rejectedWith('Missing Permissions');
    });
  });
});
