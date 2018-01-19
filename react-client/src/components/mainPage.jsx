import React from 'react';
import Friends from './friends.jsx';

const MainPage = ({ friends, userFood, updateFood, currentUser }) => (
  <div>
    {console.log('main page', userFood)}
    <Friends const friends={friends} userFood={userFood} updateFood={updateFood} currentUser={currentUser} />
  </div>
);


export default MainPage;
