import "../ForgotPassword/ForgotPassword.css"
import passwordImg from "../../images/password.png"
import { Link } from "react-router-dom"
import { useState } from "react"

export default function VerifyCode() {
    const [tokenNumber, setTokenNumber] = useState("")
    const [click, setClick] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setClick(true)
    }
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
            <div className="wrapper">
                <img src={passwordImg} alt="" />
                <div className="formContainer">
                    <div className="heading">
                        <h3>Enter your verification code</h3>
                        <p>Enter the token number we just sent you on email address.</p>
                    </div>
                    <form>
                        <input type="number" placeholder="Enter the token number" value={tokenNumber} onChange={(e) => setTokenNumber(e.target.value)} />
                        {
                            click
                                ?
                                <button type="submit" disabled={true} className="disable">Loading...</button>
                                :
                                <button type="submit" onClick={handleSubmit}>Submit</button>
                        }
                    </form>
                    <div className="bottom">
                        <p>If you didn’t receive  a code?</p>
                        <Link to="/login">Resend</Link>
                    </div>
                </div>
            </div>

        </main>
    )
}
