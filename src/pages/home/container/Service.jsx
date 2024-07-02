import React, { useEffect, useState } from "react";
import ServiceSlider from "../../../components/service/ServiceSlider";
import H2MainTitle from "../../../components/H2MainTitle";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Service = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  return (
    <div
      className="max-w-7xl mx-auto lg:mt-32 mt-12 lg:px-0 px-5"
      name="services"
    >
      <div className="w-full flex flex-col items-center justify-center">
        {/* text */}
        <div className="text-center flex flex-col items-center justify-center lg:text-left mb-4 w-full">
          <H2MainTitle title={"Service"} />
          <p className="mb-4 text-center text-black">
            Explore my design services, from user interface and experience to
            prototyping and testing. <br /> Let's craft exceptional digital
            experiences together.
          </p>
        </div>
        {/* slider */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="w-full z-10 relative"
        >
          <ServiceSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default Service;
