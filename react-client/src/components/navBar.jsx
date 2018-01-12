import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div id="navBar">
    <Link to="/">Home</Link>
    <button>Log Out</button><button>Home</button><button>Profile</button>
  </div>
);


export default NavBar;
