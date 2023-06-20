import React, { useEffect, useState } from "react";
import Typed from "react-typed";
import { AiOutlineAndroid } from "react-icons/ai";

const Hero = (props) => {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(false);
    }, 3470);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-white" id="hero">
      <div
        className={
          animate
            ? "w-[20%] hidden xl:block top-30 rotate-45 mt-[5%] ml-[-15%] left-0 absolute"
            : "w-[20%] hidden xl:block top-30 rotate-45 mt-[4%] ml-[-13%] left-0 absolute"
        }
      >
        <AiOutlineAndroid
          className={animate ? "ml-[-25%] animate-bounce" : "ml-[-25%]"}
          color="#00df9a"
          size={500}
        />
      </div>

      <div className="absolute top-[50%] ml-[-8%] rotate-45">
        <AiOutlineAndroid
          className={
            animate
              ? `animate-bounce ${props.state ? "" : "hidden"}`
              : `${props.state ? "" : "hidden"}`
          }
          size={80}
          color="#00df9a"
        />
      </div>
      <div className="absolute lg:hidden top-[50%] right-[-8%] rotate-[315deg]">
        <AiOutlineAndroid
          className={animate ? "animate-bounce" : ""}
          size={80}
          color="#00df9a"
        />
      </div>

      <div className="max-w-[800px] mt-[-96] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] text-sm md:text-xl sm:text-lg font-bold p-2 ">
          {!props.japan
            ? "HI I AM GAUTAM, A FULL STACK DEV. BUT GOOD AT"
            : "こんにちは、私はガウタムです。フルスタック開発者ですが、得意なのは"}
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          {!props.japan ? "Android App DEV." : "Androidアプリ開発者"}
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
          {!props.japan
            ? "I've been a Android App dev for over 2 years now."
            : "私はAndroidアプリ開発者として2年以上の経験があります。"}
        </p>
        <a href="https://www.linkedin.com/in/gautam-p-5b43581b6/">
          <button className="text-black md:text-xl sm:text-lg text-sm md:w-48 sm:w-40 sm:py-4 md:py-4 mx-auto w-32 py-3 my-6 font-bold rounded-md bg-[#00df9a]">
            {!props.japan ? "CONNECT" : "接続する"}
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
