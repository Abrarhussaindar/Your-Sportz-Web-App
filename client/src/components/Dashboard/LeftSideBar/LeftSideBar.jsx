import "./LeftSideBar.css";
import dashboard from "../../../images/dashboard/dashboard.svg";
import management from "../../../images/dashboard/management.svg";
import setting from "../../../images/dashboard/setting.svg";
import user from "../../../images/dashboard/user.svg";
import { NavLink } from "react-router-dom";

export default function LeftSideBar({ isLeftOpen, something }) {

    const navLinks = [
        {
            to: "/dashboard",
            text: "Dashboard",
            Img: dashboard,
        },
        {
            to: "/management",
            text: "Manage",
            Img: management,
        },
        {
            to: "/profile",
            text: "Profile",
            Img: user,
        },
        {
            to: "/settings",
            text: "Settings",
            Img: setting,
        },
    ];
    return (
        <div
            className={`${isLeftOpen ? "leftOpen" : "notLeftOpen"} leftSideBar`}
            ref={something}
        >
            <ul>
                {navLinks.map((link) => (
                    <NavLink
                        to={link.to}
                        key={link.text}
                        activeClassName="activeLink"
                    >
                        <li>
                            <img src={link.Img} alt={link.text} />{link.text}
                        </li>
                    </NavLink>
                ))}
            </ul>
        </div>
    );
}
