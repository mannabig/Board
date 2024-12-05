import React from "react";
import Hero from "../component/Hero";
import Aboutpage from "../component/Aboutpage";
import Servicepage from "../component/Servicepage";
import Ourwork from "../component/Ourwork";
import Project from "../component/Project";
import Testimonial from "../component/Testimonial";
import Faqs from "../component/Faqs";
import Community from "../component/Community";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Aboutpage />
      <Servicepage />
      <Ourwork />
      <Project />
      <Testimonial />
      <Faqs />
      <Community />
    </div>
  );
};

export default Homepage;
