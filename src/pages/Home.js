import React from "react";
import Lander from "../components/Lander/Lander";
import Experience from "../components/Experience/Experience";
import StarsCanvas from "../canvas/Stars";
import Projects from "../components/Projects/Projects";
import "./Home.css";
const Home = () => {
  return (
    <>
      <Lander />
      <Experience />
      <Projects />
      <div className="relative z-1">
        {/*  */}
        <StarsCanvas />
      </div>
    </>
  );
};

export default Home;
