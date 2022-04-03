import React from "react";
import { Link } from "react-router-dom";

const navItems = [
  {
    id: 1,
    path: "/",
    text: "Home",
  },
  {
    id: 2,
    path: "/reviews",
    text: "Reviews",
  },
  {
    id: 3,
    path: "/dashboard",
    text: "Dashboard",
  },
  {
    id: 4,
    path: "/blogs",
    text: "Blogs",
  },
  {
    id: 5,
    path: "/about",
    text: "About",
  },
];

const Nav = () => {
  return (
    <nav>
      <ul>
        {navItems.map((item) => (
          <Li path={item.path} text={item.text} key={item.id}></Li>
        ))}
      </ul>
    </nav>
  );
};

const Li = ({ path, text }) => {
  return <Link to={path}>{text}</Link>;
};

export default Nav;
