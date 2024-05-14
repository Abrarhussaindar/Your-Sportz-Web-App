import "./TopBar.css"
import logo from "../../../images/logo.png";
import avtar from "../../../images/dashboard/avtar.png";
import search from "../../../images/dashboard/search.png";
import noti from "../../../images/dashboard/notification.svg";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

function getPageTitle(currentPage) {
    switch (currentPage) {
        case "/dashboard":
            return "Overview";
        case "/management":
            return "Management";
        case "/profile":
            return "Profile";
        case "/settings":
            return "Settings";
        default:
            return "Unknown Page";
    }
}


export default function TopBar({ currentPage }) {
    const pageTitle = getPageTitle(currentPage);
    const [hasScrolled, setHasScrolled] = useState(false);
    const dropdownRef = useRef(null);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setHasScrolled(true);
            } else {
                setHasScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className={`${hasScrolled ? 'scrolled' : ''} topBar` }   ref={dropdownRef}>
            <div className="leftSide">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="" />
                        <h3>Your<span>Sportz</span></h3>
                    </Link>
                </div>
                <h3>{pageTitle}</h3>
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
