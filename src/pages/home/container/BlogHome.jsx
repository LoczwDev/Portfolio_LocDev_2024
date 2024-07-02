import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { ItemBlog } from "../../../components/ItemBlog";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import images from "../../../constants/images/images";

export const BlogHome = () => {
  const currentDate = new Date();
  const dataBlog = [
    {
      name: "How to Own Your Audience by Creating an Email List",
      thumbnail: images.Blog,
      desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...",
      type: "UI-UX DESIGN",
      time: currentDate,
    },
    {
      name: "How to Own Your Audience by Creating an Email List",
      thumbnail: images.Blog,
      desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...",
      type: "UI-UX DESIGN",
      time: currentDate,
    },
    {
      name: "How to Own Your Audience by Creating an Email List",
      thumbnail: images.Blog,
      desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...",
      type: "UI-UX DESIGN",
      time: currentDate,
    },
    {
      name: "How to Own Your Audience by Creating an Email List",
      thumbnail: images.Blog,
      desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...",
      type: "UI-UX DESIGN",
      time: currentDate,
    },
  ];
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  const options = {
    responsiveClass: true,
    dots: true,
    margin: 30,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <section className="max-w-7xl mx-auto lg:px-0 px-5" name="blog">
      <div className="w-full flex justify-between items-center mt-5">
        <h5 className="text-[38px] font-semibold text-center">
          My <span className="text-purple-500">Blog</span>
        </h5>
        <button className="bg-purple-500 px-5 py-2 rounded-full text-white font-semibold">
          See all
        </button>
      </div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -100 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        {dataBlog?.length > 0 ? (
          <OwlCarousel {...options} loop className="owl-theme">
            {dataBlog.map((item, index) => (
              <ItemBlog item={item} key={index} />
            ))}
          </OwlCarousel>
        ) : (
          <div className="py-2 bg-accent text-white rounded-full w-full">
            <p>There is currently no content for this section</p>
          </div>
        )}
      </motion.div>
    </section>
  );
};
