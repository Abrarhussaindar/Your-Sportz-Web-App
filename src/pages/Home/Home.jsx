
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
import bulb from "../../images/bulb.svg"
import faq from "../../images/faq.png"
import features from "../../images/features.png"
import "./Home.css"
import { useEffect, useState } from "react";

const Home = () => {
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
  return (
    <Layout>
      <main>
        <section className="hero">
          <div className="left">
            <div className="heading">
              <h1>Game it your way</h1>
              <p>Stream, Score, Soar: Your Local Football Arena in Your Pocket. Track Your Performance, Discover Tournaments, and Team Up. All in One Dynamic App</p>
            </div>
            <div className="btns">
              <button><img src={ios} alt="" />Download on IOS</button>
              <button><img src={android} alt="" />Download on Android</button>

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
          <div className="details">
            <h2>Why YourSportz Stands Out</h2>
            <p>YourSportz, the dynamic football app, offers a plethora of health and lifestyle benefits. Let’s delve into how it can enhance your well-being</p>
          </div>
        </section>
        <section className="matches">
          <div className="row">
            <img className="phone" src={andPhone} alt="" />
            <div className="container">
              <div className="heading">
                <img src={bulb} alt="" />
                <h4>Do you Know</h4>
              </div>
              <h3>Intuitive Match Scoring Interface</h3>
              <p>Direct the game&apos;s score with a single touch using our scorer app. Accurately log goals, fouls, and more, with an &apos;Undo&apos; feature for corrections. Simple, swift, and precise—be the game&apos;s definitive scorekeeper.</p>
            </div>
          </div>
          <div className="row2">
            <img className="phone" src={andPhone} alt="" />
            <div className="container">
              <div className="heading">
                <img src={bulb} alt="" />
                <h4>Do you Know</h4>
              </div>
              <h3>Intuitive Match Scoring Interface</h3>
              <p>Direct the game&apos;s score with a single touch using our scorer app. Accurately log goals, fouls, and more, with an &apos;Undo&apos; feature for corrections. Simple, swift, and precise—be the game&apos;s definitive scorekeeper.</p>
            </div>
          </div>
          <div className="row">
            <img className="phone" src={andPhone} alt="" />
            <div className="container">
              <div className="heading">
                <img src={bulb} alt="" />
                <h4>Do you Know</h4>
              </div>
              <h3>Intuitive Match Scoring Interface</h3>
              <p>Direct the game&apos;s score with a single touch using our scorer app. Accurately log goals, fouls, and more, with an &apos;Undo&apos; feature for corrections. Simple, swift, and precise—be the game&apos;s definitive scorekeeper.</p>
            </div>
          </div>
          <div className="row2">
            <img className="phone" src={andPhone} alt="" />
            <div className="container">
              <div className="heading">
                <img src={bulb} alt="" />
                <h4>Do you Know</h4>
              </div>
              <h3>Intuitive Match Scoring Interface</h3>
              <p>Direct the game&apos;s score with a single touch using our scorer app. Accurately log goals, fouls, and more, with an &apos;Undo&apos; feature for corrections. Simple, swift, and precise—be the game&apos;s definitive scorekeeper.</p>
            </div>
          </div>
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

        <section className="faq" id="faq">
          <div className="heading">
            <h2>Frequently Asked Questions</h2>
            <img className="faqImg" src={faq} alt="" />
          </div>
          <div className="content  ">
            <div className="container click">
              <div className="heading">
                <h3>What is YourSport?</h3>
                <img src={arrow} alt="" />
              </div>
              <p>YourSportz is an all-in-one football app, enabling HD match streaming, live scoring, and performance tracking. Connect with local games and tournaments, and follow top players – all in one dynamic platform</p>
            </div>

            <div className="container">
              <div className="heading">
                <h3>Is YourSportz a fantasy sports or betting app?</h3>
                <img src={arrow} alt="" />
              </div>
              <p>YourSportz is an all-in-one football app, enabling HD match streaming, live scoring, and performance tracking. Connect with local games and tournaments, and follow top players – all in one dynamic platform</p>
            </div>
            <div className="container">
              <div className="heading">
                <h3>Can I follow specific local football teams or players on YourSportz?</h3>
                <img src={arrow} alt="" />
              </div>
              <p>YourSportz is an all-in-one football app, enabling HD match streaming, live scoring, and performance tracking. Connect with local games and tournaments, and follow top players – all in one dynamic platform</p>
            </div>
            <div className="container">
              <div className="heading">
                <h3>Is live streaming available for local football matches on YourSportz?</h3>
                <img src={arrow} alt="" />
              </div>
              <p>YourSportz is an all-in-one football app, enabling HD match streaming, live scoring, and performance tracking. Connect with local games and tournaments, and follow top players – all in one dynamic platform</p>
            </div>
            <div className="container">
              <div className="heading">
                <h3>What features does YourSportz offer?</h3>
                <img src={arrow} alt="" />
              </div>
              <p>YourSportz is an all-in-one football app, enabling HD match streaming, live scoring, and performance tracking. Connect with local games and tournaments, and follow top players – all in one dynamic platform</p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Home;
