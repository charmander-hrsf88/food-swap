import React from 'react';
import { logOut } from '../axiosCalls.jsx'
// import { Link } from 'react-router-dom';

const NavBar = ({ switchPage, cb }) => (
  <div id="navBar">
    {/* <Link to="/">Home</Link>
    <Link to="/trades">Trades</Link>
    <Link to="/user/:insertDataHere">Profile</Link> */}
    <button onClick={() => { logOut(cb); }}>Log Out</button>
    {/* <form action="/logout" method="GET">
      <input type="submit" value="Log Out" />
    </form> */}
    <button onClick={() => { switchPage('Home'); }}>Home</button>
    <button onClick={() => { switchPage('Profile'); }}>Profile</button>
    <button onClick={() => { switchPage('Trades'); }}>Trades</button>
  </div>
);


export default NavBar;
