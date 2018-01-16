import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import App from './app.jsx';
import LogIn from '../log-in-page/logIn.jsx';
// import Profile from './profile.jsx';
// import Trades from './trades.jsx';
import FourOhFour from './404.jsx';

const Switcher = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/login" component={LogIn} />
      {/* <Route path="/user/:profile" component={Profile} /> */}
      {/* <Route path="/trades" component={Trades} /> */}
      <Route path="/*" component={FourOhFour} />
    </Switch>
  </Router>
);

export default Switcher;
