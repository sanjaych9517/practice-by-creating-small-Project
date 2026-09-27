import React from "react";
import { NavLink } from "react-router-dom";
import Divide from "./Divide";

const Links = () => {
  return (
    <div className="flex gap-3 text-[#0066FF] font-bold ">
      <NavLink to="/learn">LEARN</NavLink>
      <Divide />
      <NavLink to="/learn">PRACTICE</NavLink>
      <Divide />
      <NavLink to="/learn">GROW</NavLink>
    </div>
  );
};

export default Links;
