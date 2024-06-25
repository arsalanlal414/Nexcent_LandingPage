import { FaTelegramPlane, FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  
  return (
    <footer className="footer">
        <div className="footer-container">
          <div className="footer-copyright footer-section">
            <img src="./images/Logo-white.png" alt="" width="200px"/>
            <p>Copyright © 2020 Nexcent ltd.<br /> All rights reserved</p>
            <div className="social-icons">
              <div className="icon">
               <FaInstagram />
              </div>
              <div className="icon">
                <FaFacebookF />
              </div>
              <div className="icon">
                <FaTwitter />
              </div>
              <div className="icon">
                <FaYoutube />
              </div>
            </div>
          </div>
          <div className="footer-company footer-section">
            <h3>Company</h3>
            <ul>
              <li>About us</li>
              <li>Blogs</li>
              <li>Contact us</li>
              <li>Pricing</li>
              <li>Testimonial</li>
            </ul>
          </div>
          <div className="footer-support footer-section">
            <h3>Support</h3>
            <ul>
              <li>Help Center</li>
              <li>Terms of Service</li>
              <li>Legal</li>
              <li>Privacy Policy</li>
              <li>Legal</li>
            </ul>
          </div>
          <div className="footer-cta footer-section">
            <h3>Stay up to date</h3>
            <div className="input-field subscribe">
              <input type="text" placeholder="Your email address"/>
              <button><FaTelegramPlane /></button>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer