import React from 'react';
import Friends from './friends.jsx';

const MainPage = ({
  friends,
  userFood,
  updateFood,
  currentUser,
  trades,
  tradeNumber,
}) => (
  <div>
    {console.log('main page', trades)}
    <Friends
      trades={trades}
      tradeNumber={tradeNumber}
      friends={friends}
      userFood={userFood}
      updateFood={updateFood}
      currentUser={currentUser}
    />
  </div>
);


export default MainPage;
