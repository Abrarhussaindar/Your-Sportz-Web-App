import { useEffect, useState } from "react";
import axios from "../../../../../axios";
import "./Stats.css"
import arrow from "../../../../../images/dashboard/arrow.png"
export const Stats = ({ click, active, setActive }) => {

    const toggleBtns = [
        {
            id: 1,
            text: "Top Players",
        },
        {
            id: 2,
            text: "Top Scores",
        },
        {
            id: 3,
            text: "Top Teams",
        },
    ];


    // const scoresHeading = ["No.", "Top Scorer", 'W', 'D', 'L', 'T', 'GD', 'PTS']
    // const ScoresData = [{}]

    const teamsHeading = [
        "No.",
        "Team Name",
        "City",
        "TeamId",
        "L",
        "T",
        "GD",
        "PTS",
    ];
    const [TeamsData, seTeamsData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(
                "https://yoursportzbackend.azurewebsites.net/api/team/all/"
            );
            seTeamsData(response.data);
        }
        fetchData();
    }, []);
    const playersHeading = [
        "No.",
        "Player Name",
        "UserId",
        "Gender",
        "DOB",
        "City",
        "Position",
    ];
    const [PlayersData, setPlayerData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get("user/all/");
            setPlayerData(response.data);
        }
        fetchData();
    }, []);

    const nums = [1, 2, 3, 4, 5]
    return (
        <div className="stats">
            <div className="toggleBtns">
                {toggleBtns.map((eachBtn) => (
                    <button
                        key={eachBtn.id}
                        className={`${active === eachBtn.id
                            ? "activeToggle"
                            : "notActiveToggle"
                            }`}
                        onClick={() => click(eachBtn.id)}
                    >
                        {eachBtn.text}
                    </button>
                ))}
            </div>
            <div className="mainStats">
                {active === 1 && (
                    <table className="players">
                        <thead>
                            <tr>
                                {playersHeading.map((eachHeading) => (
                                    <th key={eachHeading}>{eachHeading}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {PlayersData.slice(0, 6).map((eachTeam, index) => (
                                <tr key={eachTeam._id}>
                                    <td>{index + 1}</td>
                                    <td>{eachTeam.name || "NA"}</td>
                                    <td>{eachTeam.phone || "NA"}</td>
                                    <td>{eachTeam.gender || "NA"}</td>
                                    <td>{eachTeam.dob || "NA"}</td>
                                    <td>{eachTeam.city || "NA"}</td>
                                    <td>{eachTeam.position || "NA"}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
                {active === 2 && (
                    <table className="score">
                        <thead>
                            <tr>
                                {teamsHeading.map((eachHeading) => (
                                    <th key={eachHeading}>{eachHeading}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {TeamsData.slice(0, 6).map((eachTeam, index) => (
                                <tr key={eachTeam.teamId}>
                                    <td>{index + 1}</td>
                                    <td>{eachTeam.name || "NA"}</td>
                                    <td>{eachTeam.city || "NA"}</td>
                                    <td>{eachTeam.phone || "NA"}</td>
                                    <td>{eachTeam.loss || "NA"}</td>
                                    <td>{eachTeam.tie || "NA"}</td>
                                    <td>{eachTeam.grad || "NA"}</td>
                                    <td>{eachTeam.points || "NA"}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
                {active === 3 && (
                    <table className="teams">
                        <thead>
                            <tr>
                                {teamsHeading.map((eachHeading) => (
                                    <th key={eachHeading}>{eachHeading}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {TeamsData.slice(0, 6).map((eachTeam, index) => (
                                <tr key={eachTeam.teamId}>
                                    <td>{index + 1}</td>
                                    <td>{eachTeam.name || "NA"}</td>
                                    <td>{eachTeam.city || "NA"}</td>
                                    <td>{eachTeam.phone || "NA"}</td>
                                    <td>{eachTeam.loss || "NA"}</td>
                                    <td>{eachTeam.tie || "NA"}</td>
                                    <td>{eachTeam.grad || "NA"}</td>
                                    <td>{eachTeam.points || "NA"}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
            <div className="moreStats">
                <ul>
                    {
                        nums.map((each) =>
                            <li key={each} 
                                className={each===1 ? "activeNum" : "" }
                            >{each}</li>
                        )
                    }
                    <img  src={arrow} />
                </ul>
            </div>
        </div>
    )
}
