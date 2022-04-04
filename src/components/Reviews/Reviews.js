import React, { useEffect, useState } from "react";

const Reviews = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div>
      <h1>Reviews {console.log(user)}</h1>
    </div>
  );
};

export default Reviews;
