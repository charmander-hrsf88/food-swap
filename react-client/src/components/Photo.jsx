import React from 'react';
import Question from '../icons/question.jsx';

const Photo = ({ pics }) => {
 return (
   <div className="images">
     {pics.picture === null ?
       <Question /> :
       <img src={pics.picture} alt="nothing" /> } <br />
     {pics.dishname} <br />
     {pics.description}
   </div>
 );
};


export default Photo;
