import "./Footer.css"
import logo from "../../images/logo.png"
import email from "../../images/email.png"
import insta from "../../images/insta.png"
import facebook from "../../images/facebook.png"
import youtube from "../../images/youtube.png"
import LinkedIn from "../../images/linkedin.png"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

export default function Footer() {
  const { t } = useTranslation()
  return (
    <footer>
      <div className="top">
        <div className="logo">
          <img src={logo} alt="" />
          {/* navbar logo left and right */}
          <h3>{t("logoLeft")}<span>{t("logoRight")}</span></h3>
        </div>
        <div className="links">
          <div className="indiLinks">
            <h3>{t("socialH2")}</h3>
            <ul>
              <a href="#">
                <li><img src={email} alt="" />{t("socialLi1")} </li>
              </a>
              <a href="">

                <li><img src={LinkedIn} alt="" />{t("socialLi4")} </li>
              </a>
              <a href="#">
                <li><img src={youtube} alt="" />{t("socialLi5")} </li>
              </a>
              <a href="">

                <li><img src={facebook} alt="" />{t("socialLi3")} </li>
              </a>
              <a href="">

                <li><img src={insta} alt="" />{t("socialLi2")} </li>
              </a>
            </ul>
          </div>

          <div className="indiLinks">
            <h3>{t("needH2")}</h3>
            <ul>
              <Link to="/contactUs">
                <li>{t("needLi1")}</li>
              </Link>
              <Link to="/pricing">
                <li>{t("needLi2")}</li>
              </Link>
              <Link to="#faq">

                <li>{t("needLi3")}</li>
              </Link>
            </ul>
          </div>
          <div className="indiLinks">
            <h3>{t("legalH2")}</h3>
            <ul>
              <Link to="/terms-conditions">
                <li>{t("legalLi1")}</li>
              </Link>
              <Link to="/privacy-policy">
                <li>{t("legalLi2")}</li>
              </Link>

            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; {t("copyright")}</p>
        
      </div>
    </footer>
  )
}
