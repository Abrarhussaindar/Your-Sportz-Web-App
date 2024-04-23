import "./Footer.css"
import logo from "../../images/logo.png"
import yt from "../../images/yt.svg"
import insta from "../../images/insta.svg"
import email from "../../images/mail.svg"

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

                <li><img src={yt} alt="" />Youtube</li>
              </a>
              <a href="">

                <li><img src={insta} alt="" /> Instagram</li>
              </a>
            </ul>
          </div>
          <div className="indiLinks">
            <h3>Pricing</h3>
            <ul>
              <a href="#">
                <li><span><img src={email} alt="" /></span> Email</li>
              </a>
              <a href="">

                <li><span><img src={yt} alt="" /></span> Youtube</li>
              </a>
              <a href="">

                <li><span><img src={insta} alt="" /></span> Instagram</li>
              </a>
            </ul>
          </div>
          <div className="indiLinks">
            <h3>Need Help</h3>
            <ul>
              <a href="#">
                <li><span><img src={email} alt="" /></span> Email</li>
              </a>
              <a href="">

                <li><span><img src={yt} alt="" /></span> Youtube</li>
              </a>
              <a href="">

                <li><span><img src={insta} alt="" /></span> Instagram</li>
              </a>
            </ul>
          </div>
          <div className="indiLinks">
            <h3>Legal</h3>
            <ul>
              <a href="#">
                <li><span><img src={email} alt="" /></span> Email</li>
              </a>
              <a href="">

                <li><span><img src={yt} alt="" /></span> Youtube</li>
              </a>
              <a href="">

                <li><span><img src={insta} alt="" /></span> Instagram</li>
              </a>
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
