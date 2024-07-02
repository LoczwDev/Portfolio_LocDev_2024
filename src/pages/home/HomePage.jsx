import React from "react";
import { MainLayout } from "../../components/mainLayout/MainLayout";
import Service from "./container/Service";
import { Contact } from "./container/Contact";
import { Portfolio } from "./container/Portfolio";
import Skills from "./container/Skills";
import Testimonial from "./container/Testimonial";
import { BlogHome } from "./container/BlogHome";
import { Hero } from "../../components/Hero";

export const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <Service />
      <Contact />
      <Portfolio />
      <Skills />
      <Testimonial />
      <BlogHome />
    </MainLayout>
  );
};
