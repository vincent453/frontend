import React from 'react'
import './Choose.css'
import Left from '../Left/Left'
import Button from '../Button/Button'
import usergroup from '../Assets/user-groups.png'
import Option from '../Options/Option'
import technology from '../Assets/technology.png'
import bulb from '../Assets/bulb.png'
const Choose = () => {
  return (
    <div className='choose'>
      <div className='all'>
        <div className='why-home'>
            <Left name="WHY CHOOSE US" className="home"/>
            <h1>Elevating Home Construction Standards</h1>
        </div>
        <div className='button-div'>
            <Button name="Explore More" />
        </div>
      </div>
      <div className='three-container'>
      <div className='three-places'>
      <Option img={usergroup}  heading="Quality Craftsmanship" paragraph="Vel purus etiam sollicitudin ac amet sed maecenas. Condimentum nascetur cras id scelerisque. Penatibus amet elit est."/>
      <Option img={technology} heading="Customization Options" paragraph="Vel purus etiam sollicitudin ac amet sed maecenas. Condimentum nascetur cras id scelerisque. Penatibus amet elit est."/>
      <Option img={bulb} heading="Timely Completion" paragraph="Vel purus etiam sollicitudin ac amet sed maecenas. Condimentum nascetur cras id scelerisque. Penatibus amet elit est."/>
    </div>
    <div className='line'>
    <hr />
    </div>
    </div>
    </div>
  )
}

export default Choose
