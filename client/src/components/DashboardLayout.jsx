import { useLocation } from "react-router-dom";
import LeftSideBar from "./Dashboard/LeftSideBar";
import TopBar from "./Dashboard/TopBar";

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
