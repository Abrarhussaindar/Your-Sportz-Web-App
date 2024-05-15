import "./TopBar.css"
import logo from "../../../images/logo.png";
import avtar from "../../../images/dashboard/avtar.png";
import search from "../../../images/dashboard/search.png";
import noti from "../../../images/dashboard/notification.svg";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import ham from "../../../images/ham.svg"
import avtarPlaceholder from "../../../images/dashboard/avtarPlaceholder.png"
import close from "../../../images/close.png"
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
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

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
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <div className={`${hasScrolled ? 'scrolled' : ''} topBar`} ref={dropdownRef}>
            <div className="leftSide">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="" />
                        <h3>Your<span>Sportz</span></h3>
                    </Link>
                </div>
                <h3 className="pageTitle">{pageTitle}</h3>
            </div>
            <div className="rightSide">
                <div className="search">
                    <img src={search} alt="" />
                    <input type="text" placeholder="Search" />
                </div>
                <img className="noti" src={noti} alt="" />
                <img className="avatar" src={avtar} alt="" />
            </div>

            <img onClick={toggleMenu} className="avtar" src={avtarPlaceholder} alt="" />

            <div className={`${isMenuOpen ? 'open' : 'notOpen'}`}>

                <div className="top">

                    <img className="close" src={close} alt="" onClick={toggleMenu} />
                </div>

                <div className="bottom">

                    <div className="imgs">
                        <img className="noti" src={noti} alt="" />
                        <img className="avatar" src={avtar} alt="" />
                    </div>
                    <div className="search">
                        <img src={search} alt="" />
                        <input type="text" placeholder="Search" />
                    </div>
                </div>

            </div>


        </div>




    )
}
