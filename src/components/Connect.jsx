import React from "react";

const Connect = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want to connect?
          </h1>
          <p>Notify me your mail. I'll get back to you in a day!!</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex w-full rounded-md text-black"
              type="email"
              placeholder="Enter Email"
            />
            <button className="bg-[#00df9a] text-black uppercase font-bold rounded-md ml-4 w-60 h-12  my-6 px-6">
              Notify Me
            </button>
          </div>
          <div className="flex w-full items-center justify-center md:justify-normal md:items-start">
            <p>
              If not text me in linkedIn.{" "}
              <a
                href="https://www.linkedin.com/in/gautam-p-5b43581b6/"
                className="text-[#00df9a] font-bold text-lg"
              >
                Click Me
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
