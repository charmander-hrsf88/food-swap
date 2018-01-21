import React from 'react';
import FontAwesome from 'react-fontawesome';

const Question = () => (
  <FontAwesome
    name="question"
    size="5x"
    spin
    style={{
      textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',
      color: 'rgba(131, 128, 128, 0.15)',
      padding: '0px 5px',
      marginLeft: '60px',
    }}
  />
);

export default Question;
