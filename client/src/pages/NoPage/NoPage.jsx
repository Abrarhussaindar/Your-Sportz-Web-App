import "./NoPage.css"
import img from "../../images/NoPage.png"
import { useNavigate } from "react-router-dom";

export const NoPage = () => {
    const navigate = useNavigate();
    return (
        <div className="noPage">
            <h2>Your<span>Sportz</span></h2>
            <img src={img} alt="" />
            <p>Sorry, This page does not exist</p>
            <button onClick={() => navigate("/")}>Go Back</button>
        </div>
    )
}
