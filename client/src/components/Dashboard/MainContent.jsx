import "../../pages/Dashboard/Dashboard.css";
import Group from "../../images/dashboard/Group.svg";
import Vectory from "../../images/dashboard/Vectory.svg";
import run from "../../images/dashboard/run.svg";
import { useEffect, useState } from "react";

import axios from "../../axios";

export default function MainContent() {


    const [activeButton, setActiveButton] = useState(1);

    const handleClick = (index) => {
        setActiveButton(index);
    }
    const toggleBtns = [
        {
            id: 1,
            text: "Top Players"
        },
        {
            id: 2,
            text: "Top Scores"
        },
        {
            id: 3,
            text: "Top Teams"
        },
    ]
    const navLinks = [
        {

            text: "100",
            desc: "Total Members",
            Img: Group
        },
        {

            text: "10",
            desc: "Total Players",
            Img: run
        },
        {

            text: "11",
            desc: "Total Wins",
            Img: Vectory
        },
        {

            text: "20",
            desc: "Total Matches",
            Img: Group
        }
    ]

    // const scoresHeading = ["No.", "Top Scorer", 'W', 'D', 'L', 'T', 'GD', 'PTS']
    // const ScoresData = [{}]

    const teamsHeading = ["No.", "Team Name", 'City', 'TeamId', 'L', 'T', 'GD', 'PTS']
    // const TeamsData = [
    //     {
    //         teamId: "1",
    //         teamName: "team 1",
    //         won: "1",
    //         draw: "2",
    //         loss: "3",
    //         tie: "0",
    //         grad: "12",
    //         points: "12"
    //     },
    //     {
    //         teamId: "2",
    //         teamName: "team 2",
    //         won: "6",
    //         draw: "7",
    //         loss: "6",
    //         tie: "2",
    //         grad: "13",
    //         points: "18"
    //     },

    //     {
    //         teamId: "3",
    //         teamName: "team 3",
    //         won: "3",
    //         draw: "5",
    //         loss: "2",
    //         tie: "7",
    //         grad: "14",
    //         points: "10"
    //     },
    //     {
    //         teamId: "4",
    //         teamName: "team 4",
    //         won: "3",
    //         draw: "5",
    //         loss: "2",
    //         tie: "7",
    //         grad: "14",
    //         points: "10"
    //     },
    // ]
    const [TeamsData, seTeamsData] = useState([])
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get("https://yoursportzbackend.azurewebsites.net/api/team/all/")
            seTeamsData(response.data)
        }
        fetchData();
    }, []);

    const playersHeading = ["No.", 'Player Name', 'UserId', 'Gender', 'DOB', 'City', 'Position']
    const [PlayersData, setPlayerData] = useState([])
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get("user/all/")
            setPlayerData(response.data)
        }
        fetchData();
    }, []);

    return (
        <div className="MainContent">
            <div className="top">
                <div className="heading">
                    <h3>Welcome!</h3>
                    <p>Fuel Your Passion for Football</p>
                </div>
                <button>Invite</button>
            </div>
            <div className="middle">
                <ul>
                    {navLinks.map((link) => (
                        <li key={link.text}>
                            <img src={link.Img} alt={link.text} />
                            <div className="details">
                                <h3>
                                    {link.text}
                                </h3>
                                <p>
                                    {link.desc}

                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="bottom">
                <div className="left">
                    <div className="stats">
                        <div className="toggleBtns">
                            {toggleBtns.map((eachBtn) => (
                                <button
                                    key={eachBtn.id}
                                    className={`${activeButton === eachBtn.id ? "activeToggle" : "notActiveToggle"}`}
                                    onClick={() => handleClick(eachBtn.id)}
                                >
                                    {eachBtn.text}
                                </button>
                            ))}
                        </div>
                        <div className="mainStats">
                            {
                                activeButton === 1
                                &&
                                <table className="players">
                                    <thead>
                                        <tr>
                                            {
                                                playersHeading.map((eachHeading) => (
                                                    <th key={eachHeading}>{eachHeading}</th>
                                                ))
                                            }
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            PlayersData.slice(0, 10).map((eachTeam, index) => (
                                                <tr key={eachTeam._id}>
                                                    <td>{index + 1}</td>
                                                    <td>{eachTeam.name || "NA"}</td>
                                                    <td>{eachTeam.phone || "NA"}</td>
                                                    <td>{eachTeam.gender || "NA"}</td>
                                                    <td>{eachTeam.dob || "NA"}</td>
                                                    <td>{eachTeam.city || "NA"}</td>
                                                    <td>{eachTeam.position || "NA"}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            }
                            {
                                activeButton === 2
                                &&
                                <table className="score">
                                    <thead>
                                        <tr>
                                            {
                                                teamsHeading.map((eachHeading) => (
                                                    <th key={eachHeading}>{eachHeading}</th>
                                                ))
                                            }
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            TeamsData.slice(0, 10).map((eachTeam, index) => (
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
                                            ))
                                        }
                                    </tbody>
                                </table>
                            }
                            {
                                activeButton === 3
                                &&
                                <table className="teams">
                                    <thead>
                                        <tr>
                                            {
                                                teamsHeading.map((eachHeading) => (
                                                    <th key={eachHeading}>{eachHeading}</th>
                                                ))
                                            }
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            TeamsData.slice(0, 10).map((eachTeam, index) => (
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
                                            ))
                                        }
                                    </tbody>
                                </table>
                            }
                        </div>
                        <div className="moreStats">12345...</div>
                    </div>
                    <div className="statsChart">
                        <p>stats chart</p>
                    </div>
                </div>
                <div className="right">
                    <div className="nextMatch"> <p>next match</p></div>
                    <div className="upComingMatches"><p>upcoming match</p></div>
                    <div className="groundStats"><p>ground stats</p></div>
                </div>
            </div>
        </div>
    )
}
