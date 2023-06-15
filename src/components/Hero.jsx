import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] text-sm md:text-xl sm:text-lg font-bold p-2 ">
          HI I AM GAUTAM, A FULL STACK DEV. BUT GOOD AT
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Android App DEV.
        </h1>
        <div className="flex justify-center items-center space-x-3 py-4">
          <p className="md:5xl sm:4xl text-xl font-bold">I know </p>
          <Typed
            className="md:text-3xl sm:2xl text-xl font-bold text-[#00df9a]"
            strings={[
              "Android KOTLIN obviously",
              "JET PACK Compose",
              "NODE.JS - EXPRESS.JS",
              "MONGO DB",
              "REACT.JS",
              "Tailwind CSS too.",
              "A lot more --",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </div>
        <p className="md:text-2xl text-[15px] font-bold pt-2 md:pl-4 text-gray-500">
          I've been a Android App dev for over 2 years now.
        </p>
        <button className="text-black md:text-xl sm:text-lg text-sm md:w-48 sm:w-40 sm:py-4 md:py-4 mx-auto w-32 py-3 my-6 font-bold rounded-md bg-[#00df9a]">
          CONNECT
        </button>
      </div>
    </div>
  );
};

export default Hero;
