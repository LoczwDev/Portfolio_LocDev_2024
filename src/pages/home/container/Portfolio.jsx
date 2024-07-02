import React from "react";
import { ItemCard } from "../../../components/ItemCard";
import H2MainTitle from "../../../components/H2MainTitle";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import images from "../../../constants/images/images";

export const Portfolio = () => {
  const dataItem = [
    {
      type: "UI-UX DESIGN",
      thumbnail: images.Card,
      name: "Product Admin Dashboard",
      desc: "UX/UI website product with a modern interface and fully conveys the content that the developer is aiming for.",
    },
    {
      type: "UI-UX DESIGN",
      thumbnail: images.Card,
      name: "Product Admin Dashboard",
      desc: "UX/UI website product with a modern interface and fully conveys the content that the developer is aiming for.",
    },
    {
      type: "UI-UX DESIGN",
      thumbnail: images.Card,
      name: "Product Admin Dashboard",
      desc: "UX/UI website product with a modern interface and fully conveys the content that the developer is aiming for.",
    },
    {
      type: "UI-UX DESIGN",
      thumbnail: images.Card,
      name: "Product Admin Dashboard",
      desc: "UX/UI website product with a modern interface and fully conveys the content that the developer is aiming for.",
    },
    {
      type: "UI-UX DESIGN",
      thumbnail: images.Card,
      name: "Product Admin Dashboard",
      desc: "UX/UI website product with a modern interface and fully conveys the content that the developer is aiming for.",
    },
    {
      type: "UI-UX DESIGN",
      thumbnail: images.Card,
      name: "Product Admin Dashboard",
      desc: "UX/UI website product with a modern interface and fully conveys the content that the developer is aiming for.",
    },
  ];
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.05,
  });
  return (
    <section className="max-w-7xl mx-auto px-3" name="portfolio">
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
        {dataItem.length > 0 ? (
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2">
            {dataItem.map((item, index) => (
              <ItemCard item={item} key={index} />
            ))}
          </div>
        ) : (
          <div className="w-full py-2 bg-accent rounded-full text-white">
            <p className="text-center">
              There is currently no content for this section
            </p>
          </div>
        )}
        {dataItem.length > 0 && (
          <div className="flex w-full justify-center my-5">
            <button className="bg-purple-500 px-5 py-2 rounded-md border border-purple-500 text-white hover:text-purple-500 font-semibold hover:bg-transparent duration-300">
              More Project
            </button>
          </div>
        )}
      </motion.div>
    </section>
  );
};
