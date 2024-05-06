import { Link, NavLink } from "react-router-dom"
import ham from "../../images/ham.svg"
import logo from "../../images/logo.png"
import close from "../../images/close.png"
import "./Header.css"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import LanguageSelector from "../LanguageSelector/LanguageSelector"

export default function Header() {
  const { t } = useTranslation()
  const navLinks = [
    {
      to: "/",
      text: `${t("navHome")}`,
    },
    {
      to: "/about",
      text: `${t("navAbout")}`,
    },
    {
      to: "/features",
      text: `${t("navFeatures")}`,
    },
    {
      to: "/pricing",
      text: `${t("navPricing")}`,
    },
    {
      to: "/contactUs",
      text: `${t("navContact")}`,
    }
  ]
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={hasScrolled ? 'scrolled' : ''}>
      <div className="left">
        <Link to="/">
          <img src={logo} alt="" />
          
          <h2>{t("logoLeft")}<span>{t("logoRight")}</span></h2>
        </Link>
      </div>
      <div className={`right`}>
        <nav>
          <ul>
            {navLinks.map((link) => (
              <NavLink to={link.to} key={link.text}>
                <li>{link.text}</li>
              </NavLink>
            ))}
          </ul>
          <div className="btns">
            <LanguageSelector />
            <Link to="/login">

              <button className="loginBtn">{t("loginBtn")}</button>
            </Link>
          </div>
        </nav>
        <img src={ham} onClick={toggleMenu} className="ham" id="ham" alt="ham" />

      </div>
      <div className={`${isMenuOpen ? 'open' : 'notOpen'}`}>

        <div className="top">
          <h2 className="menuLogo">{t("logoLeft")}<span>{t("logoRight")}</span></h2>
          <img className="close" src={close} alt="" onClick={toggleMenu} />
        </div>
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
            <LanguageSelector />
            <Link to="/login">

              <button className="loginBtn">{t("loginBtn")}</button>
            </Link>
          </div>
        </nav>
      </div>

    </header>
  )
}
