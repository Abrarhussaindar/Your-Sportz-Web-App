import { useLocation } from "react-router-dom";
import LeftSideBar from "./Dashboard/LeftSideBar/LeftSideBar";
import TopBar from "./Dashboard/TopBar/TopBar";

const DashboardLayout = ({ children }) => {
    const location = useLocation();
    return (
        <div className="dashboard">
            <TopBar currentPage={location.pathname}/>
            <div className="main">
                <LeftSideBar />
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;
