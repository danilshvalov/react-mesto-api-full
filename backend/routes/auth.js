const router = require('express').Router();
const {login, createUser, logout} = require('../controllers/user');
const {signinValidator, signupValidator} = require('../validators/auth');

router.post('/signin', signinValidator, login);
router.post('/signup', signupValidator, createUser);
router.post('/logout', logout);

module.exports = router;
