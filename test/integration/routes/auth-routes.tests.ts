import { Mock } from '../../mock';
import { assert } from 'chai';
import Deps from '../../../src/utils/deps';
import { API } from '../../../src/api/server';
import request from 'supertest';
import Users from '../../../src/data/users';
import fetch from 'node-fetch'

describe.only('auth-routes', () => {
  const endpoint = `${process.env.API_URL}`;

  let app: Express.Application;
  let users: Users;

  beforeEach(async () => {
    app = Deps.get<API>(API).app;
    users = Deps.get<Users>(Users);
    
    const res = await fetch(`${endpoint}/login`, { method: 'POST'})
    console.log(res);
    
  });

  after(async () => await Mock.cleanDB());

  it('POST /login, invalid username and password, rejected', (done) => {    
    request(app)
      .post(`${endpoint}/login`)
      .expect(400)
      .end(done);
  });
  
  it('POST /login, valid username and password', async () => {
    const credentials = {
      username: 'adamjr',
      password: 'Testing@123',
    };
    await users.createUser(credentials.username, credentials.password);

    await request(app)
      .post(`${endpoint}/login`)
      .send(credentials)
      .expect(200)
      .expect(res => assert(
        Array.isArray(res.body),
        'Response body should be of type array.',
      ));
  });
});
