import React from "react";
import { NavLink } from "react-router-dom";
import Data from "./Data"

const About = () => {
  return (
    <div className="flex mx-10 my-15 gap-10 justify-center items-center font-serif">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaEp_zpBOqHpG06-nwN_SCPZQkSiJ5tNTciPLi9lB3jw&s=10"
        alt=""
        className="w-150 h-75 "
      />
      <div className="flex flex-col gap-3">
        <NavLink
          to="aboutus"
          className="text-xl font-bold text-blue-400 nav-link "
        >
          ABOUT US
        </NavLink>

        <h1 className="text-4xl font-bold">
          Empowering Learners <br /> Worldwide
        </h1>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis tenetur
          corrupti facilis repellendus. Culpa dicta quisquam ea, non quod, quia,
          adipisci sint in dolorem illo illum ipsum. Earum, voluptatem neque.
        </p>

        <div className="flex my-7 justify-around">
          <Data data="50K+" title="Active Student" />

          <Data data="200+" title="Expart Instructor" />

          <Data data="95%" title="Positive Review" />
        </div>
      </div>
    </div>
  );
};

export default About;
