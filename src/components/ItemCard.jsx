import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";
import { RxArrowTopRight } from "react-icons/rx";
export const ItemCard = () => {
  return (
    <div className="rounded-md border bg-white dark:bg-gray-800 shadow-lg ease-in-out transition-all transform hover:-translate-y-4 duration-500 group">
      <img
        src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
        alt="Laptop"
        className="h-[200px] w-full rounded-t-md object-cover"
      />
      <div className="p-4">
        <span className="text-gray-400 text-[12px]">UI-UX DESIGN</span>
        <h1 className="inline-flex items-center text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-purple-500 duration-500">
          Product Admin Dashboard &nbsp;
          <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
        </h1>

        <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
          Vivamus eleifend convallis ante, non pharetra libero molestie laoreet.
          Donec id imperdiet lacus.
        </p>
        <div className="mt-5 sm:flex md:mt-8">
          <div className="rounded-md shadow">
            <a
              href=""
              className="border-purple-500 text-base flex items-center gap-2 justify-center w-full px-8 py-2 font-medium  text-purple-500 hover:text-black transition duration-150 ease-in-out bg-white  border border-transparent rounded-md hover:bg-transparent focus:outline-none focus:shadow-outline-blue"
            >
              <span>Case Study</span> <FaArrowRightLong />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
