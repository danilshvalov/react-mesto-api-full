const supertest = require('supertest');
const app = require('../app');
const errorMessages = require('../errors/error-messages');

const request = supertest(app);

describe('Эндпоинты, требующие авторизацию', () => {
  it('/users -> status: 401', () => request.get('/users').then((res) => {
    expect(res.status).toBe(401);
    expect(res.body.message).toBe(errorMessages.unAuthorized);
  }));
  it('/cards -> status: 401', () => request.get('/cards').then((res) => {
    expect(res.status).toBe(401);
    expect(res.body.message).toEqual(errorMessages.unAuthorized);
  }));
});
