import './EarlyAccess.css'
import early from "../../../images/early_access.jpg"
<<<<<<< HEAD
import { useState } from 'react'
import axios from '../../../axios'

const EarlyAccess = () => {
    const [email, setEmail] = useState("")
    const [click, setClick] = useState(false);
    const [error, setError] = useState("");

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
    const handleEarlyAccess = async (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setError("Please enter a valid email address.");
            return;
        }
        setClick(true);
        try {
            await axios.post("early-access/get-early-access", email)

        } catch (err) {
            console.log(err);
        }
    }
=======
import { useTranslation } from "react-i18next";
function EarlyAccess() {
    
    const { t } = useTranslation()
>>>>>>> a8466b465438f5c87b2c9e7bbe48a153c86ae894
    return (
        <section className="earlyAccess">
            <div className='left'>
                <div className='details'>
                    <h3>{t("earlyAccessH3")}</h3>
                    <p>{t("earlyAccessP")}</p>
                </div>

                <form>
<<<<<<< HEAD
                    <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email Address" />
                    {error && <p className="error">{error}</p>}
                    {
                        click
                            ?
                            <button type="submit" disabled={true} className="disable">Loading...</button>
                            :
                            <button type="submit" onClick={handleEarlyAccess}>Join the Waitlist</button>
                    }
=======
                    <input type="tel" placeholder={t("earlyAccessPlaceHolder")} />
                    <button>{t("earlyAccessBtn")}</button>
>>>>>>> a8466b465438f5c87b2c9e7bbe48a153c86ae894
                </form>
            </div>
            <img src={early} />
        </section>
    )
}

export default EarlyAccess