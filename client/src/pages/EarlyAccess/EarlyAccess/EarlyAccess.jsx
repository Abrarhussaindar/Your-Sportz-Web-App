import './EarlyAccess.css'
import early from "../../../images/early_access.jpg"
import { useTranslation } from "react-i18next";
function EarlyAccess() {
    
    const { t } = useTranslation()
    return (
        <section className="earlyAccess">
            {/* <div className='bottom'> */}
            <div className='left'>
                <div className='details'>
                    <h3>{t("earlyAccessH3")}</h3>
                    <p>{t("earlyAccessP")}</p>
                </div>

                <form>
                    <input type="tel" placeholder={t("earlyAccessPlaceHolder")} />
                    <button>{t("earlyAccessBtn")}</button>
                </form>
            </div>
            <img src={early} />
            {/* </div> */}
        </section>

    )
}

export default EarlyAccess


{/* <div className="main">

                <div className="topText">
                    <p>YourSportz</p>
                </div>
                <div className="box1">
                    <div className="para">
                        <p>Excited for early access! Get a sneak peek before launch, explore features, and shape our platforms future.</p>

                    </div>


                    <div className="form">
                        <input type="email" placeholder="Enter email" />
                        <button className="btn">Request Access</button>
                    </div>
                </div>

                <div className="box2">
                    <img src={features} alt="" />
                </div>
            </div> */}