import React from 'react';
// import { Link } from 'react-router-dom';

const NavBar = ({ switchPage }) => (
  <div id="navBar">
    {/* <Link to="/">Home</Link>
    <Link to="/trades">Trades</Link>
    <Link to="/user/:insertDataHere">Profile</Link> */}
    <button onClick={() => { console.log('insertLogOutHere')}}>Log Out</button>
    <button onClick={() => { switchPage('Home'); }}>Home</button>
    <button onClick={() => { switchPage('Profile'); }}>Profile</button>
    <button onClick={() => { switchPage('Trades'); }}>Trades</button>
  </div>
);


export default NavBar;
