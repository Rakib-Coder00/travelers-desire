import React, { useContext } from 'react';
import { ReviewContext } from './../../App';

const Reviews = () => {
    const [reviews] = useContext(ReviewContext)
    
    return (
        <div>
            <h4>This is a comment</h4>
        
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