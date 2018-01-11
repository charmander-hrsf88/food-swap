const controller = require('./controllers');
const router = require('express').Router();

router.get('/api/users', controller.users.getAll);
router.get('/api/users/:id', controller.users.getById);
router.get('/api/users', controller.users.post);

router.get('/api/trade', controller.trade.getAll);
router.get('/api/trade/:id', controller.trade.getById);
router.post('/api/trade', controller.trade.post);

router.get('/api/food', controller.food.getAll);
router.get('/api/food/:id', controller.food.getById);
router.post('/api/food', controller.food.post);

router.get('/api/friends', controller.friends.getAll);
router.get('/api/friends/:id', controller.friends.getById);
router.post('/api/friends', controller.friends.post);

exports = router;
