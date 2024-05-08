import './EarlyAccess.css'
import early from "../../../images/early_access.jpg"
import { useEffect, useRef, useState } from 'react'
import axios from '../../../axios'
import { useTranslation } from "react-i18next";
import close from "../../../images/close.png"

const EarlyAccess = () => {

    const [showPopup, setShowPopup] = useState(false)

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
            const res = await axios.post("early-access/get-early-access", email);
            if (res.data === 'success') {
                setShowPopup(true)
                setError("")
                setEmail("")
                setClick(false)
            }
        } catch (err) {
            console.log(err);
        }
    }
    const dropdownRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowPopup(false)
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
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

            {
                showPopup
                &&
                <div className="popup" ref={dropdownRef}>
                    <div className='top'>
                        <img src={close} onClick={()=>setShowPopup(false)} />
                    </div>
                    <div className='bottom'>

                        <h3>Thanks for subscribing!</h3>
                        <p>You are added to the waitlist.</p>
                    </div>
                </div>
            }

        </section>
    )
}

export default EarlyAccess