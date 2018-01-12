const controller = require('./controllers/index');
const router = require('express').Router();

router.get('/users', controller.users.getAll);
router.get('/users/:id', controller.users.getById);
router.post('/users', controller.users.post);

router.get('/trade/user1/:userId1/user2/:userId2', controller.trade.getById);
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