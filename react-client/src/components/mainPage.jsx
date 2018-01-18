import React from 'react';
import Friends from './friends.jsx';

const MainPage = ({ friends, userFood, updateUser, currentUser }) => (
  <div>
    {console.log('main page', userFood)}
    <Friends const friends={friends} userFood={userFood} updateUser={updateUser} currentUser={currentUser} />
  </div>
);


export default MainPage;
