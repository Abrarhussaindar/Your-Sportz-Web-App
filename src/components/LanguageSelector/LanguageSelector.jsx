// import { useTranslation } from "react-i18next"
import globe from "../../images/global.png"

import usa from "../../images/flags/united-states.png"
import india from "../../images/flags/india.png"
import germany from "../../images/flags/germany.png"
import saudi from "../../images/flags/saudi-arabia.png"
import korean from "../../images/flags/flag.png"
import france from "../../images/flags/france.png"
import brazil from "../../images/flags/brazil.png"
import spain from "../../images/flags/spain.png"
import { useTranslation } from "react-i18next"
import { useState } from "react"
// import { useState } from "react"

const Langauges = [
    { code: "en", img: usa },
    { code: "hi", img: india },
    { code: "de", img: germany },
    { code: "ar", img: saudi },
    { code: "ko", img: korean },
    { code: "fr", img: france },
    { code: "br", img: brazil },
    { code: "es", img: spain },
]

const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const [lang, setLang] = useState("en");
    const [langFlag, setLangFlag] = useState(usa);
    const [click, setClick] = useState(false)
    const openLangs = () => {
        setClick(!click)
    }

    const handleLangChange = (code, img) => {
        setLang(code)
        setLangFlag(img)
        i18n.changeLanguage(code)
        setClick(!click)
    }

    // console.log("lang: ", lang);
    return (
        <div className="langs">
            <div className="customSelect">
                <img className="globe" onClick={openLangs} src={globe} alt="" />

                <ul className={click ? "openlangUl" : "langUl"}>
                    {Langauges.map((eachLang) => (
                        <li key={eachLang.code} value={eachLang.code}>
                            <button className="langBtn" onClick={() => handleLangChange(eachLang.code, eachLang.img)}>
                                <img src={eachLang.img} /> - <p>{eachLang.code}</p>
                            </button>
                        </li>
                    ))}
                </ul>
                <div className="lng">
                    <img src={langFlag} /> - <p>{lang}</p>
                </div>

            </div>
        </div>
    )
}

export default LanguageSelector