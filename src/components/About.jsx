import React from "react";
import Me from "../Assets/pics.jpeg";

const About = () => {
  return (
    <div className="w-full bg-white py-16 px-4" id="about">
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
            Hey there! I'm the Android app whiz with a touch of comic genius.
            With over 2 years of experience, I've conquered bugs and crafted
            apps that'll leave you in awe. I've even interned at 3 different
            companies, mastering the art of coding like a boss. When I'm not
            cracking the code, I'm diving into the realms of AWS cloud
            architecture and attempting to speak the language of ninjas -
            Japanese. They call me a full-stack dev, but I prefer to think of
            myself as a code ninja extraordinaire. So buckle up, my friend,
            because I'm here to unleash mind-blowing apps that'll tickle your
            funny bone and swipe you off your feet!
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
