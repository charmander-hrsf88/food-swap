import React from 'react';
import Feed from './feed.jsx';

const ProfileList = (props) => {
  return (
    <div className="profileList">
      <h2>News Feed</h2>
      {console.log(props.trades)}
      {props.trades.map((trade, i) =>
        <Feed feed={trade} key={i} />
      )}
    </div>
  );
};

export default ProfileList;
