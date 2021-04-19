const router = require('express').Router();
const {cardDataValidator} = require('../validators/cards');
const {idValidator} = require('../validators/universal-validators');
const {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
} = require('../controllers/cards');

router.get('/', getCards);
router.post('/', cardDataValidator, createCard);
router.delete('/:cardId', idValidator, deleteCard);
router.put('/:cardId/likes', idValidator, likeCard);
router.delete('/:cardId/likes', idValidator, dislikeCard);

module.exports = router;
