import React from 'react';
import useReviews from './../../Hooks/useReviews';

const Reviews = () => {
    const [reviews, setReviews]= useReviews()
    return (
        <div>
            <h2>Our Happy Clients</h2>
            <div className="">
            {reviews.map((review) =>  (
            <div key={review.id}>
            <img src={review.photo} alt=""></img>
            <div className='product-info'>
                <p className='product-name'>{review.name}</p>
                <p><small>Ratings: {review.position}</small></p>
            </div>
        </div>
          ))}
            </div>
        </div>
    );
};

export default Reviews;