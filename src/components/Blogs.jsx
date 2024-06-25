import React from 'react'

import Card from './Card/Card'

function Blogs() {
    const cards = [
        {
            text:"Creating Streamlined Safeguarding Processes with OneRen",
            imgurl: "./images/image18.png"
        },
        {
            text:"Creating Streamlined Safeguarding Processes with OneRen",
            imgurl: "./images/image19.png"
        },
        {
            text:"Creating Streamlined Safeguarding Processes with OneRen",
            imgurl: "./images/image20.png"
        },
    ] 
    return (
        <div className="blogs">
            <div className="container">
                <h2>Caring is the new marketing</h2>
                <p>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
                <div className="cards">
                    {
                        cards.map((card,index)=>(
                            <Card 
                                text={card.text}
                                imgurl={card.imgurl}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Blogs