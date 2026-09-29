import React from "react";
import data from "./data.json";

const Card = () => {
  return (
    <div className="flex gap-22 justify-center items-center ">
      {data.map((item, idx) => {
        return (
          <div
            className=" rounded-2xl flex flex-col justify-center items-center px-3 py-7 shadow-2xl my-2.5 gap-2.5 bg-[#828487] font-serif g hover:bg-[#c8cbc7]"
            key={idx}
          >
            <p className="text-5xl">{item.icon}</p>
            <h1 className="text-2xl font-bold">{item.title}</h1>
            <p className="text-2xl text-blue-600 hover:text-red-600">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
