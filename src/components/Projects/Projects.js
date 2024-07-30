import React from "react";
import "./Projects.css";
import { LinkOutlined, GithubOutlined } from "@ant-design/icons";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Mousewheel, Pagination } from "swiper/modules";
const Projects = () => {
  return (
    <div className="project-wrapper">
      <div className="title-wrapper2">
        <h1 className="title">PROJECTS</h1>
      </div>
      <div className="card-wrapper">
        <Swiper
          direction={"horizontal"}
          slidesPerView={4.5}
          spaceBetween={30}
          mousewheel={true}
          modules={[Mousewheel, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            {" "}
            <div className="card">
              <div className="proj-img1"></div>
              <div className="proj-details">
                <h1 className="proj-title">Gamer's Burnout</h1>
                <p className="proj-desc">
                  A Game Zone Promotional and Slot Booking Website. Devloped
                  using ReactJs, ExpressJs,NodeJs and MongoDB. Dynamic UI & UX
                  with User friendly design.
                </p>
                <div className="code-block">
                  <h1 className="code-block-text" style={{ display: "inline" }}>
                    <LinkOutlined style={{ marginRight: "8px" }} />
                    <a href="https://gamersburnout-final-henna.vercel.app/">
                      Live Preview
                    </a>
                  </h1>

                  <h1 className="code-block-text" style={{ display: "inline" }}>
                    <GithubOutlined style={{ marginRight: "8px" }} />
                    <a href="https://github.com/tarun-2002/gamersburnout-final">
                      View Code
                    </a>
                  </h1>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="proj-img2"></div>
              <div className="proj-details">
                <h1 className="proj-title">Profill</h1>
                <p className="proj-desc">
                  Live and operational, Profill reduces students’ application
                  time by 60%, enhancing efficiency and streamlining the college
                  application process.
                </p>
                <div className="code-block">
                  <h1 className="code-block-text" style={{ display: "inline" }}>
                    <LinkOutlined style={{ marginRight: "8px" }} />
                    <a href="https://profill.in">Live Preview</a>
                  </h1>

                  <h1 className="code-block-text" style={{ display: "inline" }}>
                    <GithubOutlined style={{ marginRight: "8px" }} />
                    <a href="https://github.com/Profil-in">View Code</a>
                  </h1>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="proj-img3"></div>
              <div className="proj-details">
                <h1 className="proj-title">
                  Cloud-Based Analytics Platform on AWS
                </h1>
                <p className="proj-desc">
                  Built a cloud-based analytics platform on AWS using S3, AWS
                  Glue-ETL, and AWS Redshift reduces data processing costs.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="proj-img4"></div>
              <div className="proj-details">
                <h1 className="proj-title">Filmpire</h1>
                <p className="proj-desc">
                  The objective of this project is to create a movie review
                  website that provides users with access to a variety of movie
                  reviews, ratings, and trailers.
                </p>
                <div className="code-block">
                  <h1 className="code-block-text" style={{ display: "inline" }}>
                    <LinkOutlined style={{ marginRight: "8px" }} />
                    <a href="https://filmpirex.netlify.app/">Live Preview</a>
                  </h1>

                  <h1 className="code-block-text" style={{ display: "inline" }}>
                    <GithubOutlined style={{ marginRight: "8px" }} />
                    <a href="https://github.com/tarun-2002/filmpire-tarun">
                      View Code
                    </a>
                  </h1>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="proj-img5"></div>
              <div className="proj-details">
                <h1 className="proj-title">Beach Resort</h1>
                <p className="proj-desc">
                  Objective of this is to create a hotel booking website that
                  allows users to search for available hotels in a location,
                  select their dates, and make a booking.
                </p>
                <div className="code-block">
                  <h1 className="code-block-text" style={{ display: "inline" }}>
                    <LinkOutlined style={{ marginRight: "8px" }} />
                    <a href="https://hotel-book-iota.vercel.app/">
                      Live Preview
                    </a>
                  </h1>

                  <h1 className="code-block-text" style={{ display: "inline" }}>
                    <GithubOutlined style={{ marginRight: "8px" }} />
                    <a href="https://github.com/tarun-2002/hotel-book">
                      View Code
                    </a>
                  </h1>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="proj-img6"></div>
              <div className="proj-details">
                <h1 className="proj-title">BeSpoke Collectives</h1>
                <p className="proj-desc">
                  A Gifting E-Commerce Website. The Technology Stack used is
                  ReactJs, NodeJs, CSS, JavaScript, SliderJS and others. The
                  work is still under process.
                </p>
                <div className="code-block">
                  <h1 className="code-block-text" style={{ display: "inline" }}>
                    <LinkOutlined style={{ marginRight: "8px" }} />
                    <a href="https://bespoke-collectives.vercel.app/">
                      Live Preview
                    </a>
                  </h1>

                  <h1 className="code-block-text" style={{ display: "inline" }}>
                    <GithubOutlined style={{ marginRight: "8px" }} />
                    <a href="https://github.com/tarun-2002/bespoke-collectives">
                      View Code
                    </a>
                  </h1>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="proj-img7"></div>
              <div className="proj-details">
                <h1 className="proj-title">Book Review System</h1>
                <p className="proj-desc">
                  A platform which involves books of Ayush Ministry and allows
                  the users and a committee to review the books which can be
                  helpful for the students.
                </p>
                <div className="code-block">
                  <h1 className="code-block-text" style={{ display: "inline" }}>
                    <LinkOutlined style={{ marginRight: "8px" }} />
                    <a href="https://bespoke-collectives.vercel.app/">
                      Live Preview
                    </a>
                  </h1>

                  <h1 className="code-block-text" style={{ display: "inline" }}>
                    <GithubOutlined style={{ marginRight: "8px" }} />
                    <a href="https://github.com/tarun-2002/bespoke-collectives">
                      View Code
                    </a>
                  </h1>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
