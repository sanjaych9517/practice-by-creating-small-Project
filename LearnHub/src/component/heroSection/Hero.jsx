import React from "react";
import Links from "./Links";
import Heading from "./Heading";
import Para from "./Para";
import Button from "../headerNavigation/Button";
import Img from "./Img";

const Hero = () => {
  return (
    <div className="flex bg-[#F0F8FF] justify-center items-center px-6">
      <Img />
      <div className="flex flex-col gap-3 w-[200%] items-start pl-20 py-10 pr-32">
        <Links />
        <Heading />
        <Para />
        <div className="flex gap-8">
          <Button
            title="Browser cources ->"
            className={
              "bg-[#0066FF] px-5 py-2 border rounded-xl text-xl text-white"
            }
          />
          <Button
            title="watch video"
            className={
              "bg-white px-5 border rounded-xl text-[#0066FF] font-bold text-xl py-2 nav-link"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
