import React from "react";
import Lander from "../components/Lander/Lander";
import Experience from "../components/Experience/Experience";
import StarsCanvas from "../canvas/Stars";
import Projects from "../components/Projects/Projects";
import "./Home.css";
import TechStack from "../components/TechStack/TechStack";
import AboutMe from "../components/AboutMe/AboutMe";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";
const Home = () => {
  return (
    <>
      <Lander />
      <Experience />
      <Projects />
      <TechStack />
      <AboutMe />
      <Testimonials />
      <Footer />
      <div className="relative z-1">
        {/*  */}
        <StarsCanvas />
      </div>
    </>
  );
};

export default Home;
