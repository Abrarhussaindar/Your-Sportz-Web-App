import Layout from "../../components/Layout";
import top from "../../images/top.png"
import bottom from "../../images/bottom.png"
import "./AboutUs.css"

export default function AboutUs() {
    return (
        <Layout>
            <main className="about">
                <div className="top">
                    <div className="left">
                        <h2>Your<span>Sportz</span></h2>
                        <img src={top} alt="" />
                    </div>
                    <div className="right">
                        <h3>Our Vision</h3>
                        <p>Empowering Passionate Athletes YourSportz envisions a world where every sports enthusiast, regardless of their chosen discipline, can pursue their passion  with unwavering dedication. We believe that sports transcend boundaries, cultures, and backgrounds, uniting people through shared experiences and achievements.</p>
                    </div>
                </div>
                <div className="bottom">
                    <div className="left">
                        <h3>Our Goal</h3>
                        <p>Unleashing Athletic Potential Our goal is to create a comprehensive sports platform that caters o individuals across various sports and games. Here’s how we plan to achieve it:</p>

                        <ul>
                            <li><p><span>Multi-Sport Integration: </span>YourSportz will seamlessly integrate multiple sports and games, providing a unified hub for enthusiasts. Users can switch between tracking their basketball shots, soccer goals, tennis serves, and more—all within a single app.</p></li>
                            <li><p><span>Personalized Experience: </span>We understand that each athlete’s journey is unique. YourSportz will tailor its features to cater to individual preferences. Personalized dashboards, training plans, and performance analytics will empower users to set and achieve their goals.</p></li>
                            <li><p><span>Comprehensive Stats: </span>YourSportz will be a treasure trove of statistics. Users can track their performance metrics, including points scored, distance covered, speed, accuracy, and more. Whether you’re a weekend warrior or a professional athlete, our app will provide valuable insights to enhance your game.</p></li>
                            <li><p><span>Community and Challenges: </span>Connecting athletes is at the heart of YourSportz. Users can join communities, share their achievements, and participate in challenges. Friendly competitions, leaderboards, and virtual events will foster camaraderie and healthy competition.</p></li>
                            <li><p><span>Motivation and Rewards: </span>We believe in celebrating progress. Yoursportz will motivate users through achievements, badges, and  milestones. Whether it’s hitting a personal best or completing a fitness challenge, our app will recognize and reward dedication.</p></li>
                            <li><p><span>Accessible and Inclusive: </span>Yoursportz aims to be accessible to all. We’ll ensure compatibility with various devices, operating systems, and skill levels. Language support, adaptive interfaces, and affordability will make Yoursportz a global sports companion.</p></li>
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
