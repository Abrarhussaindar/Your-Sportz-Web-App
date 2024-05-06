import "../../pages/Dashboard/Dashboard.css";
import logo from "../../images/logo.png";
import avtar from "../../images/dashboard/avtar.png";
import search from "../../images/dashboard/search.png";
import noti from "../../images/dashboard/notification.svg";
import { Link } from "react-router-dom";

export default function TopBar() {
    return (
        <div className="topBar">
            <div className="leftSide">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="" />
                        <h3>
                            Your<span>Sportz</span>
                        </h3>
                    </Link>

                </div>

                <h3>
                    Overview
                </h3>

            </div>
            <div className="rightSide">
                <div className="search">
                    <img src={search} alt="" />
                    <input type="text" placeholder="Search" />
                </div>
                <img className="noti" src={noti} alt="" />
                <img className="avatar" src={avtar} alt="" />

            </div>
        </div>
    )
}
