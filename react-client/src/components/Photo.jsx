import React from 'react';

const Photo = ({ pics }) => {
  return (
    <div className="images">
      <img src={pics.picture} alt="nothing" /> <br />
      {pics.dishname} <br />
      {pics.description}
    </div>
  );
};


export default Photo;
