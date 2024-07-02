import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";
import { RxArrowTopRight } from "react-icons/rx";
export const ItemCard = ({ item }) => {
  return (
    <div className="rounded-md border bg-white dark:bg-gray-800 shadow-lg ease-in-out transition-all transform hover:-translate-y-4 duration-500 group">
      <img
        src={item.thumbnail}
        alt="Laptop"
        className="h-[200px] w-full rounded-t-md object-cover"
      />
      <div className="p-4">
        <span className="text-gray-400 text-[12px]">{item.type}</span>
        <h1 className="inline-flex items-center text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-purple-500 duration-500">
          {item.name}
          <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
        </h1>

        <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
          {item.desc}
        </p>
        <div className="mt-5 md:mt-8 lg:flex hidden">
          <div className="rounded-md shadow">
            <a
              href=""
              className="border-purple-500 text-base flex items-center gap-2 justify-center w-full md:px-8 px-4 py-2 font-medium  text-purple-500 hover:text-black transition duration-150 ease-in-out bg-white  border border-transparent rounded-md hover:bg-transparent focus:outline-none focus:shadow-outline-blue"
            >
              <span>Case Study</span> <FaArrowRightLong />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
