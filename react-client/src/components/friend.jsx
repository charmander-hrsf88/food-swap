import React from 'react';

const Friend = ({ friend, selectFriend, toggleExpand }) => (
  <div className="friendFood" onClick={(e)=>{selectFriend(friend); toggleExpand(); }}>
    <h2> {friend.food_name} </h2>
    <img alt={friend.food_name} src={friend.food_picture} />
    <p> {friend.user_name}: {friend.food_description} </p>
  </div>
);


export default Friend;
