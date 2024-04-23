import { useContext, useState } from "react";
import LoginAvatar from "../images/login.png";
import { NavLink, useNavigate } from "react-router-dom";
import { multiStepContext } from "../UserContext";
import axios from "../axios";
import seePass from "../images/eye.png";
import notSeePass from "../images/hidden.png";

const Register = () => {
  const { userData, setUserData } = useContext(multiStepContext);
  const [isSchool, setIsSchool] = useState(true);
  const navigate = useNavigate();
  const [see, setSee] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [warning, setWarning] = useState('');
  const [passwordWarning, setPasswordWarning] = useState('');
  const toggleMode = () => {
    setIsSchool(!isSchool);
  };
  const handleClick = (e) => {
    e.preventDefault();
    setSee(!see); // Toggle the value of see
  };
  const handleRegisterUser = async (event) => {
    event.preventDefault();
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
    // List of professional email domains
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
    <div className="relative">
      <div className="absolute left-0 bottom-0">
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
            stroke-opacity="0.91"
          />
          <path
            d="M123.5 253.5C123.5 393.206 4.65454 506.5 -142 506.5C-288.655 506.5 -407.5 393.206 -407.5 253.5C-407.5 113.794 -288.655 0.5 -142 0.5C4.65454 0.5 123.5 113.794 123.5 253.5Z"
            stroke="#554585"
            stroke-opacity="0.91"
          />
        </svg>
      </div>
      <div className="absolute right-0 bottom-0">
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
            stroke-width="2"
          />
          <circle
            cx="206.449"
            cy="213.9"
            r="195.75"
            transform="rotate(1.56543 206.449 213.9)"
            stroke="url(#paint2_linear_2340_653)"
            stroke-width="1.5"
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
              <stop stop-color="#9689BB" />
              <stop offset="0.525" stop-color="#645493" />
              <stop offset="0.725" stop-color="#5A4C84" />
              <stop offset="1" stop-color="#5B4C88" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_2340_653"
              x1="206.039"
              y1="32.3939"
              x2="206.039"
              y2="425.394"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#9689BB" />
              <stop offset="0.525" stop-color="#645493" />
              <stop offset="0.725" stop-color="#5A4C84" />
              <stop offset="1" stop-color="#5B4C88" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_2340_653"
              x1="206.449"
              y1="17.3997"
              x2="206.449"
              y2="410.4"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#9689BB" />
              <stop offset="0.525" stop-color="#645493" />
              <stop offset="0.725" stop-color="#5A4C84" />
              <stop offset="1" stop-color="#5B4C88" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_2340_653"
              x1="202.778"
              y1="5.29474"
              x2="202.778"
              y2="398.295"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#9689BB" />
              <stop offset="0.525" stop-color="#645493" />
              <stop offset="0.725" stop-color="#5A4C84" />
              <stop offset="1" stop-color="#5B4C88" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="relative flex flex-wrap items-center mx-2 md:mx-10">
        <div className="w-full lg:w-2/3 px-4 md:px-36 mt-20">
          <div className="px-4 md:px-20">
            <button onClick={() => navigate(-1)}>Go Back</button>
            <div className="text-purple-700 font-bold text-4xl">
              Welcome back!
            </div>
            <div>Nice to see you again</div>
            <div>
              <p className="text-gray-500">
                YourSportz, the dynamic football app, offers a plethora of
                health and lifestyle benefits. Let&rsquo;s delve into how it can
                enhance your well-being
              </p>
            </div>
          </div>
          <div>
            <img src={LoginAvatar} alt="Login Avatar" />
          </div>
        </div>
        <div className="w-full lg:w-1/3">
          <div className="bg-white p-8 rounded-lg ">
            <div className="flex justify-center mb-4 ">
              <div className="bg-gray-200 rounded-full px-2 py-2 flex items-center ">
                <button
                  className={`${isSchool
                    ? " bg-white text-gray-600 shadow-md"
                    : "bg-gray-200 text-gray-800"
                    } rounded-full px-4 py-2 transition-colors duration-500 focus:outline-none`}
                  onClick={toggleMode}
                >
                  School
                </button>
                <button
                  className={`${!isSchool
                    ? "bg-white text-gray-600 shadow-md"
                    : "bg-gray-200 text-gray-800 "
                    } rounded-full px-4 py-2 transition-colors duration-500 focus:outline-none`}
                  onClick={toggleMode}
                >
                  Corporate
                </button>
              </div>
            </div>
            <form>
              <div className="mb-4">
                <label htmlFor="fullName" className="block font-semibold mb-1">
                  Full name
                </label>
                <input
                  type="text"
                  id="fullName"
                  value={userData['fulltName']}
                  required onChange={(e) => setUserData({ ...userData, "fullName": e.target.value })}
                  className="w-full border bg-gray-50 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Full name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="institution"
                  className="block font-semibold mb-1"
                >
                  {isSchool ? "Institution" : "Company"}
                </label>
                {
                  isSchool
                    ?
                    <input
                      type="text"
                      id="institution"
                      value={userData['institution']}
                      required onChange={(e) => setUserData({ ...userData, "institution": e.target.value })}
                      className="w-full border bg-gray-50 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder={"Institution"}
                    />
                    :
                    <input
                      type="text"
                      id="company"
                      value={userData['company']}
                      required onChange={(e) => setUserData({ ...userData, "company": e.target.value })}
                      className="w-full border bg-gray-50 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder={"Company"}
                    />
                }
              </div>
              <div className="mb-4">
                <label htmlFor="address" className="block font-semibold mb-1">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  value={userData['address']}
                  required onChange={(e) => setUserData({ ...userData, "address": e.target.value })}
                  className="w-full border bg-gray-50 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Address"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block font-semibold mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  required onChange={handleEmailChange}
                  className="w-full border bg-gray-50 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Email account"
                />
                {warning && <p className="text-red-500">{warning}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block font-semibold mb-1">
                  Password 
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="password"
                    value={password}
                    required onChange={handlePasswordChange}
                    className="w-full border bg-gray-50 text-gray-900 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 pr-8"
                    placeholder="Password"
                  />
                  {/* <span className="absolute inset-y-0 right-0 pr-3 flex items-center">
              👁
            </span> */}
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="confirmPassword"
                  className="flex align-items-center gap-3  font-semibold mb-1"
                >
                  Confirm Password <span><img className="w-5" src={ see ? seePass : notSeePass} onClick={handleClick}/></span>
                </label>
                <div className="relative">
                  <input
                    type={see ? "text" : "password"}
                    id="confirmPassword"
                    value={confirmPassword}
                    required onChange={handleConfirmPasswordChange}
                    className="w-full border bg-gray-50 text-gray-900 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 pr-8"
                    placeholder="Confirm Password"
                  />
                  {/* <span className="absolute inset-y-0 right-0 pr-3 flex items-center">
              👁
            </span> */}
                  {passwordWarning && <p className="text-red-500">{passwordWarning}</p>}
                </div>
              </div>
              <div className="mb-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="agreeTerms"
                    value={userData['agreeTerms']}
                    required onChange={() => setUserData({ ...userData, "agreeTerms": true })}
                    className="mr-2 form-checkbox h-5 w-5 text-blue-500"
                  />
                  <label htmlFor="agreeTerms" className="text-gray-700">
                    I agree to the Terms of Service and Privacy Policy
                  </label>
                </div>
              </div>
              <button
                type="submit"
                onClick={handleRegisterUser}
                className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition-colors duration-300"
              >
                Register
              </button>
              <p className="text-center mt-6">
                Already have an account?{" "}
                <NavLink
                  to="/login"

                  className="text-blue-500 hover:text-blue-700"
                >
                  Login
                </NavLink>

              </p>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
