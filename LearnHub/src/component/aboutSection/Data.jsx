import React from "react";

const Data = ({ data, title }) => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-blue-500">{data}</h1>
      <p className="text-xl">{title}</p>
    </div>
  );
};

export default Data;
