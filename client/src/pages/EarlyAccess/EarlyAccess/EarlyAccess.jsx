import './EarlyAccess.css'
import early from "../../../images/early_access.jpg"
import useState from 'react'
import axios from '../../../axios'
import { useTranslation } from "react-i18next";


const EarlyAccess = () => {
    
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState("");
    
    const showPopupMessage = (message) => {
        setPopupMessage(message);
        setShowPopup(true);
    }
    

    const [email, setEmail] = useState("")
    const [click, setClick] = useState(false);
    const [error, setError] = useState("");
    const { t } = useTranslation()
    
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
            await axios.post("early-access/get-early-access", email);
            showPopupMessage("Thanks for subscribing! You are added to the waitlist.");

        } catch (err) {
            console.log(err);
        }
    }
    return (
        <section className="earlyAccess">
            <div className='left'>
                <div className='details'>
                    <h3>{t("earlyAccessH3")}</h3>
                    <p>{t("earlyAccessP")}</p>
                </div>

                <form>
                    <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t("earlyAccessPlaceHolder")} />
                    {error && <p className="error">{error}</p>}
                    {
                        click
                            ?
                            <button type="submit" disabled={true} className="disable">{t("loginFormLoginLoading")}</button>
                            :
                            <button type="submit" onClick={handleEarlyAccess}>{t("earlyAccessBtn")}</button>
                    }

                </form>
            </div>
            <img src={early} />
            
            <div className="popup" data-show={showPopup} >
               <div className="popup-content">
                    <span className="close" onClick={() => setShowPopup(false)}>&times;</span>
                    <p>{popupMessage}</p>
               </div>
            </div>
        </section>
    )
}

export default EarlyAccess