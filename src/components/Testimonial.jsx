import React from 'react'

function Testimonial() {
    return (
        <div className="testimonial">
            <div className="container">
                <div className="left">
                    <img src="./images/image9.png" alt="" width="400" height="400" />
                </div>
                <div className="right">
                    <p>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                    <div className="reviewer">
                        <h4>Tim Smith</h4>
                        <p>British Dragon Boat Racing Association</p>
                    </div>
                    <div className="logos">
                        <img src="./images/Logo1.png" alt="" />
                        <img src="./images/Logo2.png" alt="" />
                        <img src="./images/Logo3.png" alt="" />
                        <img src="./images/Logo4.png" alt="" />
                        <img src="./images/Logo5.png" alt="" />
                        <img src="./images/Logo6.png" alt="" />
                        <h3 className="btn-customer">Meet all customers <span></span></h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial