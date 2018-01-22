import React from 'react';

const Feed = ({ feed }) => {
  return (
    <div className="feed">
      {console.log(feed)}
      {feed.expired ?
        <div>
          {`${feed.username1} trade with ${feed.username2} expired`}
        </div>
        : feed.accepted ?
        <div>
          {`${feed.username1} traded ${feed.food1} to ${feed.username2} for ${feed.food2} on ${feed.trade_date}.`}
        </div> :
        <div>
          {`${feed.username1} trade of ${feed.food1} to ${feed.username2} for ${feed.food2} failed!`}
        </div>
      }

    </div>
  );
};

export default Feed;
