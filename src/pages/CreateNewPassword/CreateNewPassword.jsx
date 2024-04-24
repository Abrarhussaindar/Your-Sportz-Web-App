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

    const handleSubmit = async (e) => {
        e.preventDefault();
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
                        <button onClick={handleSubmit}>Submit</button>
                    </form>
                    <Link to="/login">Back to login</Link>
                </div>
            </div>

        </main>
    )
}
