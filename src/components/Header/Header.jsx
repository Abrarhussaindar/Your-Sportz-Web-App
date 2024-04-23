import { Link, NavLink } from "react-router-dom"
import ham from "../../images/ham.svg"
import logo from "../../images/logo.png"
import globe from "../../images/globe.svg"
import arrow from "../../images/Vector.svg"
import "./Header.css"
import { useEffect, useState } from "react"

export default function Header() {
  const navLinks = [
    {
      to: "/",
      text: "Home",
    },
    {
      to: "/about",
      text: "About Us",
    },
    {
      to: "*",
      text: "Features",
    },
    {
      to: "/pricing",
      text: "Pricing",
    },
    {
      to: "/contactUs",
      text: "Contact Us",
    }
  ]

  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    // Add scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up by removing event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={hasScrolled ? 'scrolled' : ''}>
      <div className="left">
        <img src={logo} alt="" />
        <h2>Your<span>Sportz</span></h2>
      </div>
      <div className="right">
        <nav>
          <ul>
            {navLinks.map((link) => (
              <NavLink to={link.to} key={link.text}>
                <li className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }>{link.text}</li>
              </NavLink>
            ))}
          </ul>

          <div className="btns">
            <div className="langs">
              <img src={globe} alt="" />
              <div className="customSelect">
                <select name="Langauges" id="langs">
                  <option value="English">En</option>
                  <option value="Other">Other</option>
                </select>
                <span>

                  <img src={arrow} alt="" />
                </span>
              </div>
            </div>
            <Link to="/login">

              <button>Login</button>
            </Link>
          </div>
        </nav>
        <img src={ham} className="ham" alt="ham" />
      </div>
    </header>
  )
}
