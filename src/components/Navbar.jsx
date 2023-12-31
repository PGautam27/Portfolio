import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
import { toast } from "react-toastify";
import "../index.css";

const Navbar = (props) => {
  return (
    <div className="flex z-50 justify-between items-center h-20 w-full mx-auto px-4 md:px-28 fixed bg-black text-white">
      <h1 className="w-full text-3xl font-bold cursor-pointer text-[#00df9a]">
        <Link to="hero" spy={true} smooth={true} offset={-100} duration={500}>
          GOOBLES.
        </Link>
      </h1>
      <ul className="hidden md:flex">
        <li
          className="p-4 uppercase font-bold cursor-pointer text-[#00df9a]"
          onClick={props.chLang}
        >
          {!props.japan ? "Japanese" : "English"}
        </li>
        <li className="p-4 uppercase font-bold cursor-pointer">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="p-4 uppercase font-bold cursor-pointer">
          <Link
            to="project"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="p-4 uppercase font-bold cursor-pointer">
          <Link
            to="connect"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            connect
          </Link>
        </li>
        <li
          className="p-4 uppercase font-bold cursor-pointer"
          onClick={() => {
            toast.info("😁 Blog's on the way", {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              style: {
                color: "black",
                background: "#00df9a",
                fontWeight: "bold",
              },
            });
          }}
        >
          Blog
        </li>
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
          <div onClick={props.func}>
            <li
              className="p-4 uppercase font-bold cursor-pointer border-b border-gray-600 text-[#00df9a]"
              onClick={props.chLang}
            >
              {!props.japan ? "Japanese" : "English"}
            </li>
          </div>
          <li className="p-4 border-b border-gray-600 uppercase cursor-pointer">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={props.func}
            >
              About
            </Link>
          </li>
          <li className="p-4 border-b border-gray-600 uppercase cursor-pointer">
            <Link
              to="project"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={props.func}
            >
              Projects
            </Link>
          </li>
          <li className="p-4 border-b border-gray-600 uppercase cursor-pointer">
            <Link
              to="connect"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={props.func}
            >
              Connect
            </Link>
          </li>
          <li
            className="p-4 uppercase cursor-pointer"
            onClick={() => {
              toast.info("😁 Blog's on the way", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                style: {
                  color: "black",
                  background: "#00df9a",
                  fontWeight: "bold",
                },
              });
            }}
          >
            Blog
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
