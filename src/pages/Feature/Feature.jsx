
import { useEffect, useState } from "react";
import andPhone from "../../images/andPhone.png"
import "../Home/Home.css"
import bulb from "../../images/bulb.svg"
import Layout from "../../components/Layout";
import { useTranslation } from "react-i18next";
export default function Feature() {
    const { t } = useTranslation()
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const LINKS = [
        {
            index: 1,
            title: `${t("title1")}`,
            description:
                `${t("desciption1")}`,
            hoverTitle: `${t("hoverTitle1")}`,
            hoverDescription:
                `${t("hoverDescription1")}`,
            Image: andPhone,
        },
        {
            index: 2,
            title: `${t("title2")}`,
            description:
                `${t("desciption2")}`,
            hoverTitle: `${t("hoverTitle2")}`,
            hoverDescription:
                `${t("hoverDescription2")}`,
            Image: andPhone,
        },
        {
            index: 3,
            title: `${t("title3")}`,
            description:
                `${t("desciption3")}`,
            hoverTitle: `${t("hoverTitle3")}`,
            hoverDescription:
                `${t("hoverDescription3")}`,
            Image: andPhone,
        },
        {
            index: 4,
            title: `${t("title4")}`,
            description:
                `${t("desciption4")}`,
            hoverTitle: `${t("hoverTitle4")}`,
            hoverDescription:
                `${t("hoverDescription4")}`,
            Image: andPhone,
        },
    ];
    return (
        <Layout>
            <main className="featuress">
                <section className="matches">

                    <h2>{t("matchesH2")}</h2>
                    {
                        LINKS.map((each) => (
                            <div key={each.index} className={`${screenWidth > 720
                                ? each.index % 2 === 0
                                    ? "row2"
                                    : "row"
                                : "row"
                                }`}>
                                <img className="phone" src={each.Image} alt="" />
                                <div className="container">
                                    <div className="headingHoverContainer">
                                        <h3>{each.hoverTitle}</h3>
                                        <p>{each.hoverDescription}</p>
                                    </div>
                                    <div className="heading">
                                        <img src={bulb} alt="" />
                                        <h4>{t("matchesContainerHeading")}</h4>
                                    </div>
                                    <h3>{each.title}</h3>
                                    <p>{each.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </section>
            </main>
        </Layout>

    )
}
