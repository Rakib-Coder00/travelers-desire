import React from "react";
import "./Home.css";
import img from "../../Assets/image/img-2.jpg";
import useReviews from "./../../Hooks/useReviews";


const Home = () => {
  const [reviews, setReviews] = useReviews();
  // console.log(reviews);
  return (
    <div>
      <div className="home-container">
        <div className="txt-container">
          <h1>Your next Tour</h1>
          <h1>Your Best Experience</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Necessitatibus dignissimos <br /> voluptas ea quo laboriosam ullam
            rerum accusamus harum voluptates, aut commodi. <br /> Officia, fuga.
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
      <button>See all reviews</button>
    </div>
  );
};

export default Home;
