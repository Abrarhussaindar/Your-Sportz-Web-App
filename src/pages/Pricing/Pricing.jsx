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

    const SchoolPricing = [
        {
            id: 1,
            tag: ["6-Months"],
            price: "25,000",
            priceTag: "With GST",
            priceDis: "Per member, per Year",
            subDetails: [
                {
                    id: 1,
                    title: "All features",
                    subDetails: [
                        "Membership Programs",
                        "Group Discounts",
                    ]
                },
                {
                    id: 2,
                    title: "Includes 15 Free Live Matches",
                    subDetails: []
                },
                {
                    id: 3,
                    title: "Early Access to New Content",
                    subDetails: []
                },
            ]
        },
        {
            id: 2,
            tag: ["per match live stream"],
            price: "15,000",
            priceTag: "with GST",
            priceDis: "",
            subDetails: [
                {
                    id: 1,
                    title: "All features",
                    subDetails: [
                        "Membership Programs",
                        "Exclusive Content",
                        "Group Discounts",
                        "Customizable Packages",
                    ]
                },
                {
                    id: 2,
                    title: "Includes 30 Free Live Matches",
                    subDetails: []
                },
                {
                    id: 3,
                    title: "Priority Support",
                    subDetails: []
                },
            ]
        },
    ]
    const GeneralPricing = [
        {
            id: 1,
            tag: [],
            price: "Free",
            priceTag: "",
            priceDis: "",
            subDetails: [
                "Tourment creations",
                "Watch Score",
                "Start match",
                "Ad-Free Experience",
            ]
        },
        {
            id: 2,
            tag: ["per match live stream"],
            price: 149,
            priceTag: "with GST",
            priceDis: "",
            subDetails: [
                "All features",
                "One license key",
                "Yearly subcription plan",
                "One year support & updates",
                "Per month ad-free: ₹99",
                "6 month subscription: ₹499",
                "12 month subscription: ₹999",
            ]
        },
        {
            id: 3,
            tag: ["2 cameras", "popular"],
            price: 199,
            priceTag: "with GST",
            priceDis: "Per member, per Month",

            subDetails: [
                "Per month ad-free: ₹99",
                "6 month subscription: ₹499",
                "12 month subscription: ₹999",
            ]
        },
        {
            id: 4,
            tag: ["4 cameras"],
            price: 299,
            priceTag: "with GST",
            priceDis: "Per member, per Month",
            subDetails: [
                "All features",
                "One license key",
                "Yearly subcription plan",
                "One year support & updates",
                "Per month ad-free: ₹99",
                "6 month subscription: ₹499",
                "12 month subscription: ₹999",
            ]
        },
    ]
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
                                {
                                    GeneralPricing.map((each) => (
                                        <div key={each.id} className="container">
                                            <div className="wrapper">
                                                <div className="tags">

                                                    {
                                                        each.tag.map((eachTag) => (
                                                            <h4 key={eachTag}>{eachTag}</h4>
                                                        ))
                                                    }

                                                </div>
                                                {
                                                    each.price === "Free"
                                                        ?
                                                        <div className="amount">

                                                            <h3>{each.price} <span className="gst">{each.priceTag}</span></h3>
                                                            <p>{each.priceDis}</p>
                                                        </div>
                                                        :
                                                        <div className="amount">

                                                            <h3><span className="symbol">&#8377;</span>{each.price} <span className="gst">{each.priceTag}</span></h3>
                                                            <p>{each.priceDis}</p>
                                                        </div>
                                                }


                                                <ul>
                                                    {
                                                        each.subDetails.map((eachSub) => (

                                                            <li key={eachSub}><img src={check} alt="" />{eachSub}</li>
                                                        ))
                                                    }

                                                </ul>
                                            </div>

                                            <button>Choose</button>
                                        </div>
                                    ))
                                }

                                {/* <div className="container">
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
                                </div> */}
                            </div>
                            :
                            <div className="general">

                                {
                                    SchoolPricing.map((each) => (
                                        <div key={each.id} className="container">
                                            <div className="wrapper">
                                                <div className="tags">
                                                    {

                                                        each.tag.map((eachTag) => (
                                                            <h4 key={eachTag}>{eachTag}</h4>
                                                        ))
                                                    }

                                                </div>

                                                {
                                                    each.price === "Free"
                                                        ?
                                                        <div className="amount">

                                                            <h3>{each.price} <span className="gst">{each.priceTag}</span></h3>
                                                            <p>{each.priceDis}</p>
                                                        </div>
                                                        :
                                                        <div className="amount">

                                                            <h3><span className="symbol">&#8377;</span>{each.price} <span className="gst">{each.priceTag}</span></h3>
                                                            <p>{each.priceDis}</p>
                                                        </div>
                                                }

                                                <ul>
                                                    {
                                                        each.subDetails.map((eachSub) => (

                                                            <li key={eachSub.id}>
                                                                <div className="innerDiv">
                                                                    <img src={check} alt="" />
                                                                    <p>{eachSub.title}</p>
                                                                </div>
                                                                <ul className="innerUl">
                                                                    {
                                                                        eachSub.subDetails.map((eachSub) => (
                                                                            <li className="innerLi" key={eachSub}>{eachSub}</li>
                                                                        ))
                                                                    }
                                                                </ul>
                                                            </li>
                                                        ))
                                                    }
                                                    {/* <li><img src={check} alt="" />Tourment creations</li>
                                                    <li><img src={check} alt="" />Watch Score</li>
                                                    <li><img src={check} alt="" />Start match</li>
                                                    <li><img src={check} alt="" />Ad-Free Experience</li> */}
                                                </ul>
                                            </div>

                                            <button>Choose</button>
                                        </div>
                                    ))
                                }

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
