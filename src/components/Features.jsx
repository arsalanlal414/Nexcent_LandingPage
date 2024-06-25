import React from 'react'
import FeaturesCard from './Card/FeaturesCard'

function Features() {
  const cards = [
    {
      imgurl:"./images/I1.png",
      heading:"2,245,341",
      para:"Members"
    },
    {
      imgurl:"./images/I2.png",
      heading:"46,328",
      para:"Clubs"
    },
    {
      imgurl:"./images/I3.png",
      heading:"828,867",
      para:"Event Bookings"
    },
    {
      imgurl:"./images/I4.png",
      heading:"1,926,436",
      para:"Payments"
    },
  ]
  return (
    <div className="features">
      <div className="container">
        <div className="left">
          <h4>Helping a local <br /> <span>business reinvent itself</span></h4>
          <p>We reached here with our hard work and dedication</p>
        </div>
        <div className="right">
          {
            cards.map((card, index) => (
              <FeaturesCard
                imgurl={card.imgurl}
                heading={card.heading}
                para={card.para}
              />
            ))
          }

        </div>
      </div>
    </div>
  )
}

export default Features