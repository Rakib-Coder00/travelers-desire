import React from "react";
import "./Reviews.css";
import useReviews from "./../../Hooks/useReviews";
import Review from './../Review/Review';

const Reviews = () => {
  const [reviews] = useReviews();
  return (
    <div>
      <h2 style={{textAlign: 'center'}}>Our Happy Clients</h2>
      <div className="review">
      {
          reviews.map((review) => <Review  key={review.id} review={review} />)
      }
      
    </div>
    </div>
  );
};

export default Reviews;
