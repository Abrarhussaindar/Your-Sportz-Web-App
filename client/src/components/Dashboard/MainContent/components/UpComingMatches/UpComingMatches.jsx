import { useEffect, useState } from "react";
import axios from "../../../../../axios";
import { Matches } from "../Matches/Matches";
import "../NextMatch/NextMatch.css"

export const UpComingMatches = () => {
    const [MatchesData, setMatchesData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(
                "https://yoursportzbackend.azurewebsites.net/api/match/get/all/"
            );

            setMatchesData(response.data);
        }
        fetchData();

    }, []);
    return (
        <div className="upComingMatches">

            <h4>Upcoming Matches</h4>

            {
                MatchesData.slice(18, 21).map((eachMatch) => (
                    <div key={eachMatch._id}>
                        <Matches
                            key={eachMatch._id}
                            teamA={eachMatch.teamA}
                            teamB={eachMatch.teamB}
                            date={eachMatch.ground.date}
                            teamALogo={eachMatch.teamALogo}
                            teamBLogo={eachMatch.teamBLogo}
                        />
                        <hr />
                    </div>

                ))
            }

        </div>
    )
}
