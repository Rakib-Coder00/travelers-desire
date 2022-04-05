import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {  faQuoteLeft, faQuoteRight, faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import './Review.css'

const Review = ({review}) => {
    const {name, avatar, message, rating} = review
  return (
    <div className="review-box">
           <div className="review-content box">
            <FontAwesomeIcon className="fa-left" icon={faQuoteLeft}/>
            <FontAwesomeIcon className="fa-right" icon={faQuoteRight}/>
            <img src={avatar} alt=""/>
            <div className="stars"> {rating ===5 ?
             (<div>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            </div>): 
            (<div>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStarHalf}/>
            </div>) 
            }
            <span>{rating}</span>
            </div>
            <p>{message}</p>
            <h3>{name}</h3>
            {/* <span>satisfied client</span> */}
        </div> 
    </div>
  );
};

export default Review;
