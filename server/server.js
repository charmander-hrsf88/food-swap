const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const models = require('./models');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const expressSession = require('express-session');
const flash = require('connect-flash');
const path = require('path');
const apiRouter = require('./apiRoutes');

passport.use(new LocalStrategy((username, password, done) => {
  models.users.findByUsername(username)
    .then((user) => {
      console.log('user!', user);
      if (!user) {
        return done(null, false, { message: 'Incorrect username' });
      }

      if (user.password !== password) {
        return done(null, false, { message: 'Incorrect password' });
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
app.use(expressSession({
  secret: 'some secret',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: true },
}));
app.use(morgan('dev'));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use('/', express.static(path.join(__dirname, '../react-client/dist')));
app.use('/trades', express.static(path.join(__dirname, '../react-client/dist')));
app.use('/profile', express.static(path.join(__dirname, '../react-client/dist')));
app.use('/login', express.static(path.join(__dirname, '../react-client/dist/logIn')));
app.post('/login', passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login', failureFlash: true }));

app.use('/api', apiRouter);

module.exports = app;
