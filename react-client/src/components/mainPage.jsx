import React from 'react';
import Friends from './friends.jsx';

const MainPage = ({ friends, userFood }) => (
  <div>
    {console.log('main page', userFood)}
    <Friends const friends={friends} userFood={userFood}  />
  </div>
);


export default MainPage;
