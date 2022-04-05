import React from "react";
import "./Home.css";
import img from "../../Assets/image/img-1.jpg";
import useReviews from "./../../Hooks/useReviews";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {  faQuoteLeft, faQuoteRight, faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const navigate = useNavigate()
  const [reviews] = useReviews();
  return (
    <div className="home">
      <div className="home-container">
        <div className="txt-container">
          <h1>Travelers Desire</h1>
          <h1>Analyze Your Next Business Travel</h1>
          <p>
          Certainly, travel is more than the seeing of sights. It is a change that goes on, <br /> deep and permanent, in the ideas of living.Travel makes one modest. <br /> You see what a tiny place you occupy in the world.
          </p>
          <button>Explore Now</button>
        </div>
        <div className="img-container">
          <img src={img} alt="img" />
        </div>
      </div>

      
      <div className="customer-review">
        <h1>Customer Review({reviews.length})</h1>

        <div className="review-cart">
          {reviews.slice(0, 3).map((review) =>  (
            <div key={review.id} className="review-content box">
            <FontAwesomeIcon className="fa-left" icon={faQuoteLeft}/>
            <FontAwesomeIcon className="fa-right" icon={faQuoteRight}/>
            <img src={review.avatar} alt=""/>
            
            <div className="stars"> {review.rating === 5 ?
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
            }  <span>{review.rating}</span>
            </div>
            <p>{review.message}</p>
            <h3>{review.name}</h3>
        </div> 
          ))}
        </div>

      </div>
      <button className='review-btn' onClick={()=> navigate('/reviews')}>See all reviews</button>
    </div>
  );
};

export default Home;
