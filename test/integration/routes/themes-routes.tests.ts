import { Mock } from '../../mock/mock';
import Deps from '../../../src/utils/deps';
import { API } from '../../../src/api/server';
import request from 'supertest';
import Users from '../../../src/data/users';
import { UserDocument } from '../../../src/data/models/user';
import { Theme, ThemeDocument } from '../../../src/data/models/theme';
import { expect } from 'chai';

describe('themes-routes', () => {
  const endpoint = `/api/v2/themes`;

  let app: Express.Application;
  let users: Users;
  let user: UserDocument;
  let authorization: string;
  let theme: ThemeDocument;

  beforeEach(async () => {
    app = Deps.get<API>(API).app;
    theme = await Mock.theme();

    authorization = `Bearer ${users.createToken(user.id)}`;
  });

  afterEach(async () => await Mock.cleanDB());
  
  it('GET /:id, theme not found, 404', async () => {
    await theme.deleteOne();

    await request(app)
      .get(`${endpoint}/${theme.id}`)
      .expect(404)
      .expect({ message: 'Theme Not Found' });
  });
  
  it('GET /:id, theme found, returns theme', async () => {
    await request(app)
      .get(`${endpoint}/${theme.id}`)
      .expect(200)
      .expect(theme.toJSON());
  });
  
  it('POST /, theme created and returned', async () => {
    await request(app)
      .post(endpoint)
      .set('Authorization', authorization)
      .expect(201)
      .expect(theme.toJSON());
  });
  
  it('DELETE /:id, theme deleted', async () => {
    await request(app)
      .delete(`${endpoint}/${theme.id}`)
      .set('Authorization', authorization)
      .expect(200);

    theme = await Theme.findById(theme.id);
    expect(theme).to.be.null;
  });
});
