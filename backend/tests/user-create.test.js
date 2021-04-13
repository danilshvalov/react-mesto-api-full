const supertest = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');
const errorMessages = require('../errors/error-messages');
const {
  incorrectNames,
  incorrectAbout,
  incorrectEmails,
  incorrectLinks,
  correctUser,
} = require('./fixtures');

const User = require('../models/user.js');

const request = supertest(app);

describe('Некорректное создание нового пользователя', () => {
  incorrectEmails.forEach((email) => {
    it(`Некорректный email - ${email}`, () => request.post('/signup').send({...correctUser, email}).then((res) => {
      expect(res.status).toBe(400);
    }));
  });
  incorrectNames.forEach((name) => {
    it(`Некорректный name - ${name}`, () => request.post('/signup').send({...correctUser, name}).then((res) => {
      expect(res.status).toBe(400);
    }));
  });
  incorrectAbout.forEach((about) => {
    it(`Некорректный about - ${about}`, () => request.post('/signup').send({...correctUser, about}).then((res) => {
      expect(res.status).toBe(400);
    }));
  });
  incorrectLinks.forEach((avatar) => {
    it(`Некорректный avatar - ${avatar}`, () => request.post('/signup').send({...correctUser, avatar}).then((res) => {
      expect(res.status).toBe(400);
    }));
  });
});
