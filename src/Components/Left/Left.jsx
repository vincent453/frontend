import React from 'react';
import home from '../Assets/home.png';
import './Left.css';

const Left = (props) => {
  return (
    <div className={`left ${props.className}`}>
      <img src={home} alt="Home" className={props.className} />
      <h2>{props.name}</h2>
    </div>
  );
};

export default Left;
