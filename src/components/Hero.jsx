import React, { useEffect, useState } from "react";
import images from "../constants/images/images";
import { InfoMainHome } from "./InfoMainHome";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const dataInfo = [
  {
    title: "2 M.",
    subtitle: "Experience",
  },
  {
    title: "10+",
    subtitle: "Project Completed",
  },
  {
    title: "50+",
    subtitle: "Happy Client",
  },
];

export const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.05,
  });

  const dataText = ["Tran Huu Loc", "Web Developer", "FrontEnd Developer"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      if (isDeleting) {
        if (currentCharIndex > 0) {
          setCurrentCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % dataText.length);
        }
      } else {
        if (currentCharIndex < dataText[currentIndex].length) {
          setCurrentCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 300);
        }
      }
    };

    const interval = setInterval(handleTyping, 150);
    return () => clearInterval(interval);
  }, [currentCharIndex, currentIndex, isDeleting, dataText]);
  return (
    <section className="w-full xl:h-[150vh] h-auto z-10 bg_hero relative">
      <div className="relative flex flex-col-reverse items-center justify-between w-full md:flex-row py-8 max-w-7xl mx-auto pt-20 lg:px-0 px-2">
        <div className="flex flex-col items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-5xl">
              Hello, I’m <br />
              <span className="text-accent lg:inline block w-full">
                {dataText[currentIndex].slice(0, currentCharIndex)}|
              </span>
            </h2>
            <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              "I’m a final-year student at Can Tho University, majoring in
              Information Technology. I strive to build immersive and beautiful
              web applications through carefully crafted code and user-centric
              design."
            </p>
            <div className="mt-5">
              <div className="px-3 py-2.5 animate-bounce duration-300 rounded-lg bg-accent hover:bg-transparent hover:text-accent border border-accent text-white text-[20px] font-bold xl:w-1/3 w-[200px] flex items-center gap-2 cursor-pointer">
                <span className="animate-wave block">👋</span> Say Hello!
              </div>
            </div>
          </motion.div>
          <div className="flex flex-wrap items-center gap-1 w-full mt-10 ">
            {dataInfo.map((item, index) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 100 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1 }}
                key={index}
                className="flex flex-col bg-accent/20 rounded-xl text-gray-700 px-5 py-3 items-center xl:w-[200px] lg:w-[197px] w-full"
              >
                <h5 className="font-bold lg:text-[32px] text-[20px]">{item.title}</h5>
                <p className="text-gray-500 lg:text-base text-[14px]">{item.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 2 }}
          className="border border-yellow-500 rounded-full shadow-yellow-800/80 shadow-2xl"
        >
          <img
            className="rounded-full lg:w-[400px] lg:h-[400px] w-[300px] h-[300px] object-cover  border border-yellow-500 shadow-inner"
            src={images.Avatar}
            alt=""
          />
        </motion.div>
      </div>
      <InfoMainHome />
    </section>
  );
};
