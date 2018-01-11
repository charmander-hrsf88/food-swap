const controller = require('./controllers');
const router = require('express').Router();


router.get('/login', controller.login.get);
router.post('/login', controller.login.post);

router.get('/signup', controller.signup.get);
router.post('/signup', controller.signup.post);