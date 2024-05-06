import "../../pages/Dashboard/Dashboard.css";

import dashboard from "../../images/dashboard/dashboard.svg";
import management from "../../images/dashboard/management.svg";
import setting from "../../images/dashboard/setting.svg";
import user from "../../images/dashboard/user.svg";
import { NavLink } from "react-router-dom"

export default function LeftSideBar() {
    const navLinks = [
        {
            to: "/dashboard",
            text: "Dashboard",
            Img: dashboard
        },
        {
            to: "*",
            text: "Management",
            Img: management
        },
        {
            to: "*",
            text: "Profile",
            Img: user
        },
        {
            to: "*",
            text: "Settings",
            Img: setting
        }
    ]
    
    return (
        <div className="leftSideBar">

            <ul>
                {navLinks.map((link) => (
                    <NavLink to={link.to} key={link.text}>
                        <li><img src={link.Img} alt={link.text} />{link.text}</li>
                    </NavLink>
                ))}
            </ul>
        </div>
    )
}
