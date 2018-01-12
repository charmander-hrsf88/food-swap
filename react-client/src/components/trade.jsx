import React from 'react';

const Trade = ({ trade, user }) => (
  <li >
    <hr />
    {trade.username1 !== user.name ?
      [trade.status === null ?
        <span>
          {trade.username1} wants to trade {trade.food_id1} for your {trade.food_id2} on XDAY
          . {trade.username1} is X miles from you.
          <button>Accept Trade?</button>
        </span>
      :
      trade.status === true ?
      <span>You accepted {trade.username1}'s trade for {trade.food_id1} with your {trade.food_id2} on XDAY. There are X hours left to swap.</span>
      :
      <span>{trade.username1} rejected your trade of {trade.food_id2} for {trade.food_id1} on XDAY.</span>
      ]
    :
      [trade.status === null ?
        <span>You asked {trade.username2} to trade {trade.food_id1} for {trade.food_id2} on XDAY. {trade.username2} has X hours left to respond.</span>
      :
      trade.status === true ?
      <span>You accepted {trade.username2}'s trade for {trade.food_id2} with your {trade.food_id1} on XDAY. There are X hours left to swap.</span>
      :
      <span>You  rejected {trade.username2}'s trade of {trade.food_id2} for your {trade.food_id1} on XDAY.</span>
      ]
    }
  </li>
);


export default Trade;
