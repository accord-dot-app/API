import { Mock } from '../../mock';
import { expect } from 'chai';
import Deps from '../../../src/utils/deps';
import { API } from '../../../src/api/server';

describe('auth-routes', () => {
  beforeEach(async () => {
    Deps.get<API>(API);
  });

  after(async () => await Mock.cleanDB());

  it('fulfilled', async () => {
    const result = () => event.invoke(ws, client, {
      
    });

    await expect(result()).to.be.fulfilled;
  });

  it('rejected', async () => {
    const result = () => event.invoke(ws, client, {
      
    });

    await expect(result()).to.be.rejectedWith();
  });

  async function makeGuildOwner() {
    ws.sessions.set(client.id, guild.ownerId);
    await Mock.clearRolePerms(guild);
  }
});
