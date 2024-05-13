import team1 from "../../images/dashboard/team1.png";
import team2 from "../../images/dashboard/team2.png";
export const Matches = (match) => {
    
    
    return (
        <div className="matches">


            <div className="team1">
                <img src={team1} alt="" />
                <p>{match.match.teamA}</p>
            </div>

            <div className="date">
                <h3>12:15<span>am</span></h3>
                <p>Tomorrow</p>
            </div>

            <div className="team2">
                <img src={team2} alt="" />
                <p>{match.match.teamB}</p>
            </div>

        </div>
    )
}
