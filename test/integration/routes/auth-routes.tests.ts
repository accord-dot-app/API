import { Mock } from '../../mock';
import { assert } from 'chai';
import Deps from '../../../src/utils/deps';
import { API } from '../../../src/api/server';
import request from 'supertest';
import Users from '../../../src/data/users';
import { SelfUserDocument, User } from '../../../src/data/models/user';
import { generateUsername } from '../../../src/utils/utils';

describe.only('auth-routes', () => {
  const endpoint = `/api`;

  let app: Express.Application;
  let users: Users;
  let credentials: { username?, password?, email? };
  let user: SelfUserDocument;

  beforeEach(async () => {
    app = Deps.get<API>(API).app;
    users = Deps.get<Users>(Users);

    credentials = {
      username: generateUsername(),
      password: 'Testing@123',
    };    
    user = await users.createUser(credentials.username, credentials.password) as any;    
  });

  afterEach(async () => await Mock.cleanDB());

  it('POST /login, invalid username and password, 400', async () => {    
    await request(app)
      .post(`${endpoint}/login`)
      .expect(400);
  });
  
  it('POST /login, unverified email, 400', async () => {
    delete credentials.username;
    credentials.email = 'adam@d-cl.one';

    user.verified = false;
    user.email = credentials.email;
    await user.save();

    await request(app)
      .post(`${endpoint}/login`)
      .send(credentials)
      .expect(400);
  });
  
  it('POST /login, valid username and password, sends jwt', async () => {
    await request(app)
      .post(`${endpoint}/login`)
      .send(credentials)
      .expect(200)
      .expect(res => assert(
        typeof res.body === 'string',
        'User JWT should be returned.',
      ));
  });
  
  it('POST /login, verified email, sends jwt', async () => {
    delete credentials.username;
    credentials.email = 'adam@d-cl.one';

    user.verified = true;
    user.email = credentials.email;
    await user.save();

    await request(app)
      .post(`${endpoint}/login`)
      .send(credentials)
      .expect(200)
      .expect(res => assert(
        typeof res.body._id === 'string',
        'User JWT should be returned.',
      ));
  });
  
  it('POST /change-password, no email provided, user not found', async () => {
    await request(app)
      .post(`${endpoint}/change-password`)
      .send({ ...credentials, password: 'a' })
      .expect(404)
      .expect({
        message: 'User not found'
      });
  });
  
  it('POST /change-password, old password incorrect, 400', async () => {
    await request(app)
      .post(`${endpoint}/change-password`)
      .send({ ...credentials, password: 'a' })
      .expect(400);
  });
  
  it('POST /change-password, old password incorrect, 400', async () => {
    await request(app)
      .post(`${endpoint}/change-password`)
      .send({ ...credentials, password: 'a' })
      .expect(400);
  });
  
  it('POST /change-password, new password correct, sends jwt', async () => {
    await request(app)
      .post(`${endpoint}/change-password`)
      .send(credentials)
      .expect(200)
      .expect(res => assert(
        typeof res.body._id === 'string',
        'User JWT should be returned.',
      ));
  });
});
