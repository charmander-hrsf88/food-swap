import React from 'react';
import Photo from './Photo.jsx';

const Photos = ( props ) => {
  return (
    <div className="images">
      <h2>Photos</h2>
      {props.updateFood.map((pics, i) =>
        <Photo pics={pics} key={i} />
      )}
    </div>
  );
};


export default Photos;
