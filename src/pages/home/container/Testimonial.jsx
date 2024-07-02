import React from "react";
import H2MainTitle from "../../../components/H2MainTitle";
import TestimonialSlider from "../../../components/testimonial/TestimonialSlider";


const Testimonial = () => {
  return (
    <section className="bg-[#132238]">
      <div className="w-full text-center max-w-7xl mx-auto lg:py-0 py-10">
        <H2MainTitle title={"Testemonials"} />
        <TestimonialSlider />
      </div>
    </section>
  );
};

export default Testimonial;
