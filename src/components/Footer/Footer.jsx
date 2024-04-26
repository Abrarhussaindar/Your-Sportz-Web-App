import "./Footer.css"
import logo from "../../images/logo.png"
import insta from "../../images/insta.svg"
import email from "../../images/mail.svg"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer>
      <div className="top">
        <div className="logo">
          <img src={logo} alt="" />
          <h3>Your<span>Sportz</span></h3>
        </div>
        <div className="links">
          <div className="indiLinks">
            <h3>Social</h3>
            <ul>
              <a href="#">
                <li><img src={email} alt="" /> Email</li>
              </a>
              <a href="">

                <li><img src={insta} alt="" /> Instagram</li>
              </a>
            </ul>
          </div>
          
          <div className="indiLinks">
            <h3>Need Help</h3>
            <ul>
              <Link to="/contactUs">
                <li>Contact Us</li>
              </Link>
              <Link to="/pricing">
                <li>Pricing</li>
              </Link>
              <Link to="#faq">

                <li>FAQ</li>
              </Link>
            </ul>
          </div>
          <div className="indiLinks">
            <h3>Legal</h3>
            <ul>
              <Link to="/terms-conditions">
                <li>Terms of use</li>
              </Link>
              <Link to="/privacy-policy">
                <li>Privacy Policy</li>
              </Link>

            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <span>&copy;</span><p>yoursportz by Navrekh Technologies PVT LTD</p>
      </div>
    </footer>
  )
}
