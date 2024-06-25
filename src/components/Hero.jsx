import React from 'react'
import Button from './Buttons/Button'

function Hero() {
  return (
    <div className='hero'>
        <div className="container">
            <div className="left">
                <h2>Lessons and insights <span>from 8 years</span></h2>
                <p>Where to grow your business as a photographer: site or social media?</p>
                <Button text="Register" cssClass="btn"/>
            </div>
            <div className="right">
                <img src="./images/Illustration.png" alt="" width="400" height="400"/>
            </div>
        </div>
    </div>
  )
}

export default Hero