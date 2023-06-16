import React from "react";
import Me from "../Assets/me.jpg";

const Projects = () => {
  return (
    <div className="w-full pb-[5rem] px-4">
      <div className="text-center py-[5rem]">
        <h1 className="uppercase font-bold text-3xl text-[#00df9a]">
          My Projects
        </h1>
      </div>
      <div className="max-w-[1240px]  mx-auto grid lg:grid-cols-3 gap-8">
        <div className="md:w-full bg-gray-100 shadow-xl w-[85%] justify-self-center flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            src={Me}
            alt="ok"
            className="w-20 mx-auto mt-[-8%] lg:mt-[-8%] md:mt-[-4%] rounded-full bg-white"
          />
          <h2 className="text-2xl font-bold text-center py-8">Project 1</h2>
          <p className="text-center font-bold text-4xl">Hola</p>
          <div>
            <p className="py-2 border-b mx-8 text-center mt-8">BLah blah</p>
            <p className="py-2 border-b mx-8 text-center">BLah blah</p>
            <p className="py-2 border-b mx-8 text-center">BLah blah</p>
            <p className="py-2 border-b mx-8 text-center">BLah blah</p>
            <p className="py-2 border-b mx-8 text-center">BLah blah</p>
          </div>
          <div className="w-full flex justify-center ">
            <button className="bg-black text-[#00df9a] uppercase font-bold rounded-md ml-4 w-48 h-12  my-6 px-6">
              Check it out
            </button>
          </div>
        </div>
        <div className="md:w-full shadow-xl w-[85%] justify-self-center bg-gray-200 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            src={Me}
            alt="ok"
            className="w-20 mx-auto mt-[-8%] lg:mt-[-8%] md:mt-[-4%] rounded-full bg-white"
          />
          <h2 className="text-2xl font-bold text-center py-8">Project 1</h2>
          <p className="text-center font-bold text-4xl">Hola</p>
          <div>
            <p className="py-2 border-b mx-8 text-center mt-8">BLah blah</p>
            <p className="py-2 border-b mx-8 text-center">BLah blah</p>
            <p className="py-2 border-b mx-8 text-center">BLah blah</p>
            <p className="py-2 border-b mx-8 text-center">BLah blah</p>
            <p className="py-2 border-b mx-8 text-center">BLah blah</p>
          </div>
          <div className="w-full flex justify-center ">
            <button className="bg-[#00df9a] text-black text-lg border-2 border-black uppercase font-bold rounded-md ml-4 w-48 h-12  my-6 px-6">
              Check it out
            </button>
          </div>
        </div>
        <div className="md:w-full bg-gray-100 w-[85%] justify-self-center shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            src={Me}
            alt="ok"
            className="w-20 mx-auto mt-[-8%] lg:mt-[-8%] md:mt-[-4%] rounded-full bg-white"
          />
          <h2 className="text-2xl font-bold text-center py-8">Project 1</h2>
          <p className="text-center font-bold text-4xl">Hola</p>
          <div>
            <p className="py-2 border-b mx-8 text-center mt-8">BLah blah</p>
            <p className="py-2 border-b mx-8 text-center">BLah blah</p>
            <p className="py-2 border-b mx-8 text-center">BLah blah</p>
            <p className="py-2 border-b mx-8 text-center">BLah blah</p>
            <p className="py-2 border-b mx-8 text-center">BLah blah</p>
          </div>
          <div className="w-full flex justify-center ">
            <button className="bg-black text-[#00df9a] uppercase font-bold rounded-md ml-4 w-48 h-12  my-6 px-6">
              Check it out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
