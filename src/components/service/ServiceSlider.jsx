// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: "Branding",
    description:
      "I'm a branding expert, crafting unique visual identities that tell your story and resonate with your audience.",
  },
  {
    icon: <RxPencil2 />,
    title: "Design",
    description:
      "I specialize in web development and design, creating visually appealing, user-friendly digital experiences.",
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description:
      "I specialize in user experience research, collaborating on web development, and ensuring user-friendly digital products.",
  },
  {
    icon: <RxReader />,
    title: "Copywriting",
    description:
      "I perform usability testing and optimize designs websites based on real-user feedback for seamless interactions.",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description:
      "Design a website with SEO standards today, making it easy for users to find you",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        800: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {/* Add your slides here */}
      {serviceData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="bg-[#F8F8F8] hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer">
            {/* icon */}
            <div className="text-4xl text-accent mb-4">{item.icon}</div>
            {/* title & desc */}
            <div className="mb-8 h-[120px] ">
              <div className="mb-2 text-lg">{item.title}</div>
              <p className="max-w-[350px]  leading-normal">
                {item.description}
              </p>
            </div>
            {/* arrow */}
            <div className="text-3xl">
              <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
