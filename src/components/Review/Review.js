import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {  faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import './Review.css'

const Review = ({review}) => {
    const {name, avatar, message, rating, designation, location} = review
  return (
    <div>
      <div className="testimonial-container">
        <div className="fas fa-quote-left"><FontAwesomeIcon icon={faQuoteLeft}/></div>
        <div className="fas fa-quote-right"><FontAwesomeIcon icon={faQuoteRight}/></div>
        <p className="testimonial">{message}</p>
        <div className="user">
          <img src={avatar} alt="img" className="user-img" />
          <div className="user-details">
            <h4 className="username">{name}</h4>
            <small>Rating : {rating}</small>
            <div className="more">
              <p className="role">{designation}</p> <span> ,</span>
              <p className="location">{location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
