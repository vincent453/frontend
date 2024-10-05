import React from 'react'
import './Explore.css'
import horizontal_line from '../Assets/horizontal_line.png'
import Button from '../Button/Button';
import Left from '../Left/Left';

const Explore = () => {
  return (
      <div className='explore'>
      <div className='move'>
    <div className='left-right'>
       <Left name="Home Builder Contractor"/>
        <div className='right'>
          <h2 className='date'>2024</h2>
          <img src={horizontal_line} />
        <h2 className='best'>best quality home builder constractor</h2>
      </div>
    </div>
    <div className='main-text'>
      <h1>explore lorenzo tekniks home construction mastery</h1>
    </div>
    <div className='text-button'>
        <div className='text'>
          <p>Uncover how Lorenzo Tekniks is shaping the future of building engineering. Our expertise ranges from innovative structural designs to sustainable construction practices. Explore our projects and experience how we bring engineering excellence to life.</p>
        </div>
        <div className='button'>
         <Button name="Explore More"/>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Explore


