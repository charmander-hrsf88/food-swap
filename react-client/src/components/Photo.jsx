import React from 'react';

const Photo = ({ pics }) => {
  return (
    <div className="images">
      <img src={pics.picture} alt="nothing" />
    </div>
  );
};


export default Photo;
