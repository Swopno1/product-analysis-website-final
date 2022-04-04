import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl text-cyan-900 font-semibold text-center p-6">
        User's Reviews: {reviews.length}
      </h1>
      <div className="md:grid grid-cols-3 gap-6">
        {reviews.map((review) => (
          <Card key={review.id} review={review}></Card>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
