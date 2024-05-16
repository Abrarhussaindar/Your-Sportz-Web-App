import DashboardLayout from "../../../../DashboardLayout"
import "./ManageTeam.css"
import playerIcon from "../../../../../images/dashboard/player1.png"

export const ManageTeam = () => {
    return (
        <DashboardLayout>
            <div className="ManageTeam">

                <div className="topSection">

                    <h4>Welcome User</h4>
                   <button>Add Member</button>

                </div>

                <div className="mainSection">
                    <div className="leftSection">
                        <h3>Team Members</h3>


                        <ul className="teamMembers">
                            <li >
                                <img src={playerIcon} />
                                <div className="details">
                                    <h4>Jon Doe</h4>
                                    <p>Goal Keeper</p>
                                </div>
                            </li>
                            <li >
                                <img src={playerIcon} />
                                <div className="details">
                                    <h4>Mario</h4>
                                    <p>Forward</p>
                                </div>
                            </li>
                            <li >
                                <img src={playerIcon} />
                                <div className="details">
                                    <h4>Ronaldo</h4>
                                    <p>forward</p>
                                </div>
                            </li>
                            <li >
                                <img src={playerIcon} />
                                <div className="details">
                                    <h4>Messi</h4>
                                    <p>Backward </p>
                                </div>
                            </li>
                            <li >
                                <img src={playerIcon} />
                                <div className="details">
                                    <h4>Deep</h4>
                                    <p>Center</p>
                                </div>
                            </li>
                            <li >
                                <img src={playerIcon} />
                                <div className="details">
                                    <h4>Zubair</h4>
                                    <p>Defender</p>
                                </div>
                            </li>
                        </ul>

                        <div className="teamActivity">
                                 <h3>Team Activity</h3>
                        </div>
                    </div>

                    <div className="rightSection">
                        <div className="teamMemberDetails">

                            <div className="top">
                                <img src={playerIcon} alt="" />
                                <h4>Ronaldo</h4>
                                <p>Forward</p>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}
