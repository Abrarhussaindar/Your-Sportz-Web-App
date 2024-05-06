import { useContext, useState } from "react";
import LoginAvatar from "../../images/login.png";
import { NavLink, useNavigate } from "react-router-dom";
import { multiStepContext } from "../../UserContext";
import axios from "../../axios";
import seePass from "../../images/eye.png";
import notSeePass from "../../images/hidden.png";
import "./Register.css"
import { useTranslation } from "react-i18next";

const Register = () => {
  const { userData, setUserData } = useContext(multiStepContext);
  const navigate = useNavigate();
  const { t } = useTranslation()
  const [see, setSee] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [warning, setWarning] = useState('');
  const [passwordWarning, setPasswordWarning] = useState('');
  const [isActive, setIsActive] = useState(true)
  const [isSchool, setIsSchool] = useState(true)
  const [click, setClick] = useState(false)
  const handleToggle = () => {
    setIsActive(!isActive);
    setIsSchool(!isSchool);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setSee(!see); // Toggle the value of see
  };
  const handleRegisterUser = async (event) => {
    event.preventDefault();
    setClick(true)
    const data = userData
    try {
      const res = await axios.post("/webauth/register", data)
      if (res.data === "registered") {
        setUserData('')
        navigate('/login');
      }
    } catch (err) {
      console.log(err);
    }

  }
  const handleEmailChange = (e) => {
    const enteredEmail = e.target.value;
    setEmail(e.target.value)
    if (isValidProfessionalEmail(enteredEmail) && !enteredEmail.endsWith('@gmail.com')) {
      setUserData({ ...userData, "email": enteredEmail });
      setWarning('');
    } else {
      setWarning('Please enter a valid professional email address that does not end with @gmail.com');
    }
  };
  const isValidProfessionalEmail = (email) => {
    const professionalDomains = ['example.com', 'companydomain.com', 'yourcompany.com', 'yoursportz.in'];
    const domain = email.split('@')[1];
    return professionalDomains.includes(domain);
  };
  const handlePasswordChange = (e) => {
    const enteredPassword = e.target.value;
    setPassword(e.target.value)
    if (enteredPassword.length >= 4) {
      setUserData({ ...userData, "password": enteredPassword });
      setPasswordWarning('');
    } else {
      setPasswordWarning('Password must be at least 4 characters long');
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const enteredConfirmPassword = e.target.value;
    setConfirmPassword(e.target.value)
    if (enteredConfirmPassword === userData.password) {
      setUserData({ ...userData, "confirmPassword": enteredConfirmPassword });
      setPasswordWarning('');
    } else {
      setPasswordWarning('Passwords do not match');
    }
  };

  return (
    <main className="register">
      <div className="absoluteleft">
        <svg
          width="146"
          height="371"
          viewBox="0 0 146 371"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M145.5 390.5C145.5 530.206 26.6545 643.5 -120 643.5C-266.655 643.5 -385.5 530.206 -385.5 390.5C-385.5 250.794 -266.655 137.5 -120 137.5C26.6545 137.5 145.5 250.794 145.5 390.5Z"
            stroke="#554585"
            strokeOpacity="0.91"
          />
          <path
            d="M123.5 253.5C123.5 393.206 4.65454 506.5 -142 506.5C-288.655 506.5 -407.5 393.206 -407.5 253.5C-407.5 113.794 -288.655 0.5 -142 0.5C4.65454 0.5 123.5 113.794 123.5 253.5Z"
            stroke="#554585"
            strokeOpacity="0.91"
          />
        </svg>
      </div>
      <div className="absoluteright">
        <svg
          width="302"
          height="239"
          viewBox="0 0 302 239"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="198.2"
            cy="241.184"
            r="193"
            transform="rotate(1.56543 198.2 241.184)"
            fill="url(#paint0_linear_2340_653)"
          />
          <circle
            cx="206.039"
            cy="228.894"
            r="195.5"
            transform="rotate(1.56543 206.039 228.894)"
            stroke="url(#paint1_linear_2340_653)"
            strokeWidth="2"
          />
          <circle
            cx="206.449"
            cy="213.9"
            r="195.75"
            transform="rotate(1.56543 206.449 213.9)"
            stroke="url(#paint2_linear_2340_653)"
            strokeWidth="1.5"
          />
          <circle
            cx="202.778"
            cy="201.795"
            r="196"
            transform="rotate(1.56543 202.778 201.795)"
            stroke="url(#paint3_linear_2340_653)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2340_653"
              x1="198.2"
              y1="48.1843"
              x2="198.2"
              y2="434.184"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9689BB" />
              <stop offset="0.525" stopColor="#645493" />
              <stop offset="0.725" stopColor="#5A4C84" />
              <stop offset="1" stopColor="#5B4C88" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_2340_653"
              x1="206.039"
              y1="32.3939"
              x2="206.039"
              y2="425.394"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9689BB" />
              <stop offset="0.525" stopColor="#645493" />
              <stop offset="0.725" stopColor="#5A4C84" />
              <stop offset="1" stopColor="#5B4C88" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_2340_653"
              x1="206.449"
              y1="17.3997"
              x2="206.449"
              y2="410.4"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9689BB" />
              <stop offset="0.525" stopColor="#645493" />
              <stop offset="0.725" stopColor="#5A4C84" />
              <stop offset="1" stopColor="#5B4C88" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_2340_653"
              x1="202.778"
              y1="5.29474"
              x2="202.778"
              y2="398.295"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9689BB" />
              <stop offset="0.525" stopColor="#645493" />
              <stop offset="0.725" stopColor="#5A4C84" />
              <stop offset="1" stopColor="#5B4C88" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="wrapper">
        <div className="left">
          <button onClick={() => navigate(-1)}>{t("registerBackBtn")}</button>
          <h1>{t("registerH1")}</h1>
          <h4>{t("registerH4")}</h4>
          <p>{t("registerP")}</p>
          <img src={LoginAvatar} alt="Login Avatar" />
        </div>
        <div className="right">
          <div className="tab">
            <button className={isActive ? "activeBtn" : "notActive"} onClick={handleToggle}>{t("registerToggleGeneral")}</button>
            <button className={!isActive ? "activeBtn" : "notActive"} onClick={handleToggle}>{t("registerToggleSchool")}</button>
          </div>
          <form>
            <div className="formEle">
              <label htmlFor="fullName">{t("registerFormName")}</label>
              <input
                type="text"
                id="fullName"
                value={userData['fulltName']}
                required onChange={(e) => setUserData({ ...userData, "fullName": e.target.value })}
                placeholder={`${t("registerFormName")}`}
              />
            </div>
            <div className="formEle">
              <label htmlFor="institution">{isSchool ? `${t("registerFormInstit")}` : `${t("registerFormComp")}`}</label>
              {
                isSchool
                  ?
                  <input
                    type="text"
                    id="institution"
                    value={userData['institution']}
                    required onChange={(e) => setUserData({ ...userData, "institution": e.target.value })}
                    placeholder={`${t("registerFormInstit")}`}
                  />
                  :
                  <input
                    type="text"
                    id="company"
                    value={userData['company']}
                    required onChange={(e) => setUserData({ ...userData, "company": e.target.value })}
                    placeholder={`${t("registerFormComp")}`}
                  />
              }
            </div>
            <div className="formEle">
              <label htmlFor="address">{t("registerFormAdd")}</label>
              <input
                type="text"
                id="address"
                value={userData['address']}
                required onChange={(e) => setUserData({ ...userData, "address": e.target.value })}
                placeholder={`${t("registerFormAdd")}`}
              />
            </div>
            <div className="formEle">
              <label htmlFor="email">{t("registerFormEmail")}</label>
              <input
                type="email"
                id="email"
                value={email}
                required onChange={handleEmailChange}
                placeholder={`${t("registerFormEmail")}`}
              />
              {warning && <p className="error">{warning}</p>}
            </div>
            <div className="formEle">
              <label htmlFor="password">{t("registerFormPassword")}</label>

              <input
                type="text"
                id="password"
                value={password}
                required onChange={handlePasswordChange}
                placeholder={`${t("registerFormPassword")}`}
              />
            </div>
            <div className="formEle">
              <label htmlFor="confirmPassword">{t("registerFormConfirmPassword")}<img className="w-5" src={see ? seePass : notSeePass} onClick={handleClick} /></label>

              <input
                type={see ? "text" : "password"}
                id="confirmPassword"
                value={confirmPassword}
                required onChange={handleConfirmPasswordChange}
                placeholder={`${t("registerFormConfirmPassword")}`}
              />
              {passwordWarning && <p className="error">{passwordWarning}</p>}

            </div>
            <div className="formEle terms ">
              <input
                type="checkbox"
                id="agreeTerms"
                value={userData['agreeTerms']}
                required onChange={() => setUserData({ ...userData, "agreeTerms": true })}

              />
              <label htmlFor="agreeTerms">
                {t("registerFormAgree")}
              </label>
            </div>
            {
              click
                ?
                <button type="submit" disabled={true} className="disable">{t("registerFormLoading")}</button>
                :
                <button type="submit" onClick={handleRegisterUser}>{t("registerFormRegister")}</button>
            }
          </form>
          <div className="bottom">
            <p>{t("registerFormAlready")}</p>
            <NavLink to="/login">{t("registerFormLogin")}</NavLink>
          </div>
        </div>
      </div>

    </main>

  );
};

export default Register;
