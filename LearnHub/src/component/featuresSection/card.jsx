import React from "react";
import data from "./data.json";

const Card = () => {
  return (
    <div className="flex gap-5 justify-center items-center ">
      {data.map((item) => {
        return (
          <div className=" rounded-2xl flex flex-col justify-center items-center px-3 py-7 shadow-2xl my-2.5 gap-2.5 bg-[#a2c9ff] font-serif">
            <p className="text-5xl">{item.icon}</p>
            <h1 className="text-2xl font-bold">{item.title}</h1>
            <p className="text-2xl text-blue-600 hover:text-red-600">{item.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
