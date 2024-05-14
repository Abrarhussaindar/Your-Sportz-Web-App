import "./MainContent.css"
import { Middle } from "./components/Middle/Middle";
import { Stats } from "./components/Stats/Stats";
import { StatsChart } from "./components/StatsChart/StatsChart";
import { NextMatch } from "./components/NextMatch/NextMatch";
import { GroundStats } from "./components/GroundStats/GroundStats";
import { UpComingMatches } from "./components/UpComingMatches/UpComingMatches";
import { useState } from "react";

export default function MainContent() {
    const [activeButton, setActiveButton] = useState(1);
    const handleClick = (index) => {
        setActiveButton(index);
    };
    return (
        <div className="MainContent">
            <div className="top">
                <div className="heading">
                    <h3>Welcome!</h3>
                    <p>Fuel Your Passion for Football</p>
                </div>
                <button>Invite</button>
            </div>
            <Middle />
            <div className="bottom">
                <div className="left">
                    <Stats click={handleClick} active={activeButton} setActive={setActiveButton}/>
                    <StatsChart active={activeButton}/>
                </div>
                <div className="right">

                    <NextMatch />
                    <UpComingMatches />
                    <GroundStats />
                </div>
            </div>
        </div>
    );
}
