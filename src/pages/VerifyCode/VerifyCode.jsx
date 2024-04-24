import "../ForgotPassword/ForgotPassword.css"
import passwordImg from "../../images/password.png"
import { Link } from "react-router-dom"
import { useState } from "react"

export default function VerifyCode() {
    const [tokenNumber, setTokenNumber] = useState("")
    const handleSubmit = async (e)  =>  {
        e.preventDefault();
    }
    return (
        <main className="forgot">
            <div className="wrapper">
                <img src={passwordImg} alt="" />
                <div className="formContainer">
                    <div className="heading">
                        <h3>Enter your verification code</h3>
                        <p>Enter the token number we just sent you on email address.</p>
                    </div>
                    <form>
                        <input type="number" placeholder="Enter the token number" value={tokenNumber} onChange={(e) => setTokenNumber(e.target.value)} />
                        <button onClick={handleSubmit}>Submit</button>
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
