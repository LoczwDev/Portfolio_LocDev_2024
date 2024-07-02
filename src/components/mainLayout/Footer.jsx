import React from "react";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { BsFillSendFill } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className="bg-[#132238] py-10 lg:px-0 px-5" name="footer">
      <div className="max-w-7xl mx-auto">
        <div className="w-full flex justify-center items-center my-5">
          <h5 className="text-[38px] font-semibold text-center text-white py-10">
            GET IN <span className="text-purple-500">TOUCH</span>
          </h5>
        </div>
        <div className="w-full flex xl:flex-row flex-col gap-5 text-white ">
          <div>
            <h5 className="text-[28px] font-semibold mb-3">DON'T BE SHY !</h5>
            <span className="text-base font-normal text-gray-500">
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas or opportunities to be part of your
              visions.
            </span>
            <div className="flex flex-col gap-5 py-5">
              <div className="flex items-center gap-4">
                <div className="px-3 py-3 bg-purple-500 rounded-full">
                  <MdOutlineMarkEmailUnread className="text-2xl" />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-gray-500 font-medium">MAIL ME</span>
                  <p className="text-md text-white font-[400]">loczw17120@mail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="px-3 py-3 bg-purple-500 rounded-full">
                  <FiPhoneCall className="text-2xl" />
                </div>
                <div className="flex flex-col items-starts-start">
                  <span className="text-gray-500 font-medium">CALL ME</span>
                  <p className="text-md text-white font-[400]">+84 359 162 43</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex xl:flex-row flex-col items-center gap-4">
              <input
                type="text"
                placeholder="YOUR NAME"
                className="px-5 py-3 w-full xl:w-auto border rounded-full focus:border-purple-500 duration-300 outline-none bg-transparent placeholder:text-white placeholder:text-base text-white"
              />
              <input
                type="email"
                placeholder="YOUR EMAIL"
                className="px-5 py-3 w-full xl:w-auto border rounded-full focus:border-purple-500 duration-300 outline-none bg-transparent placeholder:text-white placeholder:text-base text-white"
              />

              <input
                type="text"
                placeholder="YOUR SUBJECT"
                className="px-5 py-3 w-full xl:w-auto border rounded-full focus:border-purple-500 duration-300 outline-none bg-transparent placeholder:text-white placeholder:text-base text-white"
              />
            </div>
            <textarea
              className=" mt-5 px-5 py-3 w-full border rounded-3xl focus:border-purple-500 duration-300 outline-none bg-transparent placeholder:text-white placeholder:text-base text-white resize-none"
              name=""
              placeholder="YOUR MESSAGE"
              rows={5}
              id=""
            ></textarea>
            <div className="relative lg:w-1/3 w-2/3 my-5">
              <button className="py-4 px-2 w-full rounded-full border border-purple-500 overflow-hidden relative group">
                <span className="relative z-10">SEND MESSAGE</span>
                <div className="absolute inset-0 w-full h-full bg-purple-500 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </button>
              <div className="absolute bottom-0 right-0 top-0 w-14 h-14 rounded-full flex items-center justify-center bg-purple-500">
                <BsFillSendFill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
