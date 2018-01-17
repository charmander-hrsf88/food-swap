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
        return done(null, false, { message: 'Incorrect username' });
      }

      return done(null, user);
    })
    .catch(err => done(err));
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


app.use('/', express.static(path.join(__dirname, '../react-client/dist')));

app.get('/session', (req, res) => {
  const { user } = req.session;
  if (user) {
    models.users.findById({ id: user})
      .then((user) => {
        console.log(user);
        res.send({ user });
      })
      .catch((e) => {
        res.send({ e });
      });
  } else {
    res.send({ user: null });
  }
});

app.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
});

app.post('/login', passport.authenticate('local', { failureRedirect: '/', failureFlash: true }), (req, res) => {
  const { user } = req.session.passport;
  req.session.regenerate(() => {
    req.session.user = user;
    res.redirect('/');
  });
});

app.post('/signup', (req, res) => {
  const { name, username, password, email } = req.body;
  models.users.create({ name, username, password, email })
    .then((user) => {
      console.log(user);
      req.session.regenerate(() => {
        req.session.user = user.id;
        res.redirect('/');
      });
    })
    .catch((e) => {
      res.status(500).send({ error: e });
    });
});

app.use('/api', apiRouter);

app.use('/*', express.static(path.join(__dirname, '../react-client/dist/logIn')));
module.exports = app;
