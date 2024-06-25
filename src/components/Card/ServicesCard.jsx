import React from 'react'

function ServicesCard({imgurl, para, heading}) {
  
  return (
    <div className="card">
      <img src={imgurl} alt="" />
      <h4>{heading}</h4>
      <p>{para}</p>
    </div>
  )
}

export default ServicesCard