import { useRef, useState } from "react"
import { FaBars } from "react-icons/fa"
import { MdClose } from "react-icons/md";


function Navbar() {
  const [showLinks, setShowLinks] = useState(false)

  return (
    <>
    <header>
      <div className="nav-header">
        <img src="./images/Logo.png" alt="logo" className="logo-container" />
        <button className='nav-toggle' 
        onClick={()=> setShowLinks(!showLinks)}
        >
          {showLinks ? <MdClose /> : <FaBars />}
        </button>
      </div>
        {/* <img src="./images/Logo.png" alt="" className="logo-container"/> */}

        <nav className={showLinks ? "": "hidden-nav"}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#services">Service</a>
            </li>
            <li>
              <a href="#">Feature</a>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">Testimonial</a>
            </li>

            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </nav>
        <div className={showLinks ? "right-container": "hidden-nav right-container"}>
          <p className="login">Login</p>
          <p className="signup">Sign up</p>
        </div>
      </header>
      
      </>
  )
}

export default Navbar

