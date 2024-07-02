import React from "react";
import { MdArrowRightAlt } from "react-icons/md";

export const ItemBlog = ({ item }) => {
  return (
    <div className="flex py-3">
      <div className="lg:max-w-[30rem] max-w-full w-full rounded overflow-hidden shadow-lg group cursor-pointer">
        <div className="overflow-hidden  relative h-[300px]">
          <img
            className="w-full h-full group-hover:scale-110 duration-500"
            src={item.thumbnail}
            alt={item.name}
          />

          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-30"></div>
        </div>
        <div className="px-6 flex gap-x-3 py-3">
          <p className="text-gray-700 text-base font-[500]">
            {" "}
            {new Date(item.time).toLocaleDateString("en-US", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </p>
          <span>|</span>
          <div className="font-bold text-xl mb-2 text-purple-500">
            {item.type}
          </div>
        </div>
        <div className="px-6">
          <div className="font-bold text-lg mb-2 group-hover:text-purple-500 duration-500">
            {item.name}
          </div>
          <p className="text-gray-700 text-base line-clamp-5">{item.desc}</p>
        </div>
        <div className="px-6 py-4 flex gap-x-2 items-center">
          <p className="uppercase">View Details</p>
          <MdArrowRightAlt />
        </div>
      </div>
    </div>
  );
};
