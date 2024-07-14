import { imgUrl } from "../utiles/mockData";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faStar } from "@fortawesome/free-solid-svg-icons";
import './RestarentCard.css'

export default function RestarentCard(props){
 
     const{name,imgId,offer,food,location,rating,delivaryTime} =props.resDetails;



    return(
        <>
         <div className="restarentCard">
         
            <img src={`${imgUrl}${imgId}`} width='200px' height='200px' alt="" />
            <h2 className="Offer">{offer}</h2>
            <h2 style={{fontSize:"bold"}}>{name}</h2>
           <div className="restarentDetails">
            <div>
            <span > <FontAwesomeIcon icon={faStar} />{rating}</span>
            <span>  {delivaryTime}</span>
           
 
           </div>
            
            <span>{food}</span><br />
            <span>{location}</span>
            
            </div>
           
         </div>
        </>
    );
}