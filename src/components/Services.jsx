import React from 'react'
import ServicesCard from './Card/ServicesCard'

function Services() {
    const cards = [
        {
          imgurl:"./images/Icon.png",
          heading:"Membership Organisations",
          para:"Our membership management software provides full automation of membership renewals and payments"
        },
        {
          imgurl:"./images/Icon2.png",
          heading:"National Associations",
          para:"Our membership management software provides full automation of membership renewals and payments"
        },
        {
          imgurl:"./images/Icon3.png",
          heading:"All Clubs And Groups",
          para:"Our membership management software provides full automation of membership renewals and payments"
        },
      ]
  return (
    <div className="clients" id="services">
        <div className="container">
            <div className="top">
            <h2>Manage your entire community in a single system</h2>
            <p>Who is Nextcent suitable for?</p>
            </div>
            <div className="bottom">
                {
                    cards.map((card,index)=>(
                        <ServicesCard 
                            imgurl={card.imgurl}
                            heading ={card.heading}
                            para={card.para}
                        />
                    ))
                }
                
            </div>
        </div>
    </div>
  )
}

export default Services