import players from "../../../../../images/dashboard/soccer-player.png";
import team from "../../../../../images/dashboard/group.png";
import match from "../../../../../images/dashboard/football.png";
import won from "../../../../../images/dashboard/Vectory.svg";
import lost from "../../../../../images/dashboard/trophy.png";
import "./Middle.css"

export const Middle = () => {
    const navLinks = [
        {
            text: "100",
            desc: "Total Players",
            Img: players,
        },
        {
            text: "10",
            desc: "Total Teams",
            Img: team,
        },
        {
            text: "20",
            desc: "Total Matches",
            Img: match,
        },
        {
            text: "5",
            desc: "Total Tournaments",
            Img: match,
        },

        {
            text: "11",
            desc: "Total Wins",
            Img: won,
        },
        {
            text: "5",
            desc: "Total Lost",
            Img: lost,
        },
    ];
    return (
        <div className="middlePart">
            <ul>
                {navLinks.map((link) => (
                    <li key={link.text}>
                        <img src={link.Img} alt={link.text} />
                        <div className="details">
                            <h4>{link.text}</h4>
                            <p>{link.desc}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
