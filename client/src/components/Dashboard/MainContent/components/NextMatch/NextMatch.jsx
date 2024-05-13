import { useEffect, useState } from 'react';
import axios from '../../../../../axios';
import { Matches } from '../Matches/Matches';
import "./NextMatch.css"

export const NextMatch = () => {
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
        <div className="rainbow-container">
            <div className="nextMatch rainbow">
                <h4>Next Match</h4>
                {
                    MatchesData.slice(18, 19).map((eachMatch) => (

                        <Matches
                            key={eachMatch._id}
                            teamA={eachMatch.teamA}
                            teamB={eachMatch.teamB}
                            date={eachMatch.ground.date}
                            teamALogo={eachMatch.teamALogo}
                            teamBLogo={eachMatch.teamBLogo}
                        />
                    ))
                }
            </div>
        </div>
    )
}
