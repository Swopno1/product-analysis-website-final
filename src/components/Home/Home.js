import React from "react";

const Home = () => {
  return (
    <div className="container mx-auto md:flex items-center justify-between">
      <div className="m-3">
        <h1 className="my-6 text-6xl font-bold text-cyan-900">
          Birds-eye Review <br />{" "}
          <span className="text-amber-500">Choose the Best Drone</span>
        </h1>
        <p className="text-cyan-900 text-lg">
          Select the best camera drone for your next vlog. This is a open-source
          platform where users can submit there real experience with different
          type of drones. You can easily find all the necessary information and
          the best alternative for your case...
        </p>
        <button className="py-2 px-6 my-6 rounded border text-xl font-semibold bg-amber-500 text-cyan-900 hover:text-cyan-50 hover:bg-amber-600">
          Submit Your Review...
        </button>
      </div>
      <div className="">
        <img className="" src="banner.png" alt="" />
      </div>
    </div>
  );
};

export default Home;
