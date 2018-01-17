import React from 'react';
import Friends from './friends.jsx';
import AddFriends from './addFriends.jsx';
import TopUsers from './topUsers.jsx';

const MainPage = ({ topUsers, friends }) => (
  <div>
    {friends.length > 0 ?
      <Friends const friends={friends} />
    :
      <AddFriends />
    }
    <TopUsers const topUsers={topUsers} />
  </div>
);


export default MainPage;
