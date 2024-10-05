import React from 'react';
import './Button.css';
import arrow from '../Assets/arrow.png';

const Button = (props) => {
  return (
    <div className='button'>
      <button className={props.className}>
        {props.name} <img src={arrow} alt="Arrow icon" />
      </button>
    </div>
  );
}

export default Button;
