
import Layout from "../../components/Layout";
import hero from "../../images/hero.png"
import heromobile from "../../images/heromobile.png"
import ios from "../../images/ios.png"
import android from "../../images/android.png"

import andPhone from "../../images/andPhone.png"
import iosPhone from "../../images/iosPhone.png"
import andIconBlack from "../../images/and.svg"
import iosIconBlack from "../../images/apple.svg"
import arrow from "../../images/Vector.svg"
import downarrow from "../../images/downarrow.svg"
import bulb from "../../images/bulb.svg"
import faq from "../../images/faq.png"
import features from "../../images/features.png"

// import book from "../../images/book.svg"
// import chat from "../../images/chat.svg"
// import lecture from "../../images/lecture.svg"
// import note from "../../images/note.svg"
// import team from "../../images/team.svg"
// import podcast from "../../images/podcast.svg"

import "./Home.css"
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

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
      title: "Intuitive Match Scoring Interface",
      description:
        "Direct the game's score with a single touch using our scorer app. Accurately log goals, fouls, and more, with an 'Undo' feature for corrections. Simple, swift, and precise—be the game's definitive scorekeeper.",
      hoverTitle: "Cardiovascular Health:",
      hoverDescription:
        "The constant movement in football-covering 8 to 11 kilometers per game-keeps heart rates up. ",
      Image: andPhone,
    },
    {
      index: 2,
      title: "Real-Time Match Commentary",
      description:
        "Stay updated with every play. Our live commentary feature keeps you in the loop with minute-by-minute updates. From key plays to pivotal decisions, never miss a moment of the action.",
      hoverTitle: "Strength Building",
      hoverDescription:
        "Football works the entire body. Lower body strength is essential for kicking, jumping, and twisting, while upper body strength aids shielding the ball and overall power",
      Image: andPhone,
    },
    {
      index: 3,
      title: "Go Live: Stream Football With Flair",
      description:
        "Elevate your football matches to a global stage with our advanced live streaming. Integrate effortlessly with your YouTube channel for maximum exposure, display dynamic score updates, and relish AI-crafted highlights of your game's peak moments. Ignite the spirit of football and share every goal and glory live with your audience.",
      hoverTitle: "Muscle Tone and Fat Burn:",
      hoverDescription:
        "Football engages both slow-twitch and fast-twitch muscle fibers, promoting muscle mass and fat loss. The aerobic-anaerobic energy pathways contribute to calorie burn.",
      Image: andPhone,
    },
    {
      index: 4,
      title: "Every Game, Every Word, In Your Language",
      description:
        "Embrace the excitement of sports in your language with our app. Enjoy live commentary, real-time updates, and all the highlights in your preferred language. Break down language barriers and connect with the game like never before.",
      hoverTitle: "Mental Toughness:",
      hoverDescription:
        "Football sharpens concentration, decision-making, and teamwork. It fosters discipline, social engagement, and confidence. ",
      Image: andPhone,
    },
  ];
  // const exploreContent = [
  //   {
  //     id: 1,
  //     img: note,
  //     content: "Find Your Teammates Quickly"
  //   },
  //   {
  //     id: 2,
  //     img: chat,
  //     content: "Every Match, Every Moment Captured Live"
  //   },
  //   {
  //     id: 3,
  //     img: book,
  //     content: "Teammates & Tournaments Just a Click Away"
  //   },
  //   {
  //     id: 4,
  //     img: lecture,
  //     content: "Your Performance Dashboard"
  //   },
  //   {
  //     id: 5,
  //     img: team,
  //     content: "Unleash Tournament and Match Play"
  //   },
  //   {
  //     id: 6,
  //     img: podcast,
  //     content: "Your Football Hub"
  //   },
  // ]
  const faqQuestion = [
    {
      id: 1,
      img: arrow,
      question: "What is YourSport?",
      answer: "YourSportz is an all-in-one football app, enabling HD match streaming, live scoring, and performance tracking. Connect with local games and tournaments, and follow top players – all in one dynamic platform."
    },
    {
      id: 2,
      img: arrow,
      question: "Is YourSportz a fantasy sports or betting app?",
      answer: "YourSportz is an all-in-one football app, enabling HD match streaming, live scoring, and performance tracking. Connect with local games and tournaments, and follow top players – all in one dynamic platform."
    },
    {
      id: 3,
      img: arrow,
      question: "Can I follow specific local football teams or players on YourSportz?",
      answer: "YourSportz is an all-in-one football app, enabling HD match streaming, live scoring, and performance tracking. Connect with local games and tournaments, and follow top players – all in one dynamic platform."
    },
    {
      id: 4,
      img: arrow,
      question: "Is live streaming available for local football matches on YourSportz?",
      answer: "YourSportz is an all-in-one football app, enabling HD match streaming, live scoring, and performance tracking. Connect with local games and tournaments, and follow top players – all in one dynamic platform."
    },
    {
      id: 5,
      img: arrow,
      question: "What features does YourSportz offer?",
      answer: "YourSportz is an all-in-one football app, enabling HD match streaming, live scoring, and performance tracking. Connect with local games and tournaments, and follow top players – all in one dynamic platform."
    },
  ]
  return (
    <Layout>
      <main>
        <section className="hero">
          <div className="left">
            <div className="heading">
              <h1>{t("heroH1")}</h1>
              <p>{t("heroP")}</p>
            </div>
            <div className="btns">
              <button><img src={ios} alt="" />{t("downloadIosBtn")}</button>
              <button><img src={android} alt="" />{t("downloadAndBtn")}</button>

            </div>
          </div>
          <div className="right">
            {screenWidth > 720 ? (
              <img src={hero} alt="hero img" />
            ) : (
              <img src={heromobile} alt="hero img" />
            )}
          </div>
        </section>
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

          <h2>Why YourSportz Stands Out</h2>
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
                    <h4>Do you Know</h4>
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
              <p>Android App</p>
            </div>
          </div>
          <div className="container">
            <img className="phone" src={iosPhone} alt="" />
            <div className="content">
              <img src={iosIconBlack} alt="" />
              <p>ios App</p>
            </div>
          </div>

        </section>

        <section className="faq" id="faq" ref={faqSectionRef}>
          <div className="heading">
            <h2>Frequently Asked Questions</h2>
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
