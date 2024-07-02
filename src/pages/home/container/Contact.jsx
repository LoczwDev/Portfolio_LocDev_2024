import React from "react";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { PiShootingStarFill } from "react-icons/pi";
import { FaAward } from "react-icons/fa6";
import { PiCertificateFill } from "react-icons/pi";

export const Contact = () => {
  const dataExtra = [
    {
      icon: <PiShootingStarFill className="text-purple-500" />,
      title: "4.9/5.0 Average Ratings",
    },
    {
      icon: <FaAward className="text-purple-500" />,
      title: "25+ Winning Awards",
    },
    {
      icon: <PiShootingStarFill className="text-purple-500" />,
      title: "Certified Product Designer",
    },
  ];
  return (
    <section className="bg-[#132238] w-full py-14 lg:px-0 px-5">
      <div className="max-w-7xl mx-auto">
        <h5 className="text-[38px] font-semibold text-center text-white">
          Have an Awsome Project <br /> Idea?
          <span className="text-purple-500"> Let’s Discuss</span>
        </h5>
        <div className="py-2">
          <div className="flex relative items-center border rounded-full lg:w-2/3 w-full mx-auto px-5">
            <button className="bg-purple-500 bg-opacity-30 flex justify-center items-center px-3 py-3 rounded-full">
              <MdOutlineMarkEmailUnread className="text-purple-500 text-xl" />
            </button>
            <input
              type="text"
              placeholder="Enter Email Address"
              className="px-5 py-5 border-none outline-none w-full bg-transparent placeholder:text-white placeholder:text-base text-white"
            />
            <button className="bg-purple-500 px-5 py-2 rounded-full text-white font-semibold">
              Send
            </button>
          </div>
          <div className="items-center justify-between lg:w-2/3 w-full mx-auto px-5 py-1 lg:flex hidden ">
            {dataExtra?.map((item, index) => (
              <div key={index} className="flex lg:flex-row flex-col lg:items-center items-start gap-2">
                {item.icon}
                <span className="font-semibold text-base text-white">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
