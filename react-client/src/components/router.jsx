import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import App from './app.jsx';
import LogIn from '../log-in-page/logIn.jsx';

const Switcher = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/login" component={LogIn} />
    </Switch>
  </Router>
);

export default Switcher;
