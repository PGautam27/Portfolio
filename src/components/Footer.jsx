import React from "react";
import {
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:gid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full  text-3xl font-bold text-[#00df9a]">GOOBLES.</h1>
        <p className="py-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
          blanditiis incidunt, quam ipsam cumque, distinctio rem odit iste alias
          sequi, explicabo expedita debitis voluptates non nisi voluptate quia
          hic culpa?
        </p>
        <div className="flex justify-evenly mid:w-[75%] my-6">
          <FaGithubSquare size={40} />
          <FaInstagram size={40} />
          <FaTwitterSquare size={40} />
          <FaLinkedin size={40} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
