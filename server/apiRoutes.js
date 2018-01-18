const controller = require('./controllers/index');
const router = require('express').Router();

router.get('/users', controller.users.getAll);
router.get('/users/:id', controller.users.getById);
router.get('/users/username/:username', controller.users.getByUsername);
router.post('/users', controller.users.create);

router.get('/trade/:id', controller.trade.getTradesById);
router.get('/trade/username/:username', controller.trade.getTradesByUsername);
router.get('/trade/userId/:userId', controller.trade.getTradesByUserId);
router.get('/trade/username/:username1/username/:username2', controller.trade.getTradesByTwoUsernames);
router.get('/trade/userId/:userId1/userId/:userId2', controller.trade.getTradesByTwoUserIds);
router.post('/trade/initiate', controller.trade.initiate);
router.post('/trade/accept', controller.trade.accept);
router.post('/trade/reject', controller.trade.reject);


router.get('/food', controller.food.getAll);
router.get('/food/:id', controller.food.getById);
router.post('/food', controller.food.post);

router.get('/friends/user/:userId1', controller.friends.getAll);
router.get('/friends/user/:userId1/user/:userId2', controller.friends.getById);
router.post('/friends/create', controller.friends.create);


module.exports = router;
