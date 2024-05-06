import Layout from "../../components/Layout";
import top from "../../images/top.png"
import bottom from "../../images/bottom.png"
import "./AboutUs.css"
import { useTranslation } from "react-i18next";

export default function AboutUs() {
    const { t } = useTranslation()
    return (
        <Layout>
            <main className="about">
                <div className="top">
                    <div className="left">
                    <h2>{t("logoLeft")}<span>{t("logoRight")}</span></h2>
                        <img src={top} alt="" />
                    </div>
                    <div className="right">
                        <h3>{t("aboutusRightH3")}</h3>
                        <p>{t("aboutusRightP")}</p>
                    </div>
                </div>
                <div className="bottom">
                    <div className="left">
                        <h3>{t("aboutusLeftH3")}</h3>
                        <p>{t("aboutusLeftP")}</p>

                        <ul>
                            <li><p><span>{t("aboutuslipspan1")}</span>{t("aboutuslip1")}</p></li>
                            <li><p><span>{t("aboutuslipspan2")}</span>{t("aboutuslip2")}</p></li>
                            <li><p><span>{t("aboutuslipspan3")}</span>{t("aboutuslip3")}</p></li>
                            <li><p><span>{t("aboutuslipspan4")}</span>{t("aboutuslip4")}</p></li>
                            <li><p><span>{t("aboutuslipspan5")}</span>{t("aboutuslip5")}</p></li>
                            <li><p><span>{t("aboutuslipspan6")} </span>{t("aboutuslip6")}</p></li>
                        </ul>
                    
                    </div>
                    <div className="right">
                        <img src={bottom} alt="" />
                    </div>
                </div>
            </main>
        </Layout>
    )
}
