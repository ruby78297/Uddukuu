import ReactStars from "react-rating-stars-component";
import React from "react";

const Ratings = () => {
  return (
    <div>
      <ReactStars
        count={5}
        // onChange={ratingChanged}
        size={24}
        isHalf={true}
        activeColor="#ffd700"
      />
    </div>
  );
};
export default Ratings;
