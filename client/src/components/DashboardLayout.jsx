import { useLocation } from "react-router-dom";
import LeftSideBar from "./Dashboard/LeftSideBar/LeftSideBar";
import TopBar from "./Dashboard/TopBar/TopBar";
import React, { useState } from "react";


const DashboardLayout = ({ children }) => {
    
    const [isLeftOpen, setIsLeftOpen] = useState(false);
    const toggleLeftMenu = () => {
      setIsLeftOpen(!isLeftOpen);
    };
    
    const location = useLocation();
    return (
        <div className="dashboard">
            <TopBar currentPage={location.pathname}/>
            <div className="main">
                <LeftSideBar isLeftOpen={isLeftOpen} toggleLeftMenu={toggleLeftMenu} />
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
