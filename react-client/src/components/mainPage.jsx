import React from 'react';
import Friends from './friends.jsx';

const MainPage = ({ friends }) => (
  <div>
    <Friends const friends={friends} />
  </div>
);


export default MainPage;
