const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();

const {thirdPartyLibErrorHandler} = require('./utils/utils');
const auth = require('./middlewares/auth');
const {errorHandler} = require('./middlewares/error-handler');
const {requestLogger, errorLogger} = require('./middlewares/logger');
const NotFoundError = require('./errors/NotFoundError');

const app = express();

const {PORT = 3000} = process.env;
const frontendLinks = /.*\/\/*.danilshvalov.mesto.nomoredomains.icu/;
const connectionLink = 'mongodb://localhost:27017/mestodb';

mongoose.connect(connectionLink, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(cors({
  origin: frontendLinks,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
}));

app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 минут
    max: 5000, // 5000 запросов
  }),
);
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(thirdPartyLibErrorHandler);

app.use(requestLogger);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.use(require('./routes/auth'));
app.use('/users', auth, require('./routes/user'));
app.use('/cards', auth, require('./routes/cards'));

app.use('*', (req, res, next) => {
  next(new NotFoundError('Ничего не найдено. Проверьте путь и метод запроса'));
});

app.use(errorLogger);

app.use(errorHandler);

app.listen(PORT);
