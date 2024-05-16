import DashboardLayout from "../../../../DashboardLayout"
import "./ManageTeam.css"
import playerIcon from "../../../../../images/dashboard/player1.png"

import dots from "../../../../../images/dashboard/dots.png"
import { useEffect, useState } from "react"
import axios from "../../../../../axios"

export const ManageTeam = () => {
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
    console.log("ta", TeamsData);
    return (
        <DashboardLayout>
            <div className="ManageTeam">
                <div className="topSection">
                    <h4>Welcome! User</h4>
                    <button>Add Member</button>
                </div>

                <div className="mainSection">
                    <div className="leftSection">
                        <div className="members">
                            <div className="heading">
                                <h3>Team Members</h3>
                                <p>View All</p>
                            </div>
                            <ul className="teamMembers">
                                {
                                    TeamsData.slice(0, 4).map((eachTeam) => (
                                        <li key={eachTeam._id} >
                                            <img src={eachTeam.logo} />
                                            <div className="details">
                                                <h4>{eachTeam.name}</h4>
                                                <p>{eachTeam.city}</p>
                                            </div>
                                        </li>
                                    ))
                                }


                            </ul>
                        </div>
                        <div className="teamActivity">
                            <h3>Team Activity</h3>
                        </div>
                    </div>

                    <div className="rightSection">
                        {
                            TeamsData.slice(0,1).map((eachTeam) => (
                                <>
                                    <div className="top">
                                        <img src={eachTeam.logo} alt="" />
                                        
                                        <p>{eachTeam.city}</p>
                                    </div>
                                    <div className="middle">
                                        <div className="playingTeamName">{eachTeam.name}</div>

                                        <div className="left">
                                            <img src={playerIcon} />
                                            <div className="teamDetails">
                                                <h4>{eachTeam.phone}</h4>
                                                <p>Head position</p>
                                            </div>
                                        </div>
                                        <img src={dots} className="dots" />

                                    </div>
                                    <div className="bottom"></div>
                                </>
                                )
                            )
                        }


                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}
