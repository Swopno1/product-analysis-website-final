import React from "react";

const Card = ({ review }) => {
  const { img, post, rating, user } = review;

  return (
    <blockquote className="border rounded-xl shadow h-64 p-3 my-3">
      <div className="flex items-center pb-3">
        <img className="w-12 h-12 rounded-full" src={img} alt="user image" />
        <div className="ml-3">
          <cite className="text-lg font-semibold text-cyan-800">{user}</cite>
          <p className="text-amber-600">Rating: {rating.toFixed(2)}</p>
        </div>
      </div>
      <p className="leading-loose">
        <span className="text-amber-500 font-bold pr-2 text-2xl">"</span>
        {post}
        <span className="text-amber-500 font-bold pr-2 text-2xl relative bottom-0 right-0">
          "
        </span>
      </p>
    </blockquote>
  );
};

export default Card;
