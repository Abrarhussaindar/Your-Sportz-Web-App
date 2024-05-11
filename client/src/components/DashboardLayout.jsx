import LeftSideBar from "./Dashboard/LeftSideBar";
import TopBar from "./Dashboard/TopBar";

const DashboardLayout = ({ children }) => {

    return (
        <div className="dashboard">
            <TopBar />
            <div className="main">
                <LeftSideBar />
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;
