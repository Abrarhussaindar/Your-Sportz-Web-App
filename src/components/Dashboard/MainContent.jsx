import "../../styles/Dashboard.css";
import { Link, NavLink } from "react-router-dom"
import Group from "../../images/dashboard/Group.svg";
import Vectory from "../../images/dashboard/Vectory.svg";
import run from "../../images/dashboard/run.svg";

export default function MainContent() {
    const navLinks = [
        {

            text: "100",
            desc: "Total Members",
            Img: Group
        },
        {

            text: "10",
            desc: "Total Players",
            Img: run
        },
        {

            text: "11",
            desc: "Total Wins",
            Img: Vectory
        },
        {

            text: "20",
            desc: "Total Matches",
            Img: Group
        }
    ]
    return (
        <div className="MainContent">
            <div className="top">
                <div className="heading">
                    <h3>Welcome!</h3>
                    <p>Fuel Your Passion for Football</p>
                </div>
                <button>Invite</button>
            </div>
            <div className="middle">
                <ul>
                    {navLinks.map((link) => (
                        <li key={link.text}>
                            <img src={link.Img} alt={link.text} />
                            <div className="details">
                                <h3>
                                    {link.text}
                                </h3>
                                <p>
                                    {link.desc}

                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="bottom">

                <div className="left">
                    <div className="top">

                    </div>
                    <div className="bottom"></div>
                </div>
                <div className="right">
                    <div className="top"></div>
                    <div className="bottom"></div>

                </div>
            </div>
        </div>
    )
}
