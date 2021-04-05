import { Mock } from '../../mock';
import { EmailMock } from '../../mock/email-mock';
import { assert, expect, spy } from 'chai';
import Deps from '../../../src/utils/deps';
import { API } from '../../../src/api/server';
import request from 'supertest';
import Users from '../../../src/data/users';
import { UserDocument, User } from '../../../src/data/models/user';
import { generateUsername } from '../../../src/utils/utils';
import { generateInviteCode } from '../../../src/data/models/invite';
import { Email } from '../../../src/api/modules/email/email';

describe('auth-routes', () => {
  const endpoint = `/api`;

  let app: Express.Application;
  let users: Users;
  let user: UserDocument;
  let authorization: string;

  beforeEach(async () => {
    app = Deps.get<API>(API).app;
    users = Deps.get<Users>(Users);
    authorization = `Bearer ${users.createToken(user.id)}`;
  });

  afterEach(async () => await Mock.cleanDB());

  it('POST /login, invalid username and password, invalid credentials', async () => {    
    await request(app)
      .post(`${endpoint}/login`)
      .expect(400);
  });
  
  it('POST /change-password, no email provided, user not found', async () => {
    await request(app)
      .post(`${endpoint}/change-password`)
      .send({
        newPassword: 'a',
        oldPassword: 'b'
      })
      .expect(400)
      .expect({
        message: 'User not found'
      });
  });
  
  it('POST /change-password, old password incorrect, 400', async () => {
    await request(app)
      .post(`${endpoint}/change-password`)
      .send({
        email: user.email,
        newPassword: 'a',
        oldPassword: 'b'
      })
      .expect(400);
  });
});
