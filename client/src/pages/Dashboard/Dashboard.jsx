import LeftSideBar from "../../components/Dashboard/LeftSideBar";
import MainContent from "../../components/Dashboard/MainContent";
import TopBar from "../../components/Dashboard/TopBar";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <TopBar />
      <div className="main">

        <LeftSideBar />
        <MainContent />
      </div>
    </div>
  )
}


export default Dashboard