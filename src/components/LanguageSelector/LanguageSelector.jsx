import { useTranslation } from "react-i18next"
import globe from "../../images/globe.svg"
import arrow from "../../images/Vector.svg"
import { useState } from "react"

const Langauges = [
    { code: "en", lang: "English" },
    { code: "hi", lang: "Hindi" },
    { code: "gr", lang: "German" },
    { code: "ar", lang: "Arabic " },
    { code: "ko", lang: "Korean" },
    { code: "fr", lang: "French" },
    { code: "br", lang: "Brazilian" },
    { code: "sp", lang: "Spanish" },
]

const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const [lang, setLang] = useState("English");

    const changeLanguage = (selectedLang) => {
        i18n.changeLanguage(selectedLang);
    };
    console.log("lang: ",lang);
    return (
        <div className="langs">
            <img src={globe} alt="" />
            <div className="customSelect">
                <select name="Languages" value={lang} id="langs" onChange={(e) => {
                    setLang(e.currentTarget.value);
                    changeLanguage(e.currentTarget.value);
                }}>
                    {Langauges.map((eachLang) => (
                        <option key={eachLang.code} value={eachLang.code}>{eachLang.lang}</option>
                    ))}
                </select>
                <span>
                    <img src={arrow} alt="" />
                </span>
            </div>
        </div>
    )
}

export default LanguageSelector