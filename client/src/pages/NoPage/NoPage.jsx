import "./NoPage.css"
import img from "../../images/NoPage.png"
import { useNavigate } from "react-router-dom";

export const NoPage = () => {
    const navigate = useNavigate();
    return (
        
        
        <div className="noPage">
            <img src={img} alt="" />
            <p>Sorry, This page does not exist</p>
            <button onClick={() => navigate(-1)}>Go Back</button>
            
            
        </div>
       
    )
}
