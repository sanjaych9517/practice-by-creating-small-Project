import React from "react";
import data from "./data.json";
const Cards = () => {
  return (
    <div>
      <p>POPULAR COURCES</p>
      <h1>Most Popular Courses</h1>
      <div className="flex gap-5 justify-around items-center ">
        {data.map((item, idx) => {
          return (
            <div
              key={idx}
              className=" rounded-2xl flex flex-col justify-center items-center px-3 py-3 shadow-2xl my-2.5 gap-2.5 bg-[#a2c9ff] font-serif"
            >
              <div>
                <img
                  src={item.image}
                  alt=""
                  className="h-50 w-75 rounded-2xl"
                />
                <h1>{item.title}</h1>
                <p>{item.category}</p>
                <p>
                  ⭐{item.rating} ({item.reviews})
                </p>
                <p>
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
