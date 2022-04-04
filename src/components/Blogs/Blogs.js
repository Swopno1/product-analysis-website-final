import React from "react";
import Article from "../Article/Article";

const blogs = [
  {
    id: 1,
    title: "What is Context API?",
    text: "Context API allow us to pass data or state across different component without prop-drilling. Generally prop-drilling makes a complex app more complex and difficult to debug. This is where context API plays a vital role to make the code DRY and easy to debug. Suppose, you want to pass a props to the child of a child component. In this case, we can simply pass the props directly to the 2nd child component using context api. We don't need to pass the props again in the 1st child element as prop-drilling.",
  },
  {
    id: 2,
    title: "What is Semantic tag?",
    text: "Semantic tag actually itself hold some values about the content. These tag are not only just display the content into the browser, but also tells the browser about the content. This helps the browser behave accordingly i.e., response to accessibility, help SEO etc. Semantic tag always exist in HTML but the HTML5 came with some significant change with some semantic tag which change the structure of HTML code these days. Like using HEADER, NAV, ARTICLE, ASIDE, MAIN etc.",
  },
  {
    id: 3,
    title:
      "What are the different between inline, block and inline-block elements?",
    text: "Inline element display in the same line. We can not use height or width of an inline element. On the other hand, inline-block element act like an inline element except it can hold height property. And the block element start with a new line and we can set both height and width.",
  },
];

const Blogs = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl text-cyan-900 font-semibold text-center p-6">
        Blogs
      </h2>
      <div>
        {blogs.map((blog) => (
          <Article key={blog.id} title={blog.title} text={blog.text}></Article>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
