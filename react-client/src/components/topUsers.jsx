import React from 'react';
import TopUser from './topUser.jsx';

const TopUsers = ({ topUsers }) => (
  <div id="topUsers">
    <h2>Top Rated in Your Area: </h2>
    {topUsers.map((topUser, i) => <TopUser key={i} topUser={topUser} />)}
  </div>
);


export default TopUsers;
