import React from "react";
import { NavLink } from "react-router-dom";

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
    <nav className="container mx-auto">
      <ul className="my-6 items-center justify-center font-semibold md:flex">
        {navItems.map((item) => (
          <Li path={item.path} text={item.text} key={item.id}></Li>
        ))}
      </ul>
    </nav>
  );
};

const Li = ({ path, text }) => {
  return (
    <li>
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive
            ? "text-cyan-900 px-6 py-2 rounded hover:font-bold underline underline-offset-4 decoration-2 decoration-active bg-amber-200"
            : "text-cyan-900 px-6 py-2 rounded hover:font-bold hover:underline underline-offset-4 decoration-2 decoration-amber-500 hover:bg-amber-100"
        }
      >
        {text}
      </NavLink>
    </li>
  );
};

export default Nav;
