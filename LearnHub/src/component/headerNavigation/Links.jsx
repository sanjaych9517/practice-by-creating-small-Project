import React from "react";
import { NavLink } from "react-router-dom";
const Links = () => {
  return (
    <div className="flex justify-center gap-10 px-4 text-[#0066FF]">
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/courses" className="nav-link">
        Courses
      </NavLink>
      <NavLink to="/about" className="nav-link">
        About
      </NavLink>
      <NavLink to="/blog" className="nav-link">
        Blog
      </NavLink>
      <NavLink to="/contact" className="nav-link">
        Contact
      </NavLink>
    </div>
  );
};

export default Links;
