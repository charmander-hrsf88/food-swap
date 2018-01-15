import React from 'react';
import FontAwesome from 'react-fontawesome';

const UnRatedStar = ({ click, hover, location }) => (
  <FontAwesome
    onClick={() => { click(location); }}
    onMouseEnter={() => { hover(location); }}
    name="star"
    size="2x"
    spin
    style={{
      textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',
      color: 'rgba(131, 128, 128, 0.15)',
      padding: '0px 5px',
    }}
  />
);

const RatedStarLike = ({ click, hover, location }) => (
  <FontAwesome
    onClick={() => { click(location); }}
    onMouseEnter={() => { hover(location); }}
    name="star"
    size="2x"
    style={{
      textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',
      color: 'gold',
      padding: '0px 5px',
    }}
  />
);

const RatedStarDislike = ({ click, hover, location }) => (
  <FontAwesome
    onClick={() => { click(location); }}
    onMouseEnter={() => { hover(location); }}
    name="star"
    size="2x"
    style={{
      textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',
      color: 'rgba(0, 0, 0, 0.589)',
      padding: '0px 5px',
    }}
  />
);

export { UnRatedStar, RatedStarLike, RatedStarDislike };
