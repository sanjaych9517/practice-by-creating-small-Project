import React from "react";
import data from "./data.json";
import { NavLink } from "react-router-dom";
const Cards = () => {
  return (
    <div>
      <div className="flex flex-col gap-5 mx-18">
        <NavLink
          to="popularcources"
          className="text-xl font-bold text-blue-400 "
        >
          POPULAR COURCES
        </NavLink>

        <h1 className="text-3xl font-bold">Most Popular Courses</h1>
      </div>
      <div className="flex gap-5 justify-around items-center mx-9">
        {data.map((item, idx) => {
          return (
            <div
              key={idx}
              className=" rounded-2xl flex flex-col justify-center items-center px-3 py-3 shadow-2xl my-2.5 gap-2.5 bg-[#828487] font-serif g hover:bg-[#c8cbc7] "
            >
              <div>
                <img
                  src={item.image}
                  alt=""
                  className="h-50 w-75 rounded-2xl"
                />
                <h1 className="text-2xl my-2 mx-3">{item.title}</h1>
                <p className="text-xl my-2 mx-3 text-blue-500">{item.category}</p>
                <p className="text-xl my-2 mx-3">
                  ⭐{item.rating} ({item.reviews})
                </p>
                <p className="text-xl my-2 mx-3">
                  {item.currency} {item.price}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
