import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Navbar = (props) => {
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4  text-white">
      <h1 className="w-full  text-3xl font-bold text-[#00df9a]">GOOBLES.</h1>
      <ul className="hidden md:flex">
        <li className="p-4 uppercase">About</li>
        <li className="p-4 uppercase">Project</li>
        <li className="p-4 uppercase">Blog</li>
      </ul>
      <div onClick={props.func} className="block md:hidden">
        {!props.state ? (
          <AiOutlineClose size={20} />
        ) : (
          <AiOutlineMenu size={20} />
        )}
      </div>
      <div
        className={
          !props.state
            ? "fixed top-0 left-0 h-full w-[60%] border-r border-gray-400 bg-[#000300] ease-in-out duration-100"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full  text-3xl m-4 font-bold text-[#00df9a]">
          GOOBLES.
        </h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600 uppercase">About</li>
          <li className="p-4 border-b border-gray-600 uppercase">Project</li>
          <li className="p-4 uppercase">Blog</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
