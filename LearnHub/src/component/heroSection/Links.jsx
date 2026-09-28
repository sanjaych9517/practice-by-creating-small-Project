import React from "react";
import { NavLink } from "react-router-dom";
import Divide from "./Divide";

const Links = () => {
  return (
    <div className={`flex gap-3 text-[#0066FF]  text-3xl font-sans `}>
      <NavLink to="/learn" className="nav-link">
        LEARN
      </NavLink>
      <Divide />
      <NavLink to="/practice" className="nav-link">
        PRACTICE
      </NavLink>
      <Divide />
      <NavLink to="/grow" className="nav-link">
        GROW
      </NavLink>
    </div>
  );
};

export default Links;
