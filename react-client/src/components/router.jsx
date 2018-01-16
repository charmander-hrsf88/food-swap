import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import App from './app.jsx';
import FourOhFour from './404.jsx';

const Switcher = () => (
  <Router>
    <Switch>
      <Route exact path="/" /* home */ component={App} />
      <Route path="*" component={FourOhFour} />
    </Switch>
  </Router>
);

export default Switcher;
