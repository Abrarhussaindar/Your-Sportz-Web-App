import { useLocation } from "react-router-dom";
import LeftSideBar from "./Dashboard/LeftSideBar/LeftSideBar";
import TopBar from "./Dashboard/TopBar/TopBar";
import React, { useEffect, useRef, useState } from "react";


const DashboardLayout = ({ children }) => {

    const [isLeftOpen, setIsLeftOpen] = useState(false);
    const toggleLeftMenu = () => {
        setIsLeftOpen(!isLeftOpen);
    };
    const dropdownRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsLeftOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    const location = useLocation();
    return (
        <div className="dashboard">
            <TopBar currentPage={location.pathname} />
            <div className="main">
                <LeftSideBar isLeftOpen={isLeftOpen} toggleLeftMenu={toggleLeftMenu} something={dropdownRef}/>
                <div className="content">
                    {React.Children.map(children, child => {
                        return React.cloneElement(child, { toggleLeftMenu });
                    })}
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
