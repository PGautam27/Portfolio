import { Carousel } from "flowbite-react";
import React from "react";

const Blog = () => {
  return (
    <div className="bg-white h-[40rem]">
      <Carousel>
        <div className="flex w-[50rem] h-96 bg-gray-600">Slide 1</div>
        <div className="flex h-96 bg-gray-600">Slide 2</div>
        <div className="flex h-96 bg-gray-600">Slide 3</div>
        <div className="flex h-96 bg-gray-600">Slide 4</div>
      </Carousel>
    </div>
  );
};

export default Blog;
