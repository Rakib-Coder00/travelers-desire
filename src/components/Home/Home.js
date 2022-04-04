import React from "react";
import "./Home.css";
import img from "../../Assets/image/img-2.jpg";
import useReviews from "./../../Hooks/useReviews";
import Reviews from "../Reviews/Reviews";

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
          {reviews.map((review) => (
            <Reviews key={review.id} review={review} />
          ))}
        </div>

      </div>
      <button>See all reviews</button>
    </div>
  );
};

export default Home;
