import React from 'react'
import Button from './Buttons/Button'

function Cover({ imageSrc, title, paragraph }) {
  return (
    <div className='cover'>
      <div className="container">
        <div className="cover-left">
          <img src={imageSrc} alt="Cover illustration" width="400" height="400"/>
        </div>
        <div className="cover-right">
          <h2>{title}</h2>
          <p>{paragraph}</p>
          <Button text="Register" cssClass="btn"/>
        </div>
      </div>
    </div>
  )
}

export default Cover