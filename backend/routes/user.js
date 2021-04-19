const router = require('express').Router();
const {
  profileDataValidator,
  avatarDataValidator,
} = require('../validators/user');
const {idValidator} = require('../validators/universal-validators');
const {
  getAllUsers,
  getUser,
  getCurrentUser,
  updateProfile,
  updateAvatar,
} = require('../controllers/user');

router.get('/', getAllUsers);
router.get('/me', getCurrentUser);
router.get('/:userId', idValidator, getUser);
router.patch('/me', profileDataValidator, updateProfile);
router.patch('/me/avatar', avatarDataValidator, updateAvatar);

module.exports = router;
