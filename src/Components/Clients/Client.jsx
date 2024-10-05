import React from 'react'
import './Client.css'
import Left from '../Left/Left'
import SkillBar from '../Skillbar/Skillbar'
import client_bg from '../Assets/client-bg.png'
const Client = () => {
  return (
    <div className='client'>
      <div className='percent-client'>
        <div className='percent'>
            <Left name="Home Builder Contractor" className="home"/>
            <div className='percet-text'>
            <h1>The Lorenzo Tekniks Advantage</h1>
            <p>Innovative solutions. Sustainable designs. Exceptional building engineering that stands the test of time.</p>
         </div>
         <SkillBar skillName="Frame Installation" targetPercentage={90} duration={2000} />
      <SkillBar skillName="Electrical and Plumbing" targetPercentage={85} duration={2000} />
      <SkillBar skillName="Interior Finishing" targetPercentage={98} duration={2000} />
        </div>
        <div className='client-bg'>
        <div className='image-div'>
          <img src={client_bg} />
          </div>
          <div className='number-client'>
              <h1>50,000 +</h1>
              <h2>Satisfied Clients</h2>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Client
