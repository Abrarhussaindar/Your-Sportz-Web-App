
import Layout from "../../components/Layout";
// import hero from "../../images/hero.png"
// import heromobile from "../../images/heromobile.png"
// import ios from "../../images/ios.png"
// import android from "../../images/android.png"

import andPhone from "../../images/andPhone.png"
import iosPhone from "../../images/iosPhone.png"
import andIconBlack from "../../images/and.svg"
import iosIconBlack from "../../images/apple.svg"
import arrow from "../../images/Vector.svg"
import downarrow from "../../images/downarrow.svg"
import bulb from "../../images/bulb.svg"
import faq from "../../images/faq.png"
import features from "../../images/features.png"
import "./Home.css"
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import EarlyAccess from "../EarlyAccess/EarlyAccess/EarlyAccess";

const Home = () => {

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
  const faqSectionRef = useRef(null);


  const [openItems, setOpenItems] = useState({});

  const handleFaqClick = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  }
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
  const faqQuestion = [
    {
      id: 1,
      img: arrow,
      question: `${t("question1")}`,
      answer: `${t("answer1")}`
    },
    {
      id: 2,
      img: arrow,
      question: `${t("question2")}`,
      answer: `${t("answer2")}`
    },
    {
      id: 3,
      img: arrow,
      question: `${t("question3")}`,
      answer: `${t("answer3")}`
    },
    {
      id: 4,
      img: arrow,
      question: `${t("question4")}`,
      answer: `${t("answer4")}`
    },
    {
      id: 5,
      img: arrow,
      question: `${t("question5")}`,
      answer: `${t("answer5")}`
    },
  ]
  return (
    <Layout>
      <main>
        {/* <section className="hero">
          <div className="left">
            <div className="heading">
              <h1>{t("heroH1")}</h1>
              <p>{t("heroP")}</p>

            </div>
            <div className="btns">
              <Link to="/early-access">

                <button><img src={ios} alt="" />{t("downloadIosBtn")}</button>
              </Link>
              <Link to="/early-access">

                <button><img src={android} alt="" />{t("downloadAndBtn")}</button>
              </Link>


            </div>
          </div>
          <div className="right">
            {screenWidth > 720 ? (
              <img src={hero} alt="hero img" />
            ) : (
              <img src={heromobile} alt="hero img" />
            )}
          </div>
        </section> */}
        <EarlyAccess />
        <section className="features" id="features">

          <img src={features} alt="features" />
        </section>
        {/* <section className="explore">
          <h2>Explore What Awaits</h2>
          <ul>
            {
              exploreContent.map((each) => (
                <li key={each.id}><img className={`${each.id === 3 ? "tt" : "nottt"}`} src={each.img} alt="" />{each.content}</li>
              ))
            }
          </ul>
        </section> */}
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

        <section className="devices">
          <div className="container">
            <img className="phone" src={andPhone} alt="" />
            <div className="content">
              <img src={andIconBlack} alt="" />
              <p>{t("androidApp")}</p>
            </div>
          </div>
          <div className="container">
            <img className="phone" src={iosPhone} alt="" />
            <div className="content">
              <img src={iosIconBlack} alt="" />
              <p>{t("iosApp")}</p>
            </div>
          </div>

        </section>

        <section className="faq" id="faq" ref={faqSectionRef}>
          <div className="heading">
            <h2>{t("faqh2")}</h2>
            <img className="faqImg" src={faq} alt="" />
          </div>
          <div className="content" >
            {
              faqQuestion.map((question) => (
                <div key={question.id} className={`container ${openItems[question.id] ? "click" : ""}`} onClick={() => handleFaqClick(question.id)}>
                  <div className="heading">
                    <h3>{question.question}</h3>
                    <img src={`${openItems[question.id] ? downarrow : question.img}`} alt="" />
                  </div>
                  <p>{question.answer}</p>
                </div>
              ))
            }
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Home;
