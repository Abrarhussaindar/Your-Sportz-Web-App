import { useState } from "react";
import Layout from "../../components/Layout";
import check from "../../images/check.svg"
import cards from "../../images/card.png"
import "./Pricing.css"


export default function Pricing() {
    const [isActive, setIsActive] = useState(true)
    const [isSchool, setIsSchool] = useState(true)
    const handleClick = () => {
        setIsActive(!isActive);
        setIsSchool(!isSchool);
    };
    return (
        <Layout>
            <main className="price">
                <div className="top">
                    <h1>Pick a plan that’s right for you</h1>
                    <p>Pay as you go service, cancel anytime</p>
                    <div className="tab">
                        <button className={isActive ? "activeBtn" : "notActive"} onClick={handleClick}>General</button>
                        <button className={!isActive ? "activeBtn" : "notActive"} onClick={handleClick}>School / Corporate</button>
                    </div>
                </div>
                <div className="middle">
                    {
                        isSchool
                            ?
                            <div className="school">
                                <div className="container">
                                    <div className="wrapper">
                                        <div className="tags">
                                            <h4>heading</h4>

                                        </div>

                                        <div className="amount">
                                            <h3><span className="symbol">&#8377;</span>Free <span className="gst">With GST</span></h3>
                                            <p>Per member, per Month</p>
                                        </div>

                                        <ul>
                                            <li><img src={check} alt="" />Tourment creations</li>
                                            <li><img src={check} alt="" />Watch Score</li>
                                            <li><img src={check} alt="" />Start match</li>
                                            <li><img src={check} alt="" />Ad-Free Experience</li>
                                        </ul>
                                    </div>

                                    <button>Choose</button>
                                </div>
                                <div className="container">
                                    <div className="wrapper">
                                        <div className="tags">
                                            <h4>heading</h4>

                                        </div>


                                        <div className="amount">
                                            <h3><span className="symbol">&#8377;</span>Free <span className="gst">With GST</span></h3>
                                            <p>Per member, per Month</p>
                                        </div>

                                        <ul>
                                            <li><img src={check} alt="" />Tourment creations</li>
                                            <li><img src={check} alt="" />Watch Score</li>
                                            <li><img src={check} alt="" />Start match</li>
                                            <li><img src={check} alt="" />Ad-Free Experience</li>
                                        </ul>
                                    </div>

                                    <button>Choose</button>
                                </div>
                                <div className="container popular">
                                    <div className="wrapper">
                                        <div className="tags">
                                            <h4>heading</h4>
                                            <h4 className="pop">popular</h4>
                                        </div>
                                        <div className="amount">
                                            <h3><span className="symbol">&#8377;</span>Free <span className="gst">With GST</span></h3>
                                            <p>Per member, per Month</p>
                                        </div>

                                        <ul>
                                            <li><img src={check} alt="" />Tourment creations</li>
                                            <li><img src={check} alt="" />Watch Score</li>
                                            <li><img src={check} alt="" />Start match</li>
                                            <li><img src={check} alt="" />Ad-Free Experience</li>
                                        </ul>
                                    </div>

                                    <button>Choose</button>
                                </div>
                                <div className="container">
                                    <div className="wrapper">
                                        <div className="tags">
                                            <h4>heading</h4>

                                        </div>

                                        <div className="amount">
                                            <h3><span className="symbol">&#8377;</span>Free <span className="gst">With GST</span></h3>
                                            <p>Per member, per Month</p>
                                        </div>

                                        <ul>
                                            <li><img src={check} alt="" />Tourment creations</li>
                                            <li><img src={check} alt="" />Watch Score</li>
                                            <li><img src={check} alt="" />Start match</li>
                                            <li><img src={check} alt="" />Ad-Free Experience</li>
                                        </ul>
                                    </div>

                                    <button>Choose</button>
                                </div>
                            </div>
                            :
                            <div className="general">

                                <div className="container popular">
                                    <div className="wrapper">
                                        <div className="tags">
                                            <h4>heading</h4>
                                            <h4 className="pop">popular</h4>
                                        </div>
                                        <div className="amount">
                                            <h3><span className="symbol">&#8377;</span>Free <span className="gst">With GST</span></h3>
                                            <p>Per member, per Month</p>
                                        </div>

                                        <ul>
                                            <li><img src={check} alt="" />Tourment creations</li>
                                            <li><img src={check} alt="" />Watch Score</li>
                                            <li><img src={check} alt="" />Start match</li>
                                            <li><img src={check} alt="" />Ad-Free Experience</li>
                                        </ul>
                                    </div>

                                    <button>Choose</button>
                                </div>
                                <div className="container">
                                    <div className="wrapper">
                                        <div className="tags">
                                            <h4>heading</h4>

                                        </div>

                                        <div className="amount">
                                            <h3><span className="symbol">&#8377;</span>Free <span className="gst">With GST</span></h3>
                                            <p>Per member, per Month</p>
                                        </div>

                                        <ul>
                                            <li><img src={check} alt="" />Tourment creations</li>
                                            <li><img src={check} alt="" />Watch Score</li>
                                            <li><img src={check} alt="" />Start match</li>
                                            <li><img src={check} alt="" />Ad-Free Experience</li>
                                        </ul>
                                    </div>

                                    <button>Choose</button>
                                </div>
                            </div>
                    }



                </div>
                <div className="bottom">
                    <h4>Payment Methods</h4>
                    <img src={cards} alt="" />
                    <p>We accept Visa, American Express, Mastercard, Paypal and Crypto</p>
                </div>
            </main>
        </Layout>
    )
}
