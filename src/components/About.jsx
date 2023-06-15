import React from "react";
import Me from "../Assets/me.jpg";

const About = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={Me} alt="My pic" className="w-72 rounded-full mx-auto" />
        <div className="flex flex-col justify-center ps-5 pt-2 md:ps-0 md:pt-0 sm:ps-0 sm:pt-2">
          <p className="text-[#00df9a] font-bold text-lg md:text-2xl sm:text-xl">
            ABOUT ME
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold uppercase pb-2">
            Who AM I?
          </h1>
          <p className="md:text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
            nesciunt non accusantium in, molestias dolorum sit voluptates?
            Corporis repudiandae, optio illo, obcaecati iste quos tempora ut
            eaque nostrum voluptatum numquam.
          </p>
          <button className=" bg-black w-28 h-9 text-sm sm:text-lg sm:w-32 sm:h-9 md:text-lg md:w-36 md:h-11 mt-4 rounded-lg uppercase text-[#00df9a] font-bold">
            My resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
