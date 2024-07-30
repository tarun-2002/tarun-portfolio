import React from "react";
import "./AboutMe.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Mousewheel, Pagination } from "swiper/modules";
const AboutMe = () => {
  return (
    <>
      <div className="aboutMe-wrapper">
        <div className="title-wrapper2">
          <h1 className="title">MORE ABOUT ME</h1>
        </div>
        <div className="about-tarun">
          <div className="shadow-wrapper">
            <img
              className="about-shadow"
              alt=""
              src="https://ik.imagekit.io/mtmwll7w3/tarunPortfolio/aboutmeShadow.png?updatedAt=1706163016709"
            />
            <div className="tarun-img-bg">
              <img
                className="tarun-img"
                alt=""
                src="https://ik.imagekit.io/mtmwll7w3/tarunPortfolio/IMG_3027%202.heic?updatedAt=1706165875715"
              />
            </div>
            <div className="about-tarun-wrapper">
              <div className="about-first-heading">
                <h4>Full Stack Engineer</h4>
                <h1>Tarun Jaiswal</h1>
              </div>
              <div className="about-tarun-text">
                <p>
                  Hey, I am Tarun. I want to leverage my skills and experience
                  in Web Development and Software Development to secure a
                  challenging role as a Web Developer and Software Developer in
                  a dynamic organization where I can continue to learn and grow
                  while making a significant contribution to the company’s
                  success.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="about-photography">
          <div className="shadow-photography-wrapper">
            <img
              className="about-photography-shadow"
              alt=""
              src="https://ik.imagekit.io/mtmwll7w3/tarunPortfolio/aboutmeShadow.png?updatedAt=1706163016709"
            />
            <div className="photography-img-bg">
              <Swiper
                direction={"horizontal"}
                slidesPerView={1}
                spaceBetween={30}
                mousewheel={true}
                modules={[Mousewheel, Pagination]}
                className="mySwiper2"
              >
                <SwiperSlide>
                  {" "}
                  <img
                    className="photography-img"
                    alt=""
                    src="https://ik.imagekit.io/mtmwll7w3/tarunPortfolio/IMG_3027%202.heic?updatedAt=1706165875715"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="about-photography-wrapper">
              <div className="about-photography-heading">
                <h4>Photography</h4>
                <h1>Sometimes I love to Capture</h1>
              </div>
              <div className="about-photography-text">
                <p>
                  Photography is a way for me to express my creativity and
                  capture the world through my unique perspective. I love how it
                  allows me to freeze moments in time, tell stories without
                  words. Being a creative person, photography gives me the
                  freedom to explore new ideas, push boundaries, and constantly
                  evolve my artistic vision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
