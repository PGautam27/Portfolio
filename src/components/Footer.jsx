import React, { useEffect, useRef } from "react";
import { Link } from "react-scroll";
import {
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa";
import Lottie from "lottie-web";

const Footer = (props) => {
  const container = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../Assets/android.json"),
    });
  });

  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:gid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full  text-3xl font-bold text-[#00df9a] cursor-pointer">
          <Link to="hero" spy={true} smooth={true} offset={-100} duration={500}>
            GOOBLES.
          </Link>
        </h1>
        <p className="py-4">
          {!props.japan
            ? "P Gautam © 2023. No copyrights reserved 😂. | Made with ❤️ for Android enthusiasts"
            : "P Gautam © 2023. 著作権は留保されません 😂。 | Android 愛好家のために ❤️ で作られています"}
        </p>
        <div className="flex justify-evenly mid:w-[75%]">
          <a href="https://github.com/PGautam27">
            <FaGithubSquare size={40} className="hover:scale-125" />
          </a>
          <a href="https://instagram.com/gautamappu2731?igshid=NGExMmI2YTkyZg==">
            <FaInstagram size={40} className="hover:scale-125" />
          </a>
          <a href="https://twitter.com/pgautam27">
            <FaTwitterSquare size={40} className="hover:scale-125" />
          </a>
          <a href="https://www.linkedin.com/in/gautam-p-5b43581b6/">
            <FaLinkedin size={40} className="hover:scale-125" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
