import "../ForgotPassword/ForgotPassword.css"
import passwordImg from "../../images/password.png"
import { Link } from "react-router-dom"
import { useState } from "react"

export default function ForgotPassword() {

    const [email, setEmail] = useState("")
    const handleSubmit = async (e)  =>  {
        e.preventDefault();
    }

    return (
        <main className="forgot">
            <div className="wrapper">
                <img src={passwordImg} alt="" />
                <div className="formContainer">
                    <div className="heading">
                        <h3>Forget password</h3>
                        <p>Enter The email address associated with your account.</p>
                    </div>
                    <form>
                        <input type="email" placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <button onClick={handleSubmit}>Submit</button>
                    </form>
                    <Link to="/login">Back to login</Link>
                </div>
            </div>

        </main>
    )
}
