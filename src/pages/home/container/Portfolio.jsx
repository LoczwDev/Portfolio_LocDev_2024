import React from "react";
import { ItemCard } from "../../../components/ItemCard";
import H2MainTitle from "../../../components/H2MainTitle";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export const Portfolio = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.05,
  });
  return (
    <section className="max-w-7xl mx-auto" name='portfolio'>
      <div className="w-full flex justify-center items-center my-5">
        <H2MainTitle title={"Portfolio"} />
      </div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="flex flex-col items-center"
      >
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </div>
        <div className="flex w-full justify-center my-5">
          <button className="bg-purple-500 px-5 py-2 rounded-md border border-purple-500 text-white hover:text-purple-500 font-semibold hover:bg-transparent duration-300">
            More Project
          </button>
        </div>
      </motion.div>
    </section>
  );
};
