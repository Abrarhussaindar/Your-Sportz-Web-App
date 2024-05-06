import "../ForgotPassword/ForgotPassword.css"
import passwordImg from "../../images/password.png"
import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import seePass from "../../images/eye.png";
import notSeePass from "../../images/hidden.png";
import { multiStepContext } from "../../UserContext";

export default function CreateNewPassword() {
    const { userData, setUserData } = useContext(multiStepContext);
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [passwordWarning, setPasswordWarning] = useState('');
    const [click, setClick] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setClick(true)
    }
    const [see, setSee] = useState(false)
    const handleClick = (e) => {
        e.preventDefault();
        setSee(!see);
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
        <main className="forgot">
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
            <div className="wrapper CNP">
                <img src={passwordImg} alt="" />
                <div className="formContainer">
                    <div className="heading">
                        <h3>Create new password</h3>
                        <p>Your new password must be different from previously used password</p>
                    </div>
                    <form>
                        <div className="formEle">
                            <label htmlFor="password">Password</label>
                            <input
                                type="text"
                                id="password"
                                value={password}
                                required onChange={handlePasswordChange}
                                placeholder="Password"
                            />
                        </div>
                        <div className="formEle">
                            <label htmlFor="confirmPassword">
                                Confirm Password <img className="w-5" src={see ? seePass : notSeePass} onClick={handleClick} />
                            </label>
                            <input
                                type={see ? "text" : "password"}
                                id="confirmPassword"
                                value={confirmPassword}
                                required onChange={handleConfirmPasswordChange} placeholder="Confirm Password"
                            />
                            {passwordWarning && <p className="war">{passwordWarning}</p>}

                        </div>
                        {
                            click
                                ?
                                <button type="submit" disabled={true} className="disable">Loading...</button>
                                :
                                <button type="submit" onClick={handleSubmit}>Submit</button>
                        }
                    </form>
                    <Link to="/login">Back to login</Link>
                </div>
            </div>

        </main>
    )
}
