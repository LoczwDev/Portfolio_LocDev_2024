import React from "react";
import { motion } from "framer-motion";

const transitionVariants = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "0%"],
  },
};

const Transition = () => {
  return (
    <>
      <motion.div
        key="bg1"
        className="fixed top-0 bottom-0 right-full h-screen w-screen z-[10001] bg-[#2e2257]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0, duration: 0.5, ease: "easeOut" }}
      ></motion.div>
      <motion.div
        key="bg2"
        className="fixed top-0 bottom-0 right-full h-screen w-screen z-[10010] bg-[#3b2d71]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
      ></motion.div>
      <motion.div
        key="bg3"
        className="fixed top-0 bottom-0 right-full h-screen w-screen z-[10020] bg-[#4b3792]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
      ></motion.div>
    </>
  );
};

export default Transition;
