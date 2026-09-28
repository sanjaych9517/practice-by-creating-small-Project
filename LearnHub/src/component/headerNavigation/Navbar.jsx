import React from "react";
import Logo from "./Logo";
import Links from "./Links";
import Searchbar from "./Searchbar";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="flex justify-around items-center  text-[1.8rem] p-4 shadow-xl font-serif  ">
      <Logo />
      <Links />

      <Searchbar />
      <div className=" flex justify-center items-center gap-5 ">
        <Button title="Login" />
        <Button
          title="Sign Up"
          className={"bg-[#0066FF] px-7 border rounded-xl text-white"}
        />
      </div>
    </div>
  );
};

export default Navbar;
