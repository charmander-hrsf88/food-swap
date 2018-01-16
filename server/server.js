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

function isLoggedIn (req, res, next) {
  if (req.user) {
    next();
  } else {
    res.redirect('/login');
  }
}

app.use('/', express.static(path.join(__dirname, '../react-client/dist')));
app.use('/trades', express.static(path.join(__dirname, '../react-client/dist')));
app.use('/profile', express.static(path.join(__dirname, '../react-client/dist')));
app.use('/login', express.static(path.join(__dirname, '../react-client/dist/logIn')));
app.use('/*', express.static(path.join(__dirname, '../react-client/dist')));
app.post('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
});

app.post('/login', passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }), (req, res) => {
  req.session.regenerate(() => {
    req.session.user = req.user;
  });
  res.redirect('/');
});

app.use('/api', apiRouter);

module.exports = app;
