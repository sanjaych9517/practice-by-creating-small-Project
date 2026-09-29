import React from "react";
import { LuInstagram } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";
import { BsWhatsapp } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="bg-black/80 w-screen h-40 text-white flex justify-center items-center gap-2 flex-col text-xl font-serif">
      <h1 className="font-bold">@Sanjay Kapoor</h1>
      <p> &copy; My website accept all right 2026</p>
      <div className="flex gap-5">
        <IoCallOutline />
        <BsWhatsapp />
        <LuInstagram />
        <FiFacebook />
      </div>
    </div>
  );
};

export default Footer;
