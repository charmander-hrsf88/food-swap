const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const models = require('./models');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const session = require('express-session');
const flash = require('connect-flash');
const path = require('path');
const apiRouter = require('./apiRoutes');

passport.use(new LocalStrategy((username, password, done) => {
  models.users.comparePassword({ username, pass: password })
    .then((user) => {
      if (!user) {
        return done(null, false, { message: 'Incorrect password' });
      }

      return done(null, user);
    })
    .catch(() => done(new Error(), null, { message: 'Incorrect username' }));
}));

passport.serializeUser((user, callback) => {
  callback(null, user.id);
});

passport.deserializeUser((userId, callback) => {
  models.users.findById(userId)
    .then((user) => {
      callback(null, user);
    })
    .catch((e) => {
      callback(e);
    });
});

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
  secret: 'some secret',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false },
}));
app.use(morgan('dev'));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());


app.use('/', express.static(path.join(__dirname, '../react-client/dist/')));

app.get('/session', (req, res) => {
  const { user, success } = req.session;
  if (success) {
    const userId = user.id;
    const promises = [];
    promises.push(models.users.findById({ id: userId }));
    promises.push(models.food.getByUserId({ userId }));
    promises.push(models.trade.getTradesByUserId({ userId }));
    promises.push(models.friends.getFriendsByUserId({ userId }));
    promises.push(models.trade.getPossibleTradeExceptUser({ userId }));

    Promise.all(promises)
      .then((result) => {
        const userObj = {
          message: 'Success',
          user: result[0],
          food: result[1],
          trades: result[2],
          friends: result[3],
          possibleTradesExceptUser: result[4],
        };

        res.json(userObj);
      })
      .catch((e) => {
        console.log(e);
        res.status(500).send({ error: e });
      });
  } else {
    res.send({ message: req.session.message });
  }
});

app.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
});

app.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user) => {
    req.session.regenerate(() => {
      if (err) {
        req.session.success = false;
        req.session.message = 'Incorrect username';
      } else if (!user) {
        req.session.success = false;
        req.session.message = 'Incorrect password';
      } else {
        req.session.success = true;
        req.session.user = user;
      }
      res.redirect('/');
    });
  })(req, res, next);
});

app.post('/signup', (req, res) => {
  const { name, username, password, email } = req.body;
  models.users.findByUsername({ username })
    .then((userExists) => {
      if (userExists) {
        res.send({ message: 'username already exists' });
      }

      return models.users.create({ name, username, password, email })
        .then((user) => {
          req.session.regenerate(() => {
            req.session.success = true;
            req.session.user = user;
            res.redirect('/');
          });
        });
    })
    .catch((e) => {
      console.log('Error on /signup', e);
      res.status(500).end();
    });
});

app.use('/api', apiRouter);

app.use('/*', express.static(path.join(__dirname, '../react-client/dist/logIn')));
module.exports = app;
