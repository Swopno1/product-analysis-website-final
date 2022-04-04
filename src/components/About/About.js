import React from "react";
import Article from "../Article/Article";

const articles = [
  {
    id: 1,
    title: "About Us",
    text: "Birds-eye Review is a place to share and find user reviews about camera drones. You can find authentic expert users reviews about the camera drones. This is a open-source platform where users can submit there real experience with different type of drones.",
  },
  {
    id: 2,
    title: "Contact Us",
    text: "Currently we don't allow our user to contact us directly. We don't share any contact information. All you can send us a query mail to info@xyz.com and we'll communicate to you if necessary.",
  },
];

const About = () => {
  return (
    <div>
      <h2 className="text-3xl text-cyan-900 font-semibold text-center p-6">
        About
      </h2>
      {articles.map((blog) => (
        <Article key={blog.id} title={blog.title} text={blog.text}></Article>
      ))}
    </div>
  );
};

export default About;
