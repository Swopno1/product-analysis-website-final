import { Link } from "react-router-dom";
import useReviews from "../../hooks/useReviews";
import Card from "../Card/Card";

const Home = () => {
  const [reviews] = useReviews([]);

  const showInHome = reviews.length > 3 ? reviews.slice(0, 3) : reviews;

  return (
    <>
      <div className="container mx-auto md:flex items-center justify-between">
        <div className="m-3">
          <h1 className="my-6 text-6xl font-bold text-cyan-900">
            Birds-eye Review <br />{" "}
            <span className="text-amber-500">Choose the Best Drone</span>
          </h1>
          <p className="text-cyan-900 text-lg">
            Select the best camera drone for your next vlog. This is a
            open-source platform where users can submit there real experience
            with different type of drones. You can easily find all the necessary
            information and the best alternative for your case...
          </p>
          <button className="py-2 px-6 my-6 rounded border text-xl font-semibold bg-amber-500 text-cyan-900 hover:text-cyan-50 hover:bg-amber-600">
            Submit Your Review...
          </button>
        </div>
        <div className="">
          <img className="" src="banner.png" alt="" />
        </div>
      </div>
      <div className="container mx-auto mb-12 pb-12">
        <h1 className="text-3xl text-cyan-900 font-semibold text-center p-6">
          User's Reviews
        </h1>
        <div className="my-6 mx-3 md:grid grid-cols-3 gap-6 mb-12">
          {showInHome.map((review) => (
            <Card key={review.id} review={review}></Card>
          ))}
        </div>
        <div className="text-center">
          <Link
            className="py-3 px-6 rounded shadow border bg-amber-500"
            to="/reviews"
          >
            See All Reviews ({reviews.length})
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
