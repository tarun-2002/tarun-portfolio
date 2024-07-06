import React from "react";
import Slider from "../Slider/Slider";
import "./Testimonials.css";
const Testimonials = () => {
  return (
    <>
      <div className="tech-stack-wrapper">
        <div className="title-wrapper2">
          <h1 className="title">TESTIMONIALS</h1>
        </div>
      </div>
      <div className="slider-container">
        <img
          className="overlap-image"
          src="https://ik.imagekit.io/mtmwll7w3/ayushShivhare/pseudo.png?updatedAt=1698524991199"
        ></img>
        <Slider />
      </div>
    </>
  );
};

export default Testimonials;
