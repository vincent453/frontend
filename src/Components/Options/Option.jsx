import React from 'react'
import './Option.css'
const Option = (props) => {
  return (
    <div className='options'>
      <div className='icon-container'>
      <div className='outline-circle'>
        <img src={props.img}/>
      </div>
      </div>
      <div className='text-box'>
        <h2>{props.heading}</h2>
        <p>{props.paragraph}</p>
      </div>
      
    </div>
  )
}

export default Option
