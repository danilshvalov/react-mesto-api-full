const supertest = require('supertest');
const app = require('../app');
const errorMessages = require('../errors/error-messages');

const request = supertest(app);

describe('Эндпоинты, требующие авторизацию', () => {
  it('/users -> status: 401', () => request.get('/users').then((res) => {
    expect(res.status).toBe(401);
    expect(res.message).toBe(errorMessages.unAuthorized);
  }));
  it('/cards -> status: 401', () => request.get('/cards').then((res) => {
    expect(res.status).toBe(401);
    expect(res.message).toBe(errorMessages.unAuthorized);
  }));
});

describe('Эндпоинты, НЕ требующие авторизацию', () => {
  it('/signin -> status: 200', () => request.get('/signin').then((res) => {
    expect(res.status).toBe(200);
  }));
  it('/signup -> status: 200', () => request.get('/signup').then((res) => {
    expect(res.status).toBe(200);
  }));
});
