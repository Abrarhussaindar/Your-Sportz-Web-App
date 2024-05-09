import { useState, useRef, useEffect } from "react";
// import globe from "../../images/global.png";
import dropdown from "../../images/down_arrow.png"
import usa from "../../images/flags/united-states.png";
import india from "../../images/flags/india.png";
import germany from "../../images/flags/germany.png";
import saudi from "../../images/flags/saudi-arabia.png";
import korean from "../../images/flags/flag.png";
import france from "../../images/flags/france.png";
import brazil from "../../images/flags/brazil.png";
import spain from "../../images/flags/spain.png";
import { useTranslation } from "react-i18next";

const Languages = [
    { code: "english", img: usa },
    { code: "hindi", img: india },
    { code: "german", img: germany },
    { code: "arabic", img: saudi },
    { code: "korean", img: korean },
    { code: "french", img: france },
    { code: "portuguese", img: brazil },
    { code: "spanish", img: spain }
];

const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const [lang, setLang] = useState("english");
    const [langFlag, setLangFlag] = useState(usa);
    const [click, setClick] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setClick(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const openLangs = () => {
        setClick(!click);
    };

    const handleLangChange = (code, img) => {
        setLang(code);
        setLangFlag(img);
        i18n.changeLanguage(code);
        setClick(false);
    };

    return (
        <div className="langs" ref={dropdownRef}>
            <div className="customSelect">
                {/* <img className="globe" onClick={openLangs} src={globe} alt="" /> */}

                <ul className={click ? "openlangUl" : "langUl"}>
                    {Languages.map((eachLang) => (
                        <li key={eachLang.code} value={eachLang.code}>
                            <button
                                className="langBtn"
                                onClick={() => handleLangChange(eachLang.code, eachLang.img)}
                            >
                                <img src={eachLang.img} alt={eachLang.code} /> <p>{eachLang.code}</p>
                            </button>
                        </li>
                    ))}
                </ul>
                <div className="lng" onClick={openLangs}>
                    <img src={langFlag} alt={lang} /> <p>{lang}</p>
                </div>
                <img onClick={openLangs} className="downImg" src={dropdown} alt="downArrow" />
            </div>
        </div>
    );
};

export default LanguageSelector;
