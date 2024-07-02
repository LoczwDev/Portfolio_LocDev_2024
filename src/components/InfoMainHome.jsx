import React, { useState } from "react";
import images from "../constants/images/images";
import { FaFacebookF } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiZalo } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import SkillProgress from "./ranger/SkillProgress";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import stable from "../constants/stable/stable";
export const InfoMainHome = () => {
  const [active, setActive] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.05,
  });
  const skills = [
    { skill: "Development", percentage: 90 },
    { skill: "UX/UI design", percentage: 80 },
    { skill: "Photography", percentage: 60 },
  ];
  const dataSocials = [
    {
      icon: <FaFacebookF />,
      link: "",
    },
    {
      icon: <CiInstagram />,
      link: "",
    },
    {
      icon: <SiZalo />,
      link: "",
    },
    {
      icon: <FaLinkedinIn />,
      link: "",
    },
    {
      icon: <FaGithub />,
      link: "",
    },
  ];

  const handleDownloadPdf = () => {
    const pdfUrl = stable.LINK_DOWN_CV;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.setAttribute("download", "file.pdf");
    document.body.appendChild(link);
    link.click();
    link.remove();
  };
  return (
    <div
      name="about"
      className="xl:absolute relative z-[50] xl:-bottom-40 bottom-0 bg-white flex xl:flex-row flex-col justify-between items-start gap-5 lg:p-10 p-5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] lg:max-w-7xl w-full right-[50%] transform translate-x-1/2"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="mx-auto"
      >
        <div className="rounded flex flex-col max-w-xl mx-auto relative shadow-2xl shadow-blue-500/20 ">
          <a href="#">
            <img
              className="w-[365px] relative"
              src={images.Avatar}
              alt="User"
            />
          </a>
          <div className="border -bottom-5 transform translate-x-1/2 right-1/2 w-[210px] py-2 px-1 rounded-md bg-white shadow-2xl shadow-blue-500/20 absolute z-50">
            <div className="flex items-center justify-between">
              {dataSocials.map((item, index) => (
                <a
                  key={index}
                  onClick={() => setActive(index)}
                  href={item.link}
                  className={`px-3 py-2 hover:text-white hover:bg-purple-500 ${
                    active === index
                      ? "bg-accent text-white"
                      : "text-purple-500 bg-transparent"
                  } `}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -100 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="w-full flex items-start gap-3"
      >
        <div className="flex flex-col justify-between w-full">
          <h2 className="text-3xl">
            I am Professional User <br /> Experience Designer
          </h2>
          <p className="text-gray-500 text-base text-justify ">
            I design and develop services for customers specializing creating
            stylish, modern websites, web services and online stores. My passion
            is to design digital user experiences. I design and develop services
            for customers specializing creating stylish, modern websites, web
            services.
          </p>
          <div className="w-full">
            {skills.map((skill, index) => (
              <SkillProgress
                key={index}
                skill={skill.skill}
                percentage={skill.percentage}
              />
            ))}
          </div>
          <div className="flex items-center gap-5 w-full">
            <div
              onClick={handleDownloadPdf}
              className="flex items-center gap-3 bg-accent border border-accent hover:bg-transparent duration-300 hover:text-accent px-5 py-2.5 rounded-full text-white cursor-pointer"
            >
              <LuDownload /> <span> Download CV</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
