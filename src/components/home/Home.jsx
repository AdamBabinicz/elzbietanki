import React from "react";
import AboutCard from "../about/AboutCard";
import HAbout from "./HAbout";
import Hero from "./hero/Hero";
import Testimonial from "../home/testimonial/Testimonial";
import HBlog from "./HBlog";
import HPrice from "./HPrice";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <HAbout />
      <Testimonial />
      <HBlog />
      <HPrice />
    </>
  );
};

export default Home;
