import React from 'react';
import ReactDOM from 'react-dom';
import Switcher from './components/router.jsx'

ReactDOM.render(
  <Switcher />,
  document.getElementById('app'),
);

// if (document.getElementById('app') !== null) {
//   ReactDOM.render(
//     <App />,
//     document.getElementById('app'),
//   );
// } else {
//   ReactDOM.render(
//     <LogIn />,
//     document.getElementById('logIn'),
//   );
// }
