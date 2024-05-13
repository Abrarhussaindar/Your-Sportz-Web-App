import "./Matches.css"

export const Matches = ({teamA, teamB, date, teamALogo, teamBLogo}) => {
    return (
        <div className="indiMatches next">


            <div className="team1">
                <img src={teamALogo} alt="" />
                <p>{teamA}</p>
            </div>

            <div className="date">
                <h3>12:15<span>am</span></h3>
                <p>{date ? date : ""}</p>
            </div>

            <div className="team2">
                <img src={teamBLogo} alt="" />
                <p>{teamB}</p>
            </div>

        </div>
    )
}
