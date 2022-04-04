import useReviews from "../../hooks/useReviews";
import Card from "../Card/Card";

const Reviews = () => {
  const [reviews] = useReviews([]);

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl text-cyan-900 font-semibold text-center p-6">
        User's Reviews: {reviews.length}
      </h2>
      <div className="md:grid grid-cols-3 gap-6">
        {reviews.map((review) => (
          <Card key={review.id} review={review}></Card>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
