import { useState } from "react";
import Layout from "../../components/Layout";
import "./ContactUs.css"
import contactImg from "../../images/contact.jpg"
import { useTranslation } from "react-i18next";
export default function ContatctUs() {
    // const [name, setName] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSub] = useState("")
    const [msg, setMsg] = useState("")
    const handlesubmit = (e) => {
        console.log(e.target.value);
    }
    const { t } = useTranslation()
    return (
        <Layout>
            <main className="contact">
                <div className="left">
                    <h3>{t("contactUsH3")}</h3>
                    <img src={contactImg} alt="" />
                    <p>{t("contactUsP")}</p>
                    
                </div>
                <div className="right">
                    <p>{t("formHeaderP")}</p>
                    <form>
                        <label htmlFor=" ">{t("formName")} </label>
                        <input type="text" placeholder={`${t("formName")}`} value={name} onChange={(e) => setName(e.target.value)} />
                        <label htmlFor=" ">{t("formPhone")}</label>
                        <input type="tel" maxLength={10} placeholder={`${t("formPhone")}`} value={phone} onChange={(e) => setPhone(e.target.value)} />
                        <label htmlFor=" ">{t("formEmail")} </label>
                        <input type="text" placeholder={`${t("formEmail")}`} value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor=" ">{t("formSub")} </label>
                        <input type="text" placeholder={`${t("formSub")}`} value={subject} onChange={(e) => setSub(e.target.value)} />
                        <label htmlFor=" ">{t("formMsg")} </label>
                        <textarea rows={4} type="text" placeholder={`${t("formTypeMsg")}`} className="Messege" value={msg} onChange={(e) => setMsg(e.target.value)} />
                        <button onClick={handlesubmit}>{t("formSubmitBtn")}</button>
                    </form>
                </div>

            </main >

        </Layout >
    )
}
