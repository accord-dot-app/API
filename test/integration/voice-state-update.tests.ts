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
import { Role, VoiceChannelPermission } from '../../src/data/models/role';

const mock = new Mock();

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
      const guild = await mock.guild();
      ws.sessions.set(client.id, guild.owner.id);

      const vc = guild.channels[1];

      await event.invoke(ws, client, {
        userId: guild.owner.id,
        voice: {
          guildId: guild.id,
          channelId: vc.id,
          selfMuted: false
        } as UserVoiceState
      });

      const result = await Channel.findById(vc.id);

      expect(result.memberIds).to.include(guild.owner.id);
    });

    it('owner attempts to connect, authorized', async () => {
      const guild = await mock.guild();
      ws.sessions.set(client.id, guild.owner.id);

      const vc = guild.channels[1];

      const result = () => event.invoke(ws, client, {
        userId: guild.owner.id,
        voice: {
          guildId: guild.id,
          channelId: vc.id,
          selfMuted: false
        } as UserVoiceState
      });

      await expect(result()).to.be.fulfilled;
    });

    it('member attempts to connect, has default perms, authorized', async () => {
      const guild = await mock.guild();
      const member = await mock.guildMember(
        await mock.user(),
        guild.id,
        guild.roles
      );        
      const vc = guild.channels[1];

      ws.sessions.set(client.id, member.user.id);

      const result = () => event.invoke(ws, client, {
        userId: member.user.id,
        voice: {
          guildId: guild.id,
          channelId: vc.id,
          selfMuted: false
        } as UserVoiceState
      });

      await expect(result()).to.be.fulfilled;
    });

    it('user attempts to connect, channel locked, unauthorized', async () => {
      const guild = await mock.guild();
      guild.roles[0] = await mock.role(guild.id, 0);
      await guild.save();

      const member = await mock.guildMember(
        await mock.user(),
        guild.id,
        guild.roles
      );        
      const vc = guild.channels[1];

      ws.sessions.set(client.id, member.user.id);

      const result = () => event.invoke(ws, client, {
        userId: member.user.id,
        voice: {
          guildId: guild.id,
          channelId: vc.id,
          selfMuted: false
        } as UserVoiceState
      });

      await expect(result()).to.be.rejectedWith('Missing Permissions');
    });

    it('non-guild user attempts to connect, has default perms, unauthorized', async () => {
      const guild = await mock.guild();
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
