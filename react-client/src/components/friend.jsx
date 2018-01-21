import React from 'react';
import moment from 'moment';
import Question from '../icons/question.jsx';

var colorname;

function setClass(trade) {
  if (trade.user_rating === 5) {
    colorname = 'star5';
  } else if (trade.user_rating === 4) {
    colorname = 'star4';
  } else if (trade.user_rating === 3) {
    colorname = 'star3';
  } else {
    colorname = '';
  }
}

const Friend = ({
  selectTrade,
  toggleExpand,
  star,
  trade,
}) => (
  <div className="friendFood" onClick={(e)=>{selectTrade(trade); toggleExpand(); console.log(trade) }}>
    { setClass(trade) }
    <div className={colorname}>
      <h2> {trade.food_dishname} </h2>
      {console.log('the trade picture= ', trade)}
      {trade.food_dishname === null ?
        <Question />
      :
      <img alt={trade.food_dishname} src={trade.food_picture} />
      }
      <h4> {trade.username1} </h4>
      <div className="ratingPanel">
        {trade.user_rating > 2 && star}
        {trade.user_rating > 2 && star}
        {trade.user_rating > 2 && star}
        {trade.user_rating > 3 && star}
        {trade.user_rating > 4 && star}
      </div>
    </div>
    <h4 className="time">{ moment(trade.time).fromNow() } left</h4>
  </div>
);

export default Friend;
