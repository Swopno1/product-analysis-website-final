import React from "react";

const Article = ({ title, text }) => {
  return (
    <article className="my-6 mx-3 border rounded shadow p-3">
      <h3 className="text-xl text-amber-600 font-semibold">{title}</h3>
      <p className="text-lg text-cyan-900 py-3">{text}</p>
    </article>
  );
};

export default Article;
