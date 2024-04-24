import "../../pages/Dashboard/Dashboard.css";
import Group from "../../images/dashboard/Group.svg";
import Vectory from "../../images/dashboard/Vectory.svg";
import run from "../../images/dashboard/run.svg";

export default function MainContent() {
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
    const teamHeading = ["Teams", 'W', 'D', 'L', 'T', 'GD', 'PTS']
    const TeamData = [
        {
            teamName: "team 1",
            teamId: "1",
            won: "1",
            draw: "2",
            loss: "3",
            tie: "0",
            grad: "12",
            points: "12"
        },
        {
            teamName: "team 2",
            teamId: "2",
            won: "6",
            draw: "7",
            loss: "6",
            tie: "2",
            grad: "13",
            points: "18"
        },

        {
            teamName: "team 3",
            teamId: "2",
            won: "3",
            draw: "5",
            loss: "2",
            tie: "7",
            grad: "14",
            points: "10"
        },]
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
                    <div className="top">
                        <h4>Premier League Details</h4>

                        <ul>
                            <div className="teamHeading">
                                <li>
                                    {
                                        teamHeading.map((team) => (
                                            <p key={team}>{team}</p>
                                        ))
                                    }
                                </li>
                            </div>
                            <div className="teamDeatails">
                                <div className="teamNames">
                                    <li>
                                        {
                                            TeamData.map((team) => (
                                                <p key={team.teamId}>{team.teamName}</p>
                                            ))
                                        }
                                    </li>
                                </div>
                                <div className="teamStats">
                                    <li>
                                        {
                                            TeamData.map((team) => (
                                                <p key={team.teamId}>{team.won}</p>
                                            ))
                                        }
                                    </li>
                                    <li>
                                        {
                                            TeamData.map((team) => (
                                                <p key={team.teamId}>{team.draw}</p>
                                            ))
                                        }
                                    </li>
                                    <li>
                                        {
                                            TeamData.map((team) => (
                                                <p key={team.teamId}>{team.tie}</p>
                                            ))
                                        }
                                    </li>
                                    <li>
                                        {
                                            TeamData.map((team) => (
                                                <p key={team.teamId}>{team.grad}</p>
                                            ))
                                        }
                                    </li>
                                    <li>
                                        {
                                            TeamData.map((team) => (
                                                <p key={team.teamId}>{team.points}</p>
                                            ))
                                        }
                                    </li>
                                </div>
                            </div>



                        </ul>

                    </div>
                    <div className="bottom"></div>
                </div>
                <div className="right">
                    <div className="top"></div>
                    <div className="bottom"></div>

                </div>
            </div>
        </div>
    )
}
