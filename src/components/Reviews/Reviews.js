import React from 'react';

const Reviews = ({review}) => {
    const {name, photo, text, position}= review
    return (
        <div>
            <img src={photo} alt=""></img>
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p><small>Ratings: {position}</small></p>
            </div>
        </div>
    );
};

export default Reviews;