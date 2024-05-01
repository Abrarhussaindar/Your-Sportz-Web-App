
import { useEffect, useState } from "react";
import andPhone from "../../images/andPhone.png"
import "../Home/Home.css"
import bulb from "../../images/bulb.svg"
import Layout from "../../components/Layout";
export default function Feature() {
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
            title: "Intuitive Match Scoring Interface",
            description:
                "Direct the game's score with a single touch using our scorer app. Accurately log goals, fouls, and more, with an 'Undo' feature for corrections. Simple, swift, and precise—be the game's definitive scorekeeper.",
            hoverTitle: "Cardiovascular Health:",
            hoverDescription:
                "The constant movement in football-covering 8 to 11 kilometers per game-keeps heart rates up.",
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
    return (
        <Layout>
            <main className="featuress">
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
            </main>
        </Layout>

    )
}
