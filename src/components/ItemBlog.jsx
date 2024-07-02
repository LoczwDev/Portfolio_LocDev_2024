import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { MdArrowRightAlt } from "react-icons/md";

export const ItemBlog = () => {
  return (
    <div className="flex px-3 py-3">
      <div className="lg:max-w-[30rem] max-w-full w-full rounded overflow-hidden shadow-lg group cursor-pointer">
        <div className="overflow-hidden  relative h-[300px]">
          <img
            className="w-full h-full group-hover:scale-110 duration-500"
            src="https://slimhamdi.net/tunis/demos/img/blog/blog-post-1.jpg"
            alt="Sunset in the mountains"
          />

          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-30"></div>
        </div>
        <div className="px-6 flex gap-x-3 py-3">
          <p className="text-gray-700 text-base">10 Now 2024</p>
          <span>|</span>
          <div className="font-bold text-xl mb-2 text-purple-500">
            UI/UX Design
          </div>
        </div>
        <div className="px-6">
          <div className="font-bold text-lg mb-2 group-hover:text-purple-500 duration-500">
            How to Own Your Audience by Creating an Email List
          </div>
          <p className="text-gray-700 text-base line-clamp-5">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore...
          </p>
        </div>
        <div className="px-6 py-4 flex gap-x-2 items-center">
          <p className="uppercase">View Details</p>
          <MdArrowRightAlt />
        </div>
      </div>
    </div>
  );
};
