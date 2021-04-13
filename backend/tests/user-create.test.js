const supertest = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');
const errorMessages = require('../errors/error-messages');

const request = supertest(app);

describe('Создание нового пользователя', () => {
});
