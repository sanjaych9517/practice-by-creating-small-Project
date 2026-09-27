import React from "react";
import Links from "./Links";
import Heading from "./Heading";
import Para from "./Para";
import Button from "../headerNavigation/Button";

const Hero = () => {
  return (
    <>
      <div className="bg-amber-500">
        <Links />
        <Heading />
        <Para />
        <Button title="Browser cources ->" />
        <Button title="watch video" />
      </div>


    </>
  );
};

export default Hero;
