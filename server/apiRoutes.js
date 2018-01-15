const controller = require('./controllers/index');
const router = require('express').Router();

router.get('/users', controller.users.getAll);
router.get('/users/:id', controller.users.getById);
router.get('/users/username/:username', controller.users.getByUsername);
router.post('/users', controller.users.create);

router.get('/trade/:userId', controller.trade.getAllTradeByUserId);
router.get('/trade/user1/:userId1/user2/:userId2', controller.trade.getById);
router.get('/trade/:username1/profile/:username2', controller.trade.getTradesForProfilePage);
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
