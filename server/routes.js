const controller = require('./controllers/index');
const router = require('express').Router();

router.get('/users', controller.users.getAll);
router.get('/users/:id', controller.users.getById);
router.get('/users', controller.users.post);

router.get('/trade', controller.trade.getAll);
router.get('/trade/:id', controller.trade.getById);
router.post('/trade', controller.trade.post);

router.get('/food', controller.food.getAll);
router.get('/food/:id', controller.food.getById);
router.post('/food', controller.food.post);

router.get('/friends', controller.friends.getAll);
router.get('/friends/:id', controller.friends.getById);
router.post('/friends', controller.friends.post);

module.exports = router;
