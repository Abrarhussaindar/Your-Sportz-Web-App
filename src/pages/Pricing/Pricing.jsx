import { useState } from "react";
import Layout from "../../components/Layout";
import check from "../../images/check.svg"
import cards from "../../images/card.png"
import "./Pricing.css"
import { useTranslation } from "react-i18next";


export default function Pricing() {
    const [isActive, setIsActive] = useState(true)
    const [isSchool, setIsSchool] = useState(true)
    const handleClick = () => {
        setIsActive(!isActive);
        setIsSchool(!isSchool);
    };
    const { t } = useTranslation()
    const SchoolPricing = [
        {
            id: 1,
            tag: [`${t("pricingSchoolPricingtag1")}`],
            price: `${t("pricingSchoolPricingprice1")}`,
            priceTag: `${t("pricingSchoolPricingpriceTag1")}`,
            priceDis: `${t("pricingSchoolPricingpriceDis1")}`,
            subDetails: [
                {
                    id: 1,
                    title: `${t("pricingSchoolPricingsubtitle11")}`,
                    subDetails: [
                        `${t("pricingSchoolPricingsubDetails111")}`,
                        `${t("pricingSchoolPricingsubDetails112")}`,
                    ]
                },
                {
                    id: 2,
                    title: `${t("pricingSchoolPricingsubtitle12")}`,
                    subDetails: []
                },
                {
                    id: 3,
                    title: `${t("pricingSchoolPricingsubtitle13")}`,
                    subDetails: []
                },
            ]
        },
        {
            id: 2,
            tag: [`${t("pricingSchoolPricingtag2")}`],
            price: `${t("pricingSchoolPricingprice2")}`,
            priceTag: `${t("pricingSchoolPricingpriceTag2")}`,
            priceDis: "",
            subDetails: [
                {
                    id: 1,
                    title: `${t("pricingSchoolPricingsubtitle21")}`,
                    subDetails: [
                        `${t("pricingSchoolPricingsubDetails211")}`,
                        `${t("pricingSchoolPricingsubDetails212")}`,
                        `${t("pricingSchoolPricingsubDetails213")}`,
                        `${t("pricingSchoolPricingsubDetails214")}`,
                    ]
                },
                {
                    id: 2,
                    title: `${t("pricingSchoolPricingsubtitle22")}`,
                    subDetails: []
                },
                {
                    id: 3,
                    title: `${t("pricingSchoolPricingsubtitle23")}`,
                    subDetails: []
                },
            ]
        },
    ]
    const GeneralPricing = [
        {
            id: 1,
            tag: [],
            price: `${t("pricingGeneralPricingprice1")}`,
            priceTag: "",
            priceDis: "",
            subDetails: [
                `${t("pricingGeneralPricingsubDetails111")}`,
                `${t("pricingGeneralPricingsubDetails112")}`,
                `${t("pricingGeneralPricingsubDetails113")}`,
                `${t("pricingGeneralPricingsubDetails114")}`,
            ]
        },
        {
            id: 2,
            tag: [`${t("pricingGeneralPricingtag2")}`],
            price: 149,
            priceTag: `${t("pricingGeneralPricingpriceTag2")}`,
            priceDis: "",
            subDetails: [
                `${t("pricingGeneralPricingsubDetails211")}`,
                `${t("pricingGeneralPricingsubDetails212")}`,
                `${t("pricingGeneralPricingsubDetails213")}`,
                `${t("pricingGeneralPricingsubDetails214")}`,
                `${t("pricingGeneralPricingsubDetails215")}`,
                `${t("pricingGeneralPricingsubDetails216")}`,
                `${t("pricingGeneralPricingsubDetails217")}`,
            ]
        },
        {
            id: 3,
            tag: [`${t("pricingGeneralPricingtag31")}`, `${t("pricingGeneralPricingta32")}`],
            price: 199,
            priceTag: `${t("pricingGeneralPricingpriceTag3")}`,
            priceDis: `${t("pricingGeneralPricingpriceDis3")}`,

            subDetails: [
                `${t("pricingGeneralPricingsubDetails311")}`,
                `${t("pricingGeneralPricingsubDetails312")}`,
                `${t("pricingGeneralPricingsubDetails313")}`,
            ]
        },
        {
            id: 4,
            tag: [`${t("pricingGeneralPricingtag4")}`],
            price: 299,
            priceTag: `${t("pricingGeneralPricingpriceTag4")}`,
            priceDis: `${t("pricingGeneralPricingpriceDis4")}`,
            subDetails: [
                `${t("pricingGeneralPricingsubDetails411")}`,
                `${t("pricingGeneralPricingsubDetails412")}`,
                `${t("pricingGeneralPricingsubDetails413")}`,
                `${t("pricingGeneralPricingsubDetails414")}`,
                `${t("pricingGeneralPricingsubDetails415")}`,
                `${t("pricingGeneralPricingsubDetails416")}`,
                `${t("pricingGeneralPricingsubDetails417")}`,
            ]
        },


    ]
    const re = /^[0-9\b]+$/;
    
    return (
        <Layout>
            <main className="price">
                <div className="top">
                    <h1>{t("pricingH1")}</h1>
                    <p>{t("pricingP")}</p>
                    <div className="tab">
                        <button className={isActive ? "activeBtn" : "notActive"} onClick={handleClick}>{t("pricingToggelGeneral")}</button>
                        <button className={!isActive ? "activeBtn" : "notActive"} onClick={handleClick}>{t("pricingToggelSchool")}</button>
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
                                                    re.test(each.price) === false
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

                                            <button>{t("pricingBtn")}</button>
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

                                            <button>{t("pricingBtn")}</button>
                                        </div>
                                    ))
                                }

                            </div>
                    }



                </div>
                <div className="bottom">
                    <h4>{t("pricingH4")}</h4>
                    <img src={cards} alt="" />
                    <p>{t("pricingbottomP")}</p>
                </div>
            </main>
        </Layout>
    )
}
