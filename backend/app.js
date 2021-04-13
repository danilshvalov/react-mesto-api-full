const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
require('dotenv').config();

const {thirdPartyLibErrorHandler} = require('./utils/utils');
const auth = require('./middlewares/auth');
const {errorHandler} = require('./middlewares/error-handler');
const {requestLogger, errorLogger} = require('./middlewares/logger');

const app = express();

// TODO удалить
// Чтобы не ломать текущую базу, сделал дополнительную, в которой можно проводить тесты безопасно
const connectionLink = `mongodb://localhost:27017/mestodb${(process.env.MODE === 'TEST' ? '-test' : '')}`;

mongoose.connect(connectionLink, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 минут
    max: 100, // 100 запросов
  }),
);
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(thirdPartyLibErrorHandler);

app.use(requestLogger);

app.use(require('./routes/auth'));
app.use('/users', auth, require('./routes/user'));
app.use('/cards', auth, require('./routes/cards'));

app.use('*', (req, res) => {
  res.status(404).send({message: 'Ничего не найдено. Проверьте путь и метод запроса'});
});

app.use(errorLogger);

app.use(errorHandler);

module.exports = app;
