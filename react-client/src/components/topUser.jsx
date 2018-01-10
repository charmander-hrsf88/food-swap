import React from 'react';

const TopUser = ({ topUser }) => (
  <div className="friendFood" >
    <h2> {topUser.food_name} </h2>
    <img alt={topUser.food_name} src={topUser.food_picture} />
    <p> {topUser.user_name}: {topUser.food_description} </p>
  </div>
);


export default TopUser;
